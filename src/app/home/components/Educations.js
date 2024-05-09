import styles from '../styles/Educations.module.css'
export default function Educations({data}) {
  return (
    <div className='style.container'>
      {data.education.map((edu) => (
        <div key={edu.id}>
          <h2>{edu.name}</h2>
          <h3>{edu.degree}</h3>
          <p>{edu.duration}</p>
        </div>
      ))}
    </div>
  )
}
