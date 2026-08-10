'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.imageWrapper}>
              <img src="/profile.jpg" alt="Nandan Nayak" className={styles.profileImage} />
            </div>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Nandan Nayak</h1>
              <p className={styles.role}>Web Development & Problem Solving</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Udupi, Karnataka
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/NandanNayak-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link to="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Focus Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>My Focus</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <h3 className={styles.expRole}>Full-stack Web Apps</h3>
                <p className={styles.expDesc}>
                  I build practical applications with authentication, dashboards, CRUD workflows, APIs, and responsive user interfaces.
                </p>
                <Link to="/projects" className={styles.writingLink} style={{marginTop: '12px', display: 'inline-flex'}}>
                  <span>See Projects</span>
                  <VscLinkExternal size={14} />
                </Link>
              </div>

              <div className={styles.experienceCard}>
                <h3 className={styles.expRole}>DSA Practice</h3>
                <p className={styles.expDesc}>
                  I actively improve my algorithmic thinking through LeetCode and GeeksforGeeks, data structures, debugging, and clean JavaScript solutions.
                </p>
                <div className={styles.writingLinks} style={{marginTop: '12px'}}>
                  <a 
                    href="https://leetcode.com/u/NandanNayak99/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.writingLink}
                  >
                    <span>Open LeetCode</span>
                    <VscLinkExternal size={14} />
                  </a>
                  <a 
                    href="https://www.geeksforgeeks.org/profile/nandannab6w9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.writingLink}
                  >
                    <span>Open GFG</span>
                    <VscLinkExternal size={14} />
                  </a>
                </div>
              </div>

              <div className={styles.experienceCard}>
                <h3 className={styles.expRole}>Real-world Projects</h3>
                <p className={styles.expDesc}>
                  My work includes e-learning, tournament management, parking booking, marketplace, weather, and visualization projects.
                </p>
                <a 
                  href="https://github.com/NandanNayak-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                  style={{marginTop: '12px', display: 'inline-flex'}}
                >
                  <span>Open GitHub</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>HTML & CSS</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>90%</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>JavaScript</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>75%</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>DSA</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>80%</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>ReactJS</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>30%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link to="/academics" className={styles.footerLink}>
            View my academics →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
