'use client';

import { Link } from 'react-router-dom';
import { VscArrowRight, VscMortarBoard, VscCode, VscGlobe } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello! I am</p>
            
            <h1 className={styles.name}>Nandan Nayak</h1>
            
            <p className={styles.role}>Third-year engineering student</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
              I am studying at Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal. 
              I enjoy building useful web applications and strengthening my problem-solving skills through DSA.
            </p>
          </div>

          <div className={styles.actions}>
            <Link to="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href="https://leetcode.com/u/NandanNayak99/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscMortarBoard size={16} />
              <span>LeetCode</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <a 
              href="https://www.geeksforgeeks.org/profile/nandannab6w9" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGlobe size={16} />
              <span>GeeksforGeeks</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
