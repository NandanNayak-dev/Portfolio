const fs = require('fs');
const path = require('path');

const replaceInFile = (file, replacements) => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(({from, to}) => {
    content = content.replace(from, to);
  });
  fs.writeFileSync(file, content);
};

// 1. src/lib/themes.js
replaceInFile(path.join(__dirname, 'src/lib/themes.js'), [
  {
    from: /export\s+interface\s+ThemeInfo\s*\{[\s\S]*?\}\s*export\s+const\s+THEMES:\s*ThemeInfo\[\]\s*=\s*\[/,
    to: 'export const THEMES = ['
  }
]);

// 2. src/components/Titlebar.jsx
replaceInFile(path.join(__dirname, 'src/components/Titlebar.jsx'), [
  {
    from: /interface\s+TitlebarProps\s*\{[\s\S]*?\}\s*const\s+Titlebar\s*=\s*\(\{\s*onOpenCommandPalette\s*\}\s*:\s*TitlebarProps\)\s*=>\s*\{/,
    to: 'const Titlebar = ({ onOpenCommandPalette }) => {'
  }
]);

// 3. src/components/Bottombar.jsx
replaceInFile(path.join(__dirname, 'src/components/Bottombar.jsx'), [
  {
    from: /interface\s+BottombarProps\s*\{[\s\S]*?\}\s*const\s+Bottombar\s*=\s*\(\{\s*onTerminalToggle,\s*isTerminalOpen\s*\}\s*:\s*BottombarProps\)\s*=>\s*\{/,
    to: 'const Bottombar = ({ onTerminalToggle, isTerminalOpen }) => {'
  }
]);

// 4. src/components/Terminal.jsx
replaceInFile(path.join(__dirname, 'src/components/Terminal.jsx'), [
  {
    from: /interface\s+TerminalLine\s*\{[\s\S]*?\}\s*interface\s+TerminalProps\s*\{[\s\S]*?\}\s*const\s+Terminal\s*=\s*\(\{\s*onToggle\s*\}\s*:\s*TerminalProps\)\s*=>\s*\{/,
    to: 'const Terminal = ({ onToggle }) => {'
  },
  {
    from: /useState<TerminalLine\[\]>/g,
    to: 'useState'
  },
  {
    from: /const input = e\.target as HTMLInputElement;/g,
    to: 'const input = e.target;'
  },
  {
    from: /const handleKeyDown = \(e: KeyboardEvent<HTMLInputElement>\) => {/g,
    to: 'const handleKeyDown = (e) => {'
  },
  {
    from: /const handleClick = \(e: MouseEvent\) => {/g,
    to: 'const handleClick = (e) => {'
  }
]);

// 5. src/components/CommandPalette.jsx
replaceInFile(path.join(__dirname, 'src/components/CommandPalette.jsx'), [
  {
    from: /interface\s+Command\s*\{[\s\S]*?\}\s*interface\s+CommandPaletteProps\s*\{[\s\S]*?\}\s*const\s+CommandPalette\s*=\s*\(\{\s*isOpen,\s*onClose,\s*onToggleTerminal,\s*isTerminalOpen\s*\}\)/,
    to: 'const CommandPalette = ({ isOpen, onClose, onToggleTerminal, isTerminalOpen })'
  },
  {
    from: /\(e: KeyboardEvent\)/g,
    to: '(e)'
  },
  {
    from: /const selectedElement = listRef\.current\.children\[selectedIndex\] as HTMLElement;/g,
    to: 'const selectedElement = listRef.current.children[selectedIndex];'
  },
  {
    from: /\(index: number\)/g,
    to: '(index)'
  }
]);

console.log("Types stripped.");
