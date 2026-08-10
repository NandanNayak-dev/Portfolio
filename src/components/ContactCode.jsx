import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'nandannayak2102@gmail.com',
    href: 'mailto:nandannayak2102@gmail.com',
  },
  {
    social: 'github',
    link: 'NandanNayak-dev',
    href: 'https://github.com/NandanNayak-dev',
  },
  {
    social: 'linkedin',
    link: 'nandan-nayak',
    href: 'https://linkedin.com/in/nandan-nayak',
  },
  {
    social: 'leetcode',
    link: 'NandanNayak99',
    href: 'https://leetcode.com/u/NandanNayak99/',
  },
  {
    social: 'geeksforgeeks',
    link: 'nandannab6w9',
    href: 'https://www.geeksforgeeks.org/profile/nandannab6w9',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
