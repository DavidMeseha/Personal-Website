import Head from 'next/head'
import Intro from '@/components/Intro'
import Protofolio from '@/components/Protofolio'
import Skills from '@/components/Skills'
import Interested from '@/components/Interested'
import useNavState from '@/hooks/useNavState'
import NavBar from '@/components/NavBar'
import { useState } from 'react'

export default function Home({ mySkills, projects }) {
  const { selected, index } = useNavState()
  const [theme, setTheme] = useState('dark')

  const commanSectionStyle = {
    position: 'absolute',
    width: '100%',
    transition: 'all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0s'
  }

  const introSection = {
    transform: `translate(${index === 0 ? 0 : -100}vw, 0)`,
    zIndex: `${index === 0 ? 3 : 0}`
  }

  const skillsSection = {
    transform: `translate(${index === 1 ? 0 : index > 1 ? -100 : 100}vw, 0)`,
    zIndex: `${index === 1 ? 3 : 0}`
  }

  const protofolioSection = {
    transform: `translate(${index === 2 ? 0 : index > 2 ? -100 : 100}vw, 0)`,
    zIndex: `${index === 2 ? 3 : 0}`
  }

  const interestedSection = {
    transform: `translate(${index === 3 ? 0 : index > 3 ? -100 : 100}vw, 0)`,
    zIndex: `${index === 3 ? 3 : 0}`
  }

  return (
    <>
      <Head>
        <title>{'David Magdy | ' + selected || 'Intro.'}</title>
        <meta name="description" content="The full stack developer David Magdy personal profile and protofolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={theme || 'dark'}>
        <NavBar setTheme={setTheme} />
        <main style={{ height: '100vh', position: 'relative' }}>
          <div className='section' style={{ ...commanSectionStyle, ...introSection }}><Intro theme={theme} /></div>
          <div className='section' style={{ ...commanSectionStyle, ...skillsSection }} ><Skills skills={mySkills} /></div>
          <div className='section' style={{ ...commanSectionStyle, ...protofolioSection }}><Protofolio projects={projects} /></div>
          <div className='section' style={{ ...commanSectionStyle, ...interestedSection }}><Interested /></div>
        </main>
      </div>
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
          level: 90
        },
        {
          skill: 'Sass/Scss',
          level: 89
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
          level: 94
        },
        {
          skill: 'Graphic Design',
          level: 80
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
          level: 94
        },
        {
          skill: 'GraphQL',
          level: 80
        },
        {
          skill: 'Auth/JWT',
          level: 80
        },
        {
          skill: 'MongoDB',
          level: 86
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
          level: 95
        },
        {
          skill: 'TypeScript',
          level: 79
        },
        {
          skill: 'Clean Coding',
          level: 82
        },
        {
          skill: 'Mathematics',
          level: 90
        },
        {
          skill: 'Algorithms',
          level: 70
        },
        {
          skill: 'Project Management',
          level: 62
        },
      ]
    },

    {
      title: 'Soft Skills',
      skillSet: [
        {
          skill: 'Time Management',
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

  let projects = [  
    {
      title: 'Auth & Login System Demo',
      technologies: 'A Login full system using Next.js full stack framework with react.js and MongoDB as database by using NextAuth and JWT',
      features: 'Login/Logout to the website, Regester New User, retrive lost password by email and a password Reset page',
      link: 'https://cachetclient.vercel.app/login'
    },

    {
      title: 'Charts',
      technologies: 'A small Dashbord Looking made using GraphQL as backend system Next.js framework using the Chart.js for charts drowing',
      features: 'This Is a simple resposive demo for chart.js library testing and overview, with some animations',
      link: 'https://dashbord-ccrs.vercel.app/'
    },

    {
      title: 'Interactive Service Calender',
      technologies: 'A Calendar to make and modify appointments and work time for employees with react.js and next.j routing.',
      features: 'The calendar have the ability to modify appointments with dragging in add to CURD form options.',
      link: 'https://timeline-calander-system.vercel.app/'
    },

    {
      title: 'Personal Website',
      technologies: 'A Personal CV website using React.js with Next.js, SCSS and Node.js for backend. No ready libraries used',
      features: 'The Website is made to show some front end skills with showing personal CV',
      link: 'https://personal-website-nine-zeta-97.vercel.app/'
    },

    {
      title: 'Laptop Shop',
      technologies: 'A Laptops shop created with Next.js, React.js and mongodb, getting data via SSR and implemnting the Auth to the website',
      features: 'Showing some eCommerce functions like sorting and filtering, also, show some UI/UX ',
      link: 'https://shop-jade-rho.vercel.app/'
    },
  ]

  return {
    props: {
      mySkills: mySkills,
      projects: projects
    }
  }
}