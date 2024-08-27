import {FaChevronDown} from 'react-icons/fa'
import '../styles/scrollIndicator.css'

export default function ScrollIndicator({contentsRef, color = 'ui-neutral'}) {
  const handleClick = () => {
    if (contentsRef && contentsRef.current) {
      contentsRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div onClick={handleClick} className='scroll-indicator mb-10 w-full flex justify-center cursor-pointer'>
      <p className='text-lg animate-bounce'>
        <span className='material-icons'>
          <FaChevronDown size={36} color={color} />
        </span>
      </p>
    </div>
  )
}
