import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="The World’s Work Marketplace." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <title>JobCareer - The World’s Work Marketplace</title>
      </Head>
      <main>
      <nav className={`h-14 fixed w-full z-[999]`} >
        <ul className='max-w-7xl mx-auto flex gap-3 h-full items-center'>
          <li className='flex-auto font-bold text-2xl'>
            <Link href='/'>Job<span className='text-secondary'>Career</span></Link>
          </li>
          <li>
            <Link className='hover:text-primary' href='/jobs'>Log In</Link>
          </li>
          <li>
            <Link className='border border-black px-2 py-1 rounded-full'href='/login' >Sign Up</Link>
          </li>
        </ul>
      </nav>
      </main>
    </>
  )
}
