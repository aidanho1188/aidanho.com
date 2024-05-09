export default function Skills({data}) {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center mt-8 w-full'>
      {data.skills.map((skill) => (
        <div key={skill.id} className='flex flex-col items-center justify-center mx-4'>
          <p>{skill.name}</p>
          <p>{skill.experience}</p>
        </div>
      ))}
    </div>
  )
}
