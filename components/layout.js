
import Head from 'next/head'
import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout ({children,title = '',description = ''}) {
    return (
        <>
        <Head>
            <title>{`GuitarLA- ${title}`}</title>
        <meta name='descripition' content={description}/>
        </Head>
        <Header/>

        {children}
    
        <Footer/>
        </>
    )
}

