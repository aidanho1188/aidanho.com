export default function ScrollIndicator({contentsRef}) {
  const handleClick = () => {
    if (contentsRef && contentsRef.current) {
      contentsRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div onClick={handleClick} className='mb-10 w-full flex justify-center cursor-pointer'>
      <p className='text-lg animate-bounce'>⬇ Scroll for more ⬇</p>
    </div>
  )
}
