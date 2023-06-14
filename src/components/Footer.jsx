import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='w-full border-t border-solid border-dark/40 font-medium text-lg dark:text-light dark:border-greenLight/40 sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build With <span className='text-primary dark:text-greenLight text-2xl px-1'>&#9825; </span> by&nbsp; Henry Caiza
                </div>
                <Link href='https://roa.cedia.edu.ec/users/henry-caiza?tab=resources' target={'_blank'} className='underline underline-offset-2 z-10'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export { Footer }