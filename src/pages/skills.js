import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { Skills } from '@/components/Skills'

import { TransitionEffect } from '@/components/TransitionEffect'
function skills() {
    return (
        <>
            <Head>
                <title>Skills | Henry Caiza </title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main>
                <Layout className='dark:text-light pt-16'>
                    <Skills />

                </Layout>
            </main>
        </>

    )
}

export default skills