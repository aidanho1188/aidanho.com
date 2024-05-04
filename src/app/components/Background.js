export default function Background(props) {
  return (
    <div className='h-[42.7rem] w-full h-screen bg-background-color  bg-grid-zinc-500/[0.2] relative flex items-center justify-center'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-ui-background-wo [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      {props.children}
    </div>
  )
}
