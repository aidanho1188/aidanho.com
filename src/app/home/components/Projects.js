import styles from '../styles/Projects.module.css'

export default function Projects({data}) {
  return (
    <div className={styles.containter}>
      {data.projects.map(({id, name, description, duration}) => (
        <div key={id} className={styles.card}>
          <p>{name}</p>
          <p>{description}</p>
          <p>{duration}</p>
        </div>
      ))}
    </div>
  )
}
