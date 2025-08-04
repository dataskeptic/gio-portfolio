import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  title,
  tags,
  description,
  features,
  image,
  hoverTitle
}) => {
  return (
    <div className={styles.projectCard}>
      {/* The text content, which will fade out on hover */}
      <div className={styles.textContent}>
        <h2 className={styles.title}>"{title}"</h2>
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

      {/* The single image container that expands */}
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="left" /* Ensures the image expands from the start */
          className={styles.projectImage}
        />
        {/* The content that appears over the image on hover */}
        <div className={styles.hoverContent}>
          <h3>{hoverTitle}</h3>
          <button className={styles.readButton}>Leia</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

