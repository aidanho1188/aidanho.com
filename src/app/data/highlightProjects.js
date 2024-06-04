import Highlight from '../components/ui/highlight'

const highlightProjects = [
  {
    id: 0,
    name: 'React Chat App',
    link: 'https://github.com/uprighted-learners/g3-react-chat',
    content: (
      <p>
        Real-time chat app with user auth and multiple rooms. Built with <Highlight>Express</Highlight>, <Highlight>MongoDB</Highlight>, and <Highlight>React</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Jeopardy Game',
    link: 'https://github.com/burlingtoncodeacademy-students/jeopardy-board-aidanho1188',
    content: (
      <p>
        Two-player Jeopardy game with two rounds and a final round. Built with <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and <Highlight>JavaScript</Highlight>.
      </p>
    ),
  },
  // {
  //   id: 2,
  //   name: 'Project name',
  //   link: 'Link to project page',
  //   content: (
  //     <p>
  //       Project <Highlight>Name</Highlight> description...
  //     </p>
  //   ),
  // },
]

export default highlightProjects
