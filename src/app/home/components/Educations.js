import styles from '../styles/Educations.module.css'

export default function Educations({data}) {
  return (
    <div data-aos='fade-up' className={styles.container}>
      {data.education.map(({id, name, degree, duration}) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>{degree}</h3>
          <p>{duration}</p>
        </div>
      ))}
    </div>
  )
}
