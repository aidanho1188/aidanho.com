import CardStack from '../../components/ui/card-stack'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import styles from '../styles/HeroSection.module.css'
import React, {useRef, useEffect} from 'react'

export default function HeroSection({data, children, contentsRef}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles['hero-left']}>
          <p className={styles.quote}>{data.quote.text}</p>
        </div>

        <div className={styles['hero-right']}>
          <CardStack items={data.highlightProjects} />
        </div>
        {children}
      </div>
      <ScrollIndicator contentsRef={contentsRef} />
    </>
  )
}
