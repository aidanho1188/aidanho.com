export default function Background() {
  return (
    <div className='h-screen w-full bg-background-color bg-grid-zinc-500/[0.2] fixed flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-ui-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  )
}
