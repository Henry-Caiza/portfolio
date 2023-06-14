import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'

import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { TransitionEffect } from '@/components/TransitionEffect'


function education() {
    return (
        <>
            <Head>
                <title>Education | Henry Caiza </title>
                <meta name='Education Portfolio' content='Education of Henry Caiza' />
            </Head>
            <TransitionEffect />
            <main>
                <Layout className='dark:text-light pt-16'>
                    <Education />
                    <Experience />

                </Layout>
            </main>
        </>

    )
}

export default education