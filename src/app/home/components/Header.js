import styles from '../styles/Header.module.css'

export default function Header({title}) {
  return (
    <div data-aos='fade-right'>
      <div className={styles.header}>{title}</div>
    </div>
  )
}
