import BackToTop from '@/components/BackToTop'
import Layout from '@/components/Layout'
import { ItemsProvider } from '@/context/itemsContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
const inter = Lato({ subsets: ['latin'], weight: '400' })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ItemsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ItemsProvider>
      <BackToTop />
    </main>
  )
}
