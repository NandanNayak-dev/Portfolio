import { VscLinkExternal } from 'react-icons/vsc';

import styles from '@/styles/ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                width={18}
                height={18}
                className={styles.logo}
              />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.action}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project
            <VscLinkExternal size={12} />
          </a>
          {project.secondaryLink && (
            <a href={project.secondaryLink} target="_blank" rel="noopener noreferrer" className={styles.link} style={{marginLeft: '16px'}}>
              {project.secondaryLinkLabel || 'Secondary Link'}
              <VscLinkExternal size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
