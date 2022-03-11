import React, { ReactNode } from 'react'
import Head from "next/head";
import Footer from './Footer';

type Props = {
    children? : ReactNode
}

const Layout = ({children} : Props) => {
  return (
    <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Simple Calculator coded by James Romero"/>
            <meta name="author" content="James Romero"/>
            <meta name="author" content="Blue Royalty"/>
            <meta name="msapplication-TileColor" content="#31d35c"/>
            <meta name="theme-color" content="#ffffff"/>
            <link rel="icon" href="https://res.cloudinary.com/blueshomepage/image/upload/v1646376715/portfolio/Crown_gqlwlj.webp" type="image" sizes="16x16"/>
            <title>Simple Calculator</title>
        </Head>
        {children}
        <Footer/>
    </>
  )
}

export default Layout