import currentProjects from './currentProjects'

const projects = [
  {
    id: 1,
    title: 'React Chat App',
    description: 'Web-based real-time chat application with user sign-up and login and multiple chat rooms. Used Express, Postman and MongoDB to build and test server CRUD functionality. Built custom client side using React, Reactrap and CSS.',
    link: 'https://github.com/uprighted-learners/g3-react-chat',
    currentProjects: false,
  },
  {
    id: 2,
    title: 'Zorkington Adventure Game ',
    description: 'A custom adventure text-based game. Created purely with JavaScript using state machine design to represent potential room transitions.',
    link: 'https://github.com/burlingtoncodeacademy-students/zorkington-aidanho1188/tree/master',
    currentProjects: false,
  },
  {
    id: 3,
    title: 'Interactive Jeopardy Game',
    description: 'Custom web-based Two-player Jeopardy game with two rounds and a final Jeopardy. Created from scratch using HTML, CSS, and vanilla JavaScript.',
    link: 'https://github.com/burlingtoncodeacademy-students/jeopardy-board-aidanho1188',
    currentProjects: false,
  },
  {
    id: 4,
    title: 'RPN Calculator',
    description: 'Reverse Polish Notation (RPN or stack) calculator in which the operator symbol is placed after the arguments being operated on. ',
    link: 'https://github.com/USM-COS470-S21/rpn-calculator-aidan-ho-solo',
    currentProjects: false,
  },
  {
    id: 5,
    title: 'Personal Website',
    description: 'This is my personal website. It is built with Next.js, Tailwind CSS, and Aceternity UI. It is hosted on Vercel. I use this website to showcase my projects and blog about my experiences in software development.',
    duration: 'May 2024 - Present',
    link: 'https://github.com/aidanho1188/aidanho.com',
    currentProjects: true,
  },
  {
    id: 6,
    title: 'Zorkington V2',
    description: 'Zorkington V2 is a text-based adventure game that I am building. It is inspired by the original Zork game.  It will have a command-line interface web app. It will be deployed on AWS Lambda and API Gateway',
    duration: 'July 2024 - Present',
    link: '',
    currentProjects: true,
  },
]

export default projects
