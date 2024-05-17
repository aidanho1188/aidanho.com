import styles from '../styles/Experiences.module.css'

export default function Experiences({data}) {
  return (
    <div data-aos='zoom-in' className={styles.container}>
      {data.experiences.map(({id, role, company, duration, description}) => (
        <div key={id}>
          <h2>{role}</h2>
          <h3>{company}</h3>
          <p>{duration}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}
