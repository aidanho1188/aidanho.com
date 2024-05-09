import CardStack from '../../components/ui/card-stack'
import styles from '../styles/HeroSection.module.css'
export default function HeroSection({data}) {
  return (
    <div className={styles.container}>
      <div className={styles['hero-left']}>
        <p className={styles.quote}>{data.quote.text}</p>
      </div>

      <div className={styles['hero-right']}>
        <CardStack items={data.highlightProjects} />
      </div>
    </div>
  )
}
