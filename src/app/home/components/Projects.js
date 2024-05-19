import styles from '../styles/Projects.module.css'

export default function Projects({data}) {
  return (
    <div data-aos='zoom-in' className={styles.container}>
      {data.map(({id, name, description, duration, link}) => (
        <a key={id} className={styles.card} href={link}>
          <div>Icon</div>
          <div className={styles.contents}>
            <p>{name}</p>
            <p>{description}</p>
            <p>{duration}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
