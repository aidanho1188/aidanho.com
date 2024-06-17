import styles from '../styles/Experiences.module.css'

export default function Experiences({data}) {
  return (
    <div className={styles.container}>
      {data.map(({id, role, company, duration, description}) => (
        <div data-aos='fade-up' key={id} className={styles.card}>
          <div className={styles.head}>
            <div className={styles.role}>{role}</div>
            <h3>{company}</h3>
            <i>{duration}</i>
          </div>
          <div>{description}</div>
        </div>
      ))}
    </div>
  )
}
