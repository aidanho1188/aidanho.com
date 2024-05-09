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
    description: "A detailed introduction about who you are, what you do, and what you're passionate about in software development.",
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>Picture of me</div>,
  },
  {
    title: 'Background',
    description: 'Talk about how you got into software development. This could include your education, self-learning journey, or any other experiences that led you to this career.',
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>Picture of location</div>,
  },
  {
    title: 'Skills and Expertise',
    description: 'A detailed list of your technical skills and areas of expertise. You could talk about your proficiency in different programming languages, your experience with different frameworks and technologies, and any special areas of knowledge or interest.',
    content: <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>Picture of skills/programming language</div>,
  },
  {
    title: 'Work Experience',
    description: 'Detailed descriptions of your past roles, the projects you worked on, and the impact you made. This could be similar to the work experience section on a resume, but with more emphasis on the story and the results.',
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
