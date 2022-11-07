import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  if(router.pathname == "/login" || router.pathname == "/register" || router.pathname == "/forgot-password")
    return (  <Component {...pageProps} /> )
  else
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
