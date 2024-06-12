import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import StickyScroll from '../components/ui/sticky-scroll-reveals'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <NavMenu />
      <StickyScroll content={content} />
      {/* <Footer /> */}
    </main>
  )
}

const content = [
  {
    title: 'Introduction',
    description: "Greeting! My name is Aidan, and I'm a software developer based in Maine. I'm a lifelong learner who is passionate about technology and science. In this portfolio, you'll find information about my background, skills, work experience, projects, and personal interests. I hope you enjoy learning more about me and my work!",
    content: (
      <div className='h-[100%] w-[100%] bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        <Image src='/images/me.jpg' alt='picture of me' layout='fill' objectFit='cover' />
      </div>
    ),
  },
  {
    title: 'Background',
    description:
      'I grew up in Vietnam without technology, but I was always curious about how things worked. I moved to a farm when I was around 6 years old. The extra time lead me to make my own toys and games which sharpened my problem solving skills and creativity. At 10 years old, I moved to the US with my family and was amazed by the advancement of technology here. I started learning about computer science in high school through a book called "Understanding Computers: Today and Tomorrow" by Charles S. Parker. This book introduced me to the world of technology, where I am constantly amazed by our ingenuity in solving problems and drawn to the endless opportunities for learning that it provides. Wanting to pursue my curiosity and learn more about computer science, I enrolled in college to major in this field. I graduated with an Associate degree in Computer Science. My plan to complete a bachelor\'s degree was disrupted by the COVID-19 pandemic, but I didn\'t let that stop me. I enrolled in Upright Education bootcamp through UNE to continue my education and further develop my skills. The bootcamp allowed me to put the theory I learned in college into practice and gain real-world software development experience.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>
        <Image src='/images/me2.jpg' alt='picture of background' layout='fill' objectFit='contain' />
      </div>
    ),
  },
  {
    title: 'Skills and Expertise',
    description: 'React JS, Next JS, Tailwind CSS, Node JS, Express JS, MongoDB, Git, GitHub, HTML, CSS, JavaScript, Python, Java, SQL, RESTful APIs, Agile, Scrum, and Jira. I am always learning new technologies and expanding my skill set, so this list is always growing and evolving. I am passionate about technology and love to learn new things, so I am always looking for new challenges and opportunities to grow and improve my skills',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>
        <Image src='/images/skills.png' alt='picture of skills' layout='fill' objectFit='contain' />
      </div>
    ),
  },
  {
    title: 'Work Experience',
    description:
      "I started my career as a library assistant at my college, where I helped students find books and conduct research. While working there, I also served as a secretary for our honor student club, PTK. I was responsible for organizing events and meetings. Since then, I have worked for my sister's business as an assistant manager. In that role, I was responsible for organizing and managing the store, as well as keeping track of inventory. Additionally, I took on another job as a student software developer at Upright Education. It was a six-month program with intensive learning and project building. For our capstone project, we built a full-stack application using a third-party API, Service Channel, which allowed our client to manage work orders and invoices. As part of the team, I took on the role of scrum master, where I focused on organizing and managing the project effectively.",
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>Picture of real life project</div>,
  },
  {
    title: 'Projects',
    description: "Detailed case studies of a few key projects that you're particularly proud of. For each project, talk about the problem you were solving, the approach you took, the technologies you used, and the results you achieved.",
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>Picture of best project</div>,
  },
  {
    title: 'Personal Interests',
    description: 'A section about your personal interests outside of work. This helps to show your personality and make a personal connection with the reader.',
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>Picture personal interests</div>,
  },
]
