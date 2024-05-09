export default function Projects({data}) {
  return (
    <div className='flex flex-col items-center justify-center mx-4'>
      {data.projects.map((project) => (
        <div key={project.id} className='flex flex-col items-center justify-center mx-4'>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.duration}</p>
        </div>
      ))}
    </div>
  )
}
