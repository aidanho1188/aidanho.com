'use client'
import React from 'react'
import {Label} from './label'
import {Input} from './input'
import {cn} from '../../utils/cn'
import {toast} from 'react-toastify'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Message Sent')

    // TODO: Send message to backend

    // Show success notification
    toast('Your message has been sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    // Clear form fields
    e.currentTarget.reset()
  }
  return (
    <div className='max-w-md w-full mx-auto rounded-2xl p-4 shadow-input bg-ui-background'>
      <h2 className='font-bold text-xl text-ui-neutral'>Feedback</h2>
      <p className='text-ui-neutral text-sm max-w-sm mt-2'>Use this if you have any feedback or just want to get in touch.</p>

      <form className='my-8' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <Label htmlFor='firstname'>First name</Label>
            <Input id='firstname' placeholder='John' type='text' required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input id='lastname' placeholder='Doe' type='text' required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input id='email' placeholder='johnnydoe@gmail.com' type='email' required />
        </LabelInputContainer>

        <LabelInputContainer className='mb-4'>
          <Label htmlFor='message'>Message</Label>
          <Input id='message' placeholder='Type your message here' type='textarea' required />
        </LabelInputContainer>

        <button className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]' type='submit'>
          Send &rarr;
          <BottomGradient />
        </button>
        {/* 
        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        <div className='flex flex-col space-y-4'>
          <button className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]' type='submit'>
            <IconBrandGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>GitHub</span>
            <BottomGradient />
          </button>
          <button className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]' type='submit'>
            <IconBrandGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>Google</span>
            <BottomGradient />
          </button>
          <button className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]' type='submit'>
            <IconBrandOnlyfans className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>OnlyFans</span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  )
}

const LabelInputContainer = ({children, className}: {children: React.ReactNode; className?: string}) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>
}
