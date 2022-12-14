import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router'
import Layout from '../components/common/Layout'
import '../styles/globals.css'
import '../styles/theme.css'
import AuthProvider from '../provider/AuthProvider';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname == "/" || router.pathname == "/register" || router.pathname == "/login" || router.pathname == "/forgot-password" || router.pathname == "/email-verification" || router.pathname == "/reset-password" || router.pathname == "/site-configuration")
    return (
      <ThemeProvider enableSystem={true} attribute='class'>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    )
  else
    return (
      <ThemeProvider enableSystem={true} attribute='class'>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    )
}

export default MyApp
