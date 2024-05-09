export default function Experiences({data}) {
  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full'>
      {data.experiences.map((job) => (
        <div key={job.id}>
          <h2>{job.role}</h2>
          <h3>{job.company}</h3>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  )
}
