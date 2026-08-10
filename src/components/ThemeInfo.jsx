'use client';


import { VscCheck } from 'react-icons/vsc';

import styles from '@/styles/ThemeInfo.module.css';

const ThemeInfo = ({ icon, name, publisher, theme, isActive, onSelect }) => {
  return (
    <button 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={() => onSelect(theme)}
    >
      <div className={styles.preview}>
        <img
          src={icon}
          alt={name}
          height={40}
          width={40}
          className={styles.icon}
        />
        {isActive && (
          <div className={styles.check}>
            <VscCheck size={14} />
          </div>
        )}
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.publisher}>{publisher}</p>
      </div>
    </button>
  );
};

export default ThemeInfo;
