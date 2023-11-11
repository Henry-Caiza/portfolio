import { AnimatedText } from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import gymfit from '../../public/images/projects/gymfit.png'
import pokeredux from '../../public/images/projects/pokeredux.png'
import machinetodo from '../../public/images/projects/machinetodo.png'
import movsosapp from '../../public/images/projects/movsos.png'
import weatherapp from '../../public/images/projects/weatherapp.png'
import shopyfy from '../../public/images/projects/shopyfy.png'
import catapirest from '../../public/images/projects/catapirest.png'
import musiclnading from '../../public/images/projects//musiclanding.png'
import gameapp from '../../public/images/projects/game.png'
import travelapp from '../../public/images/projects/travelapp.png'
import linktreeapp from '../../public/images/projects/linktree.png'

import stadisticapp from '../../public/images/projects/stadisticbasic.png'
import stupifyapp from '../../public/images/projects/stupify.png'
import pokedexapp from '../../public/images/projects/pokedex.png'
import eatsapp from '../../public/images/projects/eats.png'

import tailwindImg from '../../public/images/tools/tailwind-css.svg'
import jsImg from '../../public/images/tools/javascript-js.svg'
import nextImg from '../../public/images/tools/nextjs.png'
import reactImg from '../../public/images/tools/react.svg'
import postgresqlImg from '../../public/images/tools/postgresql.svg'
import supabaseImg from '../../public/images/tools/supabase.svg'
import strapiImg from '../../public/images/tools/strapi.svg'
import viteImg from '../../public/images/tools/vite.png'
import apiImg from '../../public/images/tools/rest-api.png'
import cssImg from '../../public/images/tools/file-css.svg'
import framerImg from '../../public/images/tools/framer.png'
import reduxImg from '../../public/images/tools/redux-original.svg'
import firebaseImg from '../../public/images/tools/file-type-firebase.svg'
import tsImg from '../../public/images/tools/typescript-icon.svg'

import { motion } from 'framer-motion'
import { TransitionEffect } from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github, tools }) => {

    return (

        <article className='w-full flex items-center justify-between rounded-br-xl relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-greenLight lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-greenLight rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-greenLight xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 w-full flex justify-between items-center gap-0 sm:gap-2'>
                    <div className='flex items-center sm:w-[75%]'>
                        <Link href={github} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={link} target='_blank' className='ml-4 sm:ml-1 rounded-lg bg-dark text-light p-2 px-6 sm:px-2 text-lg sm:text-xs font-semibold dark:bg-greenLight dark:text-dark '>
                            Visit Project
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-2 items-end justify-end'>
                        {
                            tools.map((tool) => {
                                return (
                                    <Image src={tool} alt={title} className='w-8 h-8 sm:w-4 sm:h-4' key={title}

                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </article>

    )
}

const Project = ({ type, title, img, link, github, tools }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-greenLight xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-greenLight rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-greenLight font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between gap-0 sm:gap-4'>
                    <div className='flex gap-4 justify-center items-center'>
                        <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                            Visit
                        </Link>
                        <Link href={github} target='_blank' className='w-8 md:w-6'>
                            <GithubIcon />
                        </Link>
                    </div>
                    <div className='flex gap-2 '>
                        {
                            tools.map((tool) => {
                                return (
                                    <Image src={tool} alt={title} className='w-6 h-6 sm:w-4 sm:h-4' key={title}

                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </article>
    )
}

function projects() {
    return (
        <>
            <Head>
                <title>Projects | Henry Caiza </title>
                <meta name='Projects Portfolio' content='Projects of Henry Caiza' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Freedom is in the Imagination!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 sm:gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-4'>
                        <div className='col-span-12'>
                            <FeaturedProject

                                title='Stupify'
                                img={stupifyapp}
                                summary=
                                'An clone of Spotify oriented website uses Nextjs, React, Tailwind CSS, React Router, PostgreSQL, Supabase and Strapi for subscriptions. It displays information about the songs where you can search for your favorite song and like it and with a subscription you can upload your songs.'
                                link='https://spotify-clone-henrycv.vercel.app/'
                                github='https://github.com/Henry-Caiza/spotify-clone'
                                type='Web Site'
                                tools={[nextImg, reactImg, tailwindImg, postgresqlImg, supabaseImg, strapiImg, tsImg]}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject

                                title='Shopify'
                                img={shopyfy}
                                summary=
                                'An ecommerce oriented website uses React, Tailwind CSS, React Router, Local Storage, REST API and Vite. Consume and display information about an ecommerce api, such as products from different categories.'
                                link='https://shopy-hc.netlify.app/'
                                github='https://github.com/Henry-Caiza/shopify'
                                type='Web Site'
                                tools={[reactImg, tailwindImg, apiImg, viteImg, jsImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='MovSos - Movies and Series TV'
                                img={movsosapp}
                                link='https://henry-caiza.github.io/movsos/'
                                github='https://github.com/Henry-Caiza/movsos'
                                type='Web Site'
                                tools={[jsImg, cssImg, apiImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Eats Elite'
                                img={eatsapp}
                                link='https://eats-elite.vercel.app'
                                github='https://github.com/Henry-Caiza/eats-elite'
                                type='Web Site'
                                tools={[jsImg, nextImg, reactImg, tailwindImg]}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject

                                title='Pokedex'
                                img={pokedexapp}
                                summary=
                                'An app that shows all pokemons that uses API REST, React, Tailwind CSS, Redux Toolkit and Firebase. It shows information about the pokemons where it can help you search for a specific pokemon, compare pokemons, show all details of a pokemon and and create your favorite pokemon collection with an login.'
                                link='https://pokedex-hcv.netlify.app/'
                                github='https://github.com/Henry-Caiza/pokedex'
                                type='Web Site'
                                tools={[apiImg, reactImg, tailwindImg, reduxImg, firebaseImg, tsImg]}
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Game with JS'
                                img={gameapp}
                                link='https://henry-caiza.github.io/juegoJS/'
                                github='https://github.com/Henry-Caiza/juegoJS'
                                type='Web App'
                                tools={[jsImg, cssImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Pelosos Random'
                                img={catapirest}
                                link='https://henry-caiza.github.io/CatApi/public/index.html'
                                github='https://github.com/Henry-Caiza/CatApi'
                                type='Web Site'
                                tools={[jsImg, cssImg, apiImg]}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject

                                title='The FIT CLUB'
                                img={gymfit}
                                summary=
                                'A gym oriented website using NextJS, React, Tailwind CSS and React Router. It displays information about the business such as plans, programs, features, and customer testimonials.'
                                link='https://henry-caiza-gym.netlify.app/'
                                github='https://github.com/Henry-Caiza/gym'
                                type='Web Site'
                                tools={[nextImg, reactImg, tailwindImg, framerImg, jsImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Travel'
                                img={travelapp}
                                link='https://henry-caiza.github.io/travel/public/index.html'
                                github='https://github.com/Henry-Caiza/travel'
                                type='Featured Project'
                                tools={[jsImg, tailwindImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Pokedux'
                                img={pokeredux}
                                link='https://pokeredux-hc.netlify.app/'
                                github='https://github.com/Henry-Caiza/pokeRedux'
                                type='Web Site'
                                tools={[jsImg, apiImg, reactImg, tailwindImg, reduxImg, viteImg]}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject

                                title='TodoMachine'
                                img={machinetodo}
                                summary=
                                'An application that helps you create tasks that you can do during the day using React, React Router, Local Sorage. Display information about completed and uncompleted tasks, create new tasks, delete tasks, and filter tasks.'
                                link='https://henry-caiza.github.io/todo/'
                                github='https://github.com/Henry-Caiza/todo'
                                type='Web App'
                                tools={[jsImg, cssImg, reactImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Weather App'
                                img={weatherapp}
                                link='https://henry-caiza.github.io/avostore/public/wather.html'
                                github='https://github.com/Henry-Caiza/avostore'
                                type='Web Site'
                                tools={[jsImg, cssImg, apiImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Landing Music'
                                img={musiclnading}
                                link='https://henry-caiza.github.io/landingAsy/'
                                github='https://github.com/Henry-Caiza/landingAsy'
                                type='Web Site'
                                tools={[jsImg, cssImg, apiImg]}
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='LinkTree clone'
                                img={linktreeapp}
                                link='https://henry-caiza.github.io/links/index.html'
                                github='https://github.com/Henry-Caiza/links/tree/gh-pages'
                                type='Web Site'
                                tools={[jsImg, cssImg]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Statistics Calculator'
                                img={stadisticapp}
                                link='https://henry-caiza.github.io/estadisticaBasicaJs/'
                                github='https://github.com/Henry-Caiza/estadisticaBasicaJs'
                                type='Web App'
                                tools={[jsImg, apiImg]}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects