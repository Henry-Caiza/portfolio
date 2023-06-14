import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'


import { Layout } from '@/components/Layout'
import profilePic from '../../public/images/profile/dev.png'
import { AnimatedText } from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import { HireMe } from '@/components/HireMe'
import { TransitionEffect } from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Henry Caiza</title>
        <meta name="Home Portfolio" content="Contact to software engineer Henry Caiza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light/80 2xl:'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 lg:self-start'>
          <div className='flex items-center justify-between w-full lg:flex-col'>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="Hey There,"
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <AnimatedText text="I'm Henry."
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a software developer and engineer, my goal is to turn ideas into innovative web applications.
                Enter and explore my projects where you can see my experience in software development, especially web.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/CV-Henry-Caiza.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-full text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-greenLight dark:text-dark hover:dark:bg-dark hover:dark:text-greenLight hover:dark:border-greenDark md:p-2 md:px-4 md:text-base'
                  download={true}>
                  Resume <LinkArrow className={'w-8 ml-1'} />
                </Link>
                <Link href='mailto:henrypcv1995@gmail.com' target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-greenLight md:text-base'
                >Contact</Link>
              </div>
            </div>
            <div className='w-1/2 px-16 pt-10 lg:w-full sm:px-4 sm:pt-0 sm:mt-8'>
              <Image src={profilePic} alt='Photo Henry Caiza' className='w-full h-auto  md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              50vw'
              />
            </div>
          </div>
        </Layout>
        <HireMe />

      </main>
    </>
  )
}
