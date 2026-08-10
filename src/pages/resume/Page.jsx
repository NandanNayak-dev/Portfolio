import styles from '@/styles/ResumePage.module.css';

const ResumePage = () => {
  return (
    <div className={styles.page}>
      <iframe
        src="/resume.pdf"
        className={styles.pdfViewer}
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;
