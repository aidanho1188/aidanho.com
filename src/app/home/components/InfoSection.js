import styles from '../styles/InfoSection.module.css'

export default function InfoSection({data}) {
  return (
    <div className={styles.container}>
      {data.map(({id, name, institution, duration, image}) => (
        <div data-aos='fade-right' key={id} className={styles.item}>
          {/* send image via backend? */}
          <img src={image} alt='Icon' />
          <div className={styles.description}>
            <div className={styles.name}>{name}</div>
            <div className={styles.institution}>{institution}</div>
            <i>{duration}</i>
          </div>
        </div>
      ))}
    </div>
  )
}
