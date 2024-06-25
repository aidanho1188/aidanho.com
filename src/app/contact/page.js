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
              Email: <a href='mailto:aidanho23657@gmail.com'></a>
            </p>
            <p className='m-5'>
              Phone: <a href='tel:1234567890'>123-456-7890</a>
            </p>
            <p className='m-5'>
              LinkedIn: <a href='https://www.linkedin.com/in/your-linkedin-profile'>Your LinkedIn Profile</a>
            </p>
            <p className='m-5'>
              GitHub: <a href=''>Github</a>
            </p>
            <p className='m-5'>
              Discord: <a href=''>Discord</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
