import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import NavBar from '@/components/NavBar'
import Protofolio from '@/components/Protofolio'
import Skills from '@/components/Skills'
import useNavState from '@/hooks/useNavState'
import Head from 'next/head'

export default function Home({ mySkills }) {
  const { selected, index } = useNavState()


  const commanSectionStyle = {
    position: 'absolute',
    width: '100%',
    background: '#1b1b1b',
    transition: 'all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0s'
  }

  const introSection = {
    transform: `translate(${index === 0 ? 0 : -100}vw, 0)`,
  }

  const skillsSection = {
    transform: `translate(${index === 1 ? 0 : index > 1 ? -100 : 100}vw, 0)`,
  }

  const protofolioSection = {
    transform: `translate(${index === 3 ? 0 : index > 3 ? -100 : 100}vw, 0)`,
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
      <main style={{ height: '100vh', position: 'relative' }}>
        <div style={{ ...commanSectionStyle, ...introSection }}><Intro /></div>
        <div style={{ ...commanSectionStyle, ...skillsSection }} ><Skills skills={mySkills} /></div>
        {/*<div style={{ ...commanSectionStyle, ...protofolioSection }}><Protofolio /></div>*/}
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(ctx) {
  let mySkills = [
    {
      title: 'Front End',
      skillSet: [
        {
          skill: 'HTML/CSS/JS',
          level: 86
        },
        {
          skill: 'Sass/Scss',
          level: 85
        },
        {
          skill: 'React.js',
          level: 84
        },
        {
          skill: 'Next.js',
          level: 95
        },
        {
          skill: 'SEO',
          level: 92
        },
        {
          skill: 'Graphic Design',
          level: 72
        }
      ]
    },

    {
      title: 'Back End',
      skillSet: [
        {
          skill: 'Node.js',
          level: 80
        },
        {
          skill: 'Next.js',
          level: 89
        },
        {
          skill: 'GraphQL',
          level: 85
        },
        {
          skill: 'Auth/JWT',
          level: 89
        },
        {
          skill: 'MongoDB',
          level: 82
        },
        {
          skill: 'SQL Queries',
          level: 72
        },
      ]
    },

    {
      title: 'Programming',
      skillSet: [
        {
          skill: 'Problem Solving',
          level: 92
        },
        {
          skill: 'coding',
          level: 98
        },
        {
          skill: 'Math.',
          level: 92
        },
        {
          skill: 'Algorithms',
          level: 83
        },
        {
          skill: 'Projet Manage.',
          level: 69
        },
      ]
    },

    {
      title: 'Sof Skills',
      skillSet: [
        {
          skill: 'Time Manage.',
          level: 71
        },
        {
          skill: 'Team Work',
          level: 86
        },
        {
          skill: 'Creativity',
          level: 82
        },
      ]
    }
  ]

  return { props: { mySkills: mySkills } }
}