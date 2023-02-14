import '@/styles/globals.scss'
import { NavStateProvider } from '../context/NavStateProvider';
import { Analytics } from '@vercel/analytics'

export default function App({ Component, pageProps }) {
  return (
    <NavStateProvider>
      <Component {...pageProps} />
      <Analytics />
    </NavStateProvider>
  )
}
