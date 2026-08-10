import { VscMortarBoard, VscLocation } from 'react-icons/vsc';

import styles from '@/styles/AcademicsPage.module.css';

export default function AcademicsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscMortarBoard className={styles.icon} size={24} />
            </div>
            
            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Academic Journey</h1>
              </div>
              
              <p className={styles.subtitle}>
                Consistent Learning With Strong Results
              </p>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I am currently in my third year at Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal, with a CGPA of 9.48.
            </p>
          </section>

          <section className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.degree}>Engineering (B.E)</h3>
                <span className={styles.score}>CGPA - 9.48</span>
              </div>
              <p className={styles.institution}>Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal</p>
              <div className={styles.timelineMeta}>
                <VscLocation size={14} />
                <span>Bantakal, Udupi</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.degree}>Pre-University</h3>
                <span className={styles.score}>97.67%</span>
              </div>
              <p className={styles.institution}>Poornaprajna Pre-University College</p>
              <div className={styles.timelineMeta}>
                <VscLocation size={14} />
                <span>Udupi</span>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.degree}>SSLC</h3>
                <span className={styles.score}>99.52%</span>
              </div>
              <p className={styles.institution}>Shanthiniketan</p>
              <div className={styles.timelineMeta}>
                <VscLocation size={14} />
                <span>Alevoor, Udupi</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
