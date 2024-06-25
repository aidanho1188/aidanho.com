import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import Background from '../components/Background'
import ContactForm from './components/ContactForm.tsx'
import styles from './styles/ContactSection.module.css'

export default function Contact() {
  return (
    <main>
      <NavMenu />
      <Background />
      <div className='h-inherit flex flex-col z-10 mt-20 mb-20'>
        <h2 className='text-center text-3xl font-bold m-5'>Contact</h2>
        <div className={styles.container}>
          <ContactForm className={styles.left} />
          <div className={styles.right}>
            <h3 className='text-2xl font-bold m-5'>Contact Information</h3>
            <p className='m-5'>
              Email:{' '}
              <a href='mailto:aidanho23657@gmail.com' target='_blank'>
                aidanho23657@gmail.com
              </a>
            </p>
            <p className='m-5'>
              LinkedIn:{' '}
              <a href='https://www.linkedin.com/in/aidan-ho' target='_blank'>
                https://www.linkedin.com/in/aidan-ho
              </a>
            </p>
            <p className='m-5'>
              GitHub:{' '}
              <a href='https://github.com/aidanho1188' target='_blank'>
                https://github.com/aidanho1188
              </a>
            </p>
            <p className='m-5'>
              Discord:{' '}
              <a href='https://discord.com/users/1172334442702983202' target='_blank'>
                aidanho23657
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
