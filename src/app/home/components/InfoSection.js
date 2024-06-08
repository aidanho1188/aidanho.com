import styles from '../styles/InfoSection.module.css'
import Image from 'next/image'

export default function InfoSection({data}) {
  return (
    <div className={styles.container}>
      {data.map(({id, name, institution, duration, image, alt}) => (
        <div data-aos='fade-right' key={id} className={styles.item}>
          <Image src={image} alt={alt} width={100} height={100}/>
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
