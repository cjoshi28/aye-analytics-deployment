import { ThemeProvider } from 'next-theme';
import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import '../styles/globals.css'
import AuthProvider from '../provider/authProvider';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname == "/" || router.pathname == "/register" || router.pathname == "/login" || router.pathname == "/forgot-password" || router.pathname == "/email-verification" || router.pathname == "/reset-password" || router.pathname == "/site-configuration")
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  else
    return (
      <AuthProvider>
        <ThemeProvider attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>

    )
}

export default MyApp
