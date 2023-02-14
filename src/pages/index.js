import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Skills from '@/components/Skills'
import useNavState from '@/hooks/useNavState'
import Head from 'next/head'

export default function Home({ mySkills }) {
  const { selected, index } = useNavState()


  const commanSectionStyle = {
    position: 'absolute',
    width: '100%',
    transition: 'all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0s'
  }

  const introSection = {
    transform: `translate(${index === 0 ? 0 : -100}vw, 0)`,
  }

  const skillsSection = {
    transform: `translate(${index === 1 ? 0 : index > 1 ? -100 : 100}vw, 0)`,
  }

  return (
    <>
      <Head>
        <title>{'David Magdy | ' + selected || 'Intro.'}</title>
        <meta name="description" content="The full stack developer David Magdy personal profile and protofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NavBar />
      <main>
        <div style={{ ...commanSectionStyle, ...introSection }}><Intro /></div>
        <div style={{ ...commanSectionStyle, ...skillsSection }} ><Skills skills={mySkills} /></div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch(`http://localhost:3000/api/skills`)
  const data = await res.json()

  return { props: { mySkills: data.mySkills } }
}