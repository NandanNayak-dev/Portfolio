'use client';

import { Link } from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';

import styles from '@/styles/Tab.module.css';

const Tab = ({ icon, filename, path }) => {
  const { pathname } = useLocation();

  const isExternal = path.startsWith('http');
  const content = (
    <div
      className={`${styles.tab} ${pathname === path && styles.active}`}
    >
      <img src={icon} alt={filename} height={18} width={18} />
      <p>{filename}</p>
    </div>
  );

  return isExternal ? (
    <a href={path} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link to={path}>
      {content}
    </Link>
  );
};

export default Tab;
