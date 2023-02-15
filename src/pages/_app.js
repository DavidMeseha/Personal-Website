import '@/styles/globals.scss'
import { NavStateProvider } from '../context/NavStateProvider';

export default function App({ Component, pageProps }) {
  return (
    <NavStateProvider>
      <Component {...pageProps} />
    </NavStateProvider>
  )
}
