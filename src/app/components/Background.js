export default function Background() {
  return (
    <div className='h-[50rem] w-full h-screen bg-background-color  bg-grid-zinc-500/[0.2] relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-ui-background-wo [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <p className='text-4xl sm:text-7xl font-bold relative z-20 text-ui-text py-8'>Welcome</p>
    </div>
  )
}
