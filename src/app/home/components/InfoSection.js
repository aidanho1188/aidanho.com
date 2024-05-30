import styles from '../styles/InfoSection.module.css'

export default function InfoSection({data}) {
  return (
    <div data-aos='fade-right' className={styles.container}>
      {data.map(({id, name, degree, duration, image}) => (
        <div key={id} className={styles.item}>
          {/* send image via backend? */}
          <img src={image} alt='Icon' />
          <div className={styles.description}>
            <h2>{name}</h2>
            <h3>{degree}</h3>
            <p>{duration}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
