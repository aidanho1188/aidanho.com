import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import StickyScroll from '../components/ui/sticky-scroll-reveals'
import Image from 'next/image'
import {LinkPreview} from '../components/ui/link-preview'

export default function About() {
  return (
    <main>
      <NavMenu />
      <StickyScroll content={content} />
    </main>
  )
}

const content = [
  {
    title: 'Introduction',
    description: "Greeting! My name is Aidan, and I'm a software developer based in Maine. I'm a lifelong learner who is passionate about technology and science. In this portfolio, you'll find information about my background, skills, work experience, projects, and personal interests. I hope you enjoy learning more about me and my work!",
    content: (
      <div className='h-[100%] w-[100%] bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        <Image src='/images/me.jpg' alt='picture of me' width={500} height={300} fit='cover' />
      </div>
    ),
  },
  {
    title: 'Background',
    description: (
      <>
        <div>I grew up in Vietnam without technology, but I was always curious about how things worked. I moved to a farm when I was around 6 years old. The extra time lead me to make my own toys and games which sharpened my problem solving skills and creativity. I also learned about the importance of hard work and perseverance from my parents, who worked tirelessly to provide for our family. I am grateful for the lessons they taught me and the values they instilled in me.</div>
        <br />
        <div>At 10 years old, I moved to the US with my family and was amazed by the advancement of technology here. I started learning about computer science in high school through a book called &quot;Understanding Computers: Today and Tomorrow&quot; by Charles S. Parker. This book introduced me to the world of technology, where I am constantly amazed by our ingenuity in solving problems and drawn to the endless opportunities for learning that it provides.</div>
        <br />
        <div>
          Wanting to pursue my curiosity and learn more about computer science, I enrolled in college to major in this field. I graduated with an Associate degree in Computer Science. My plan to complete a bachelor&apos;s degree was disrupted by the COVID-19 pandemic, but I didn&apos;t let that stop me. I enrolled in Upright Education bootcamp through UNE to continue my education and further develop my skills. The bootcamp allowed me to put the theory I learned in college into practice and gain
          real-world software development experience.
        </div>
      </>
    ),
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>
        <Image src='/images/me2.jpg' alt='picture of background' layout='fill' objectFit='contain' />
      </div>
    ),
  },
  {
    title: 'Skills and Expertise',
    description: 'React JS, Next JS, Tailwind CSS, Node JS, Express JS, MongoDB, Git, GitHub, HTML, CSS, JavaScript, Python, Java, SQL, RESTful APIs, Agile, Scrum, and Jira. I am always learning new technologies and expanding my skill set, so this list is always growing and evolving. I am passionate about technology and love to learn new things, so I am always looking for new challenges and opportunities to grow and improve my skills.',
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
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        <Image src='/images/me3.jpg' alt='picture of work experience' layout='fill' objectFit='contain' />
      </div>
    ),
  },
  {
    title: 'Projects',
    description: (
      <>
        <div>
          Two of my best projects are the{' '}
          <LinkPreview url='https://github.com/aidanho1188/ptsb-oct-23-capstone-team-2' className='font-bold'>
            Upright Education capstone project
          </LinkPreview>{' '}
          and the{' '}
          <LinkPreview url='https://github.com/aidanho1188/rpn-calculator' className='font-bold'>
            RPN Calculator project
          </LinkPreview>
          .
        </div>
        <br />
        <div>
          The Upright Education capstone project was a full-stack application built with a third-party API, Service Channel, which allowed our client to manage work orders from HomeDepot and manually update worker&apos;s status. I was selected to be the team lead for the capstone project because of my knowledge in computer science. Although I held the role of team lead for this project, I was fortunate to work with a team of leaders. Each member brought their unique leadership qualities to the
          table, contributing to our collective success. Throughout the project, we had to learn and adapt to many new tools on the fly, including the Vite framework, Shadcn, Jira, and the Service Channel API. Despite the challenges, we all excelled and leveraged these tools to our advantage. I want to give a shoutout to my teammates,{' '}
          <LinkPreview url='https://www.linkedin.com/in/davidblumenshine' isStatic imageSrc='https://media.licdn.com/dms/image/D5603AQF9k3jwrPwmlw/profile-displayphoto-shrink_200_200/0/1701922608924?e=1724284800&v=beta&t=VisRc9B1OI6NLtouvhENl_DRzFi8sd1jFg6L-PszwFQ' className='font-bold'>
            David Blumenshine
          </LinkPreview>{' '}
          and{' '}
          <LinkPreview url='https://www.linkedin.com/in/daniela-watanabe-882361241' isStatic imageSrc='https://media.licdn.com/dms/image/D5603AQFLqT6ENewO3Q/profile-displayphoto-shrink_200_200/0/1678971977781?e=2147483647&v=beta&t=NBn2YdLsvvDwazqu63HKxfpSAqG2S1UzhSeBI_qqdJc' className='font-bold'>
            Daniela Watanabe
          </LinkPreview>{' '}
          who stood by me and played an integral part in leading our team to success.
        </div>
        <br />
        <div>
          For the RPN Calculator project, I built a reverse polish notation calculator using Java while attending one of my favorite classes, &quot;The Art and Craft of Software Development&quot;, at USM. This class was taught by an inspirational professor,{' '}
          <LinkPreview url='https://cs.usm.maine.edu/~houser/cos470/' isStatic imageSrc='https://usm.maine.edu/directories/wp-content/uploads/sites/49/2022/09/Houser_0.jpg' className='font-bold'>
            Stephen Houser
          </LinkPreview>
          . We studied the amazing book &quot;Clean Code: A Handbook of Agile Software Craftsmanship&quot;. This project was a great learning experience for me, it was the first time I put software development theory into practice. I learned a lot about software development best practices, such as writing clean code, using version control, and CI/CD. I also learned about the importance of testing and debugging.
        </div>
        <br />
        <div>I am proud of these projects because they showcase my skills and expertise as a software developer. I am always looking for new projects and challenges to work on, so I am excited to see what the future holds!</div>
      </>
    ),
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        <Image src='/images/clean-code-book.jpg' alt='Clean code book' layout='fill' objectFit='contain' />
      </div>
    ),
  },
  {
    title: 'Personal Interests',
    description:
      "Outside of work, I engage in a variety of hobbies including martial arts, guitar playing, digital arts, and hiking. I've been practicing martial arts for nearly a year, during which I've earned an orange belt in Kung Fu. My passion for playing the guitar began in high school, and I've since learned to play songs using both chords and fingerstyle techniques. In addition to these, I take pleasure in digital arts, dabbling in activities such as photo editing and digital painting.",
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
        <Image src='/images/me4.jpg' alt='digital art of myself' layout='fill' objectFit='contain' />
      </div>
    ),
  },
]
