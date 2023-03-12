import Head from 'next/head';
import Image from 'next/image';
import { BiSearchAlt } from "react-icons/bi";
import HomeCard from '@/components/HomeCard';

import hero1 from "../assets/hero-01.png";
import hero2 from "../assets/hero-02.png";
import hero3 from "../assets/hero-03.png";
import HomeTag from '@/components/HomeTag';

const Home = () => {
  

  return (
    <>
      <Head>
        <title>JobCareer - The World’s Work Marketplace</title>
      </Head>
      <main>
        <div className='w-4/5 mx-auto h-screen'>
          <div className='max-w-2xl h-[80vh] rounded-b-full absolute top-0 left-[63.8%] -translate-x-1/2 overflow-hidden z-0'>
            <Image id='hero1' src={hero1} alt='hero1' className='object-cover h-full w-full' />
            <Image id='hero2' src={hero2} alt='hero2' className='object-cover h-full w-full'  />
            <Image id='hero3' src={hero3} alt='hero3' className='object-cover h-full w-full' />
          </div>
          <div className='h-full w-full flex items-center z-10 relative'>
            <div className='flex w-full'>
              <div className='w-1/2 flex flex-col items-start'>
                <h1 id='hero-title' className='heroElement font-bold text-7xl'>Find the perfect <br /> job for you.</h1>
                <p id='hero-subtitle' className='mt-5 text-lg'>Search your career opportunity through 12,800 jobs.</p>
                <div id='search-container' className='bg-white rounded-full p-3 flex w-full max-w-xl overflow-hidden mt-5  shadow-lg'>
                  <input
                    className='flex-auto text-lg p-2 border-none outline-none focus:ring-0'
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Job title or Keyword'
                  />
                  <button id='search-button' className='p-2 rounded-full bg-primary  h-14 w-14 grid place-items-center'>
                    <BiSearchAlt size='23' color='white' />
                  </button>
                </div>
                <HomeTag/>
              </div>
              <div className='flex flex-col justify-between '>
                <HomeCard jobTitle='Business Development' jobNumber='319' position='150' />
                <HomeCard jobTitle='Marketing & Communication' jobNumber='275' position='130' />
                <HomeCard jobTitle='Development & IT' jobNumber='325' position='105' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;