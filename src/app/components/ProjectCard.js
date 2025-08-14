import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  title,
  tags,
  description,
  features,
  image,
  hoverTitle,
  link
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>&quot;{title}&quot;</h2>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="left" 
          className={styles.projectImage}
        />
        <div className={styles.hoverContent}>
          <h3>{hoverTitle}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={styles.readButton}>Leia</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

