import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  if(router.pathname == "/" || router.pathname == "/register" || router.pathname == "/login" || router.pathname == "/forgot-password"  || router.pathname == "/email-verification" || router.pathname == "/reset-password"  || router.pathname == "/site-configuration")
    return (  <Component {...pageProps} /> )
  else
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
