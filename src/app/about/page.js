import NavMenu from '../components/Nav'
import Footer from '../components/Footer'
import StickyScroll from '../components/ui/sticky-scroll-reveals'

export default function About() {
  return (
    <main>
      <NavMenu />
      <StickyScroll content={content} />
      <Footer />
    </main>
  )
}

const content = [
  {
    title: 'Introduction',
    description: "Greeting! My name is Aidan, and I'm a software developer based in Maine. I'm a lifelong learner who is passionate about technology and science. I love solving problems and building things, and I'm always looking for new challenges and opportunities to grow. In this portfolio, you'll find information about my background, skills, work experience, projects, and personal interests. I hope you enjoy learning more about me and my work!",
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>Picture of me</div>,
  },
  {
    title: 'Background',
    description:
      'I grew up in Vietnam without technology, but I was always curious about how things worked. I moved to a farm when I was around 6 years old. The extra time lead me to make my own toys and games which sharpened my problem solving skills and creativity. I moved to the US when I was 10 and started learning about technology. I started learning about programming in high school and have been hooked ever since. I love the creativity and problem solving that comes with programming, and I enjoy the challenge of building things that are useful and impactful.',
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>Picture of location</div>,
  },
  {
    title: 'Skills and Expertise',
    description: 'React JS, Next JS, Tailwind CSS, Node JS, Express JS, MongoDB, Git, GitHub, HTML, CSS, JavaScript, Python, Java, C++, SQL, RESTful APIs, Agile, Scrum, and Jira. I am always learning new technologies and expanding my skill set, so this list is always growing and evolving. I am passionate about technology and love to learn new things, so I am always looking for new challenges and opportunities to grow and improve my skills',
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>Picture of skills/programming language</div>,
  },
  {
    title: 'Work Experience',
    description: 'A summary of your work experience, including your current role, previous roles, and key responsibilities and accomplishments. This helps to show your professional background and experience, and gives the reader a sense of your career trajectory and accomplishments. You can also include any relevant internships, freelance work, or side projects that you have worked on.',
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
