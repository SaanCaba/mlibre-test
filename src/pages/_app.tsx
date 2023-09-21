import BackToTop from '@/components/BackToTop'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
const inter = Lato({ subsets: ['latin'], weight: '400' })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <BackToTop />
    </main>
  )
}
