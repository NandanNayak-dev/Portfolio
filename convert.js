const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace next/link
  if (content.includes("from 'next/link'") || content.includes('from "next/link"')) {
    content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?/g, "import { Link } from 'react-router-dom';");
    content = content.replace(/<Link\s+href=/g, "<Link to=");
    changed = true;
  }

  // Replace next/image
  if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
    content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g, "");
    content = content.replace(/<Image/g, "<img");
    changed = true;
  }

  // Replace next/navigation
  if (content.includes("from 'next/navigation'") || content.includes('from "next/navigation"')) {
    content = content.replace(/import\s+\{[^}]+\}\s+from\s+['"]next\/navigation['"];?/g, "import { useLocation, useNavigate } from 'react-router-dom';");
    content = content.replace(/usePathname/g, "useLocation");
    content = content.replace(/useRouter/g, "useNavigate");
    // next's useRouter() returns { push }, react-router's useNavigate() returns navigate function directly.
    // I will manually fix useRouter usages if needed.
    changed = true;
  }
  
  // Replace Metadata (Next.js specific exports)
  if (content.includes("export const metadata =") || content.includes("export const metadata:")) {
    content = content.replace(/import\s+\{\s*Metadata\s*\}\s*from\s+['"]next['"];?/g, "");
    content = content.replace(/export\s+const\s+metadata[^;]+;/g, "");
    // Sometimes it spans multiple lines
    content = content.replace(/export\s+const\s+metadata[\s\S]*?};/g, "");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log("Updated:", file);
  }
});
