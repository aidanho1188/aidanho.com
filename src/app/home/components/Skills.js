import styles from '../styles/Skills.module.css'

export default function Skills({data}) {
  return (
    <div className={styles.container}>
      <div data-aos='slide-right' className={styles.left}>
        <img src='https://media1.giphy.com/media/jSKPKLwixqBPCb9TC4/200w.gif?cid=6c09b952n5dm9iykucuvr1z57d6r78og031qhq3fwyt7x6s4&ep=v1_videos_search&rid=200w.gif&ct=v' alt='Intense coding gif' className={styles.imgSize} />
      </div>
      <div data-aos='slide-left' className={styles.right}>
        {data.skills.map(({id, name, experience}) => (
          <div key={id} className={styles.card}>
            <p>{name}</p>
            {/* <p>{experience}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
