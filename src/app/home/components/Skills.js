import styles from '../styles/Skills.module.css'

export default function Skills({data}) {
  return (
    <div data-aos='fade-up' className={styles.container}>
      {data.skills.map(({id, name, experience}) => (
        <div key={id} className={styles.card}>
          <p>{name}</p>
          <p>{experience}</p>
        </div>
      ))}
    </div>
  )
}
