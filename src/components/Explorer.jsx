import { Link } from 'react-router-dom';

import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.java',
    path: '/',
    icon: '/logos/java_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: '/logos/html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: '/logos/css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: '/logos/js_icon.svg',
  },
  {
    name: 'academics.py',
    path: '/academics',
    icon: '/logos/python_icon.svg',
  },
  {
    name: 'resume.pdf',
    path: '/resume',
    icon: '/logos/markdown_icon.svg',
  },
  {
    name: 'github.md',
    path: 'https://github.com/NandanNayak-dev',
    icon: '/logos/markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => {
            const isExternal = item.path.startsWith('http');
            const content = (
              <div className={styles.file}>
                <img src={item.icon} alt={item.name} height={18} width={18} />{' '}
                <p>{item.name}</p>
              </div>
            );
            return isExternal ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer" key={item.name} style={{textDecoration: 'none'}}>
                {content}
              </a>
            ) : (
              <Link to={item.path} key={item.name}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
