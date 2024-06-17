import styles from '../styles/Projects.module.css'

export default function Projects({data}) {
  return (
    <div className={styles.container}>
      {data.map(({id, name, description, duration, link}) => (
        <a data-aos='fade-up' key={id} className={styles.card} href={link}>
          {/* <div>Icon</div> */}
          <div className={styles.contents}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div>{duration}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
