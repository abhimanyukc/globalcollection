import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'

export default function App({ Component, pageProps }) {
  //App layout wraps all of our component
  return <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
}
