import '@/styles/globals.scss'
import { useState } from 'react';
import { NavStateProvider } from '../context/NavStateProvider';
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={theme}>
      <NavStateProvider>
        <NavBar setTheme={setTheme} />
        <Component {...pageProps} />
      </NavStateProvider>
    </div>
  )
}
