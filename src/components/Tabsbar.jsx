import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/java_icon.svg" filename="home.java" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab
        icon="/logos/python_icon.svg"
        filename="academics.py"
        path="/academics"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="resume.pdf"
        path="/resume"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="https://github.com/NandanNayak-dev"
      />
    </div>
  );
};

export default Tabsbar;
