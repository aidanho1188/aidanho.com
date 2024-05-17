import styles from '../styles/Projects.module.css'

export default function Projects({data}) {
  return (
    <div data-aos='zoom-in' className={styles.container}>
      {data.map(({id, name, description, duration}) => (
        <div key={id} className={styles.card}>
          <div>Icon</div>
          <div className={styles.contents}>
            <p>{name}</p>
            <p>{description}</p>
            <p>{duration}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
