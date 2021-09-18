import Link from 'next/link'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>NFT Marketplace</p>
        <div className='flex mt-4'>
          <Link href='/'>
            <a className='mr-4 text-green-500'>Home</a>
          </Link>
          <Link href='/create-item'>
            <a className='mr-6 text-green-500'>Sell Digital Asset</a>
          </Link>
          <Link href='/my-assets'>
            <a className='mr-6 text-green-500'>My Digital Assets</a>
          </Link>
          <Link href='/creator-dashboard'>
            <a className='mr-6 text-green-500'>Creator Dashboard</a>
          </Link>
        </div>
      </nav>
      <main className='p-6'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
export default MyApp
