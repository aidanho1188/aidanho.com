import CardStack from '../../components/ui/card-stack'
import * as data from '../../data'

export default function HeroSection() {
  return (
    <div className='h-screen flex flex-col md:flex-row items-center overflow-x-hidden'>
      <div className='italic w-50 text-center pl-4 m-8 text-lg font-semibold text-ui-text py-8 md:w-100 flex justify-center'>
        <p className='border-l-4 border-gray-500'>{data.quote.text}</p>
      </div>

      <div className='h-[20rem] md:w-full w-50 flex items-center justify-center'>
        <CardStack items={data.highlightProjects} />
      </div>
    </div>
  )
}
