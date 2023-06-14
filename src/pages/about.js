import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'

import profilePicLight from '../../public/images/profile/profile.png'

import NumberCounter from 'number-counter'
import { TransitionEffect } from '@/components/TransitionEffect'




function about() {

    return (
        <>
            <Head>
                <title>About | Henry Caiza </title>
                <meta name='About Portfolio' content='About of Henry Caiza' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16' >
                    <AnimatedText text='&nbsp;Sky is the limit!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 dark:text-light/90'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-primary/75 dark:text-greenLight'>Biography</h2>
                            <p className='font-medium'>
                                Hello, my name is Henry and I am a passionate software engineer looking for opportunities in technological or related institutions. During my studies, I have gained a solid foundation in software development, focusing on programming languages ​​such as javascript, java, c#. I have also developed skills in web design and development.

                            </p>

                            <p className='my-4 font-medium'>
                                I am a proactive person, results oriented and with problem solving skills. I easily adapt to changes and I enjoy working as a team to achieve common goals. I am committed to continuous learning and stay up to date on the latest trends and advancements in the field of technology. Being aware of the importance of innovation, I am willing to face new challenges and contribute fresh ideas that drive the growth and success of the company I work for.
                            </p>
                            <p className='font-medium'>
                                I am excited for the opportunity to contribute to your company and be part of a dynamic and creative team. If you are looking for a committed, motivated professional with a passion for technology, do not hesitate to contact me. I am eager to start making a meaningful difference in the world of technology through my work.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-greenLight p-8 dark:bg-dark dark:border-greenLight xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-greenLight' />
                            <Image src={profilePicLight} alt='Photo Henry Caiza' className='w-full h-auto rounded-2xl border-2 border-dark dark:border-greenDark' priority
                                sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw'/>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumberCounter end={5} start={0} delay='3' postFix='+' />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>Satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumberCounter end={10} start={2} delay='3' postFix='+' />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>Projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <NumberCounter end={1} start={0} delay='1' postFix='+' />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>

            </main>
        </>
    )
}

export default about