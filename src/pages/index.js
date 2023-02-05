import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import { EndSlash, Logo } from 'public/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>David Magdy | Intro</title>
        <meta name="description" content="The full stack developer David Magdy personal profile and protofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NavBar />
      <main>
        <div><Intro /></div>
      </main>
      <Footer />
    </>
  )
}
