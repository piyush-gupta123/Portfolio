import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; Piyush Gupta. All Rights Reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website: </span>Built with React and Next.js (App Router and Server actions),
            {" "}TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}
