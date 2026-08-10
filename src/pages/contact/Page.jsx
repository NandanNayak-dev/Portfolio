import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Let Us Build Something Useful</h1>
      <p className={styles.pageSubtitle}>
        Bantakal, Udupi, Karnataka<br />
        Open to internships, collaboration, and project ideas. The fastest way to reach me is by email. You can also explore my repositories on GitHub or check my problem-solving profile on LeetCode.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
