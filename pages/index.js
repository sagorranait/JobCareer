import Head from 'next/head';
import Image from 'next/image';
import { BiSearchAlt } from "react-icons/bi";
import TheBadge from "../components/TheBadge";
import hero1 from "../assets/hero-01.png";
import hero2 from "../assets/hero-02.png";
import hero3 from "../assets/hero-03.png";

import styles from '@/styles/Home.module.css';

const Home = () => {
  const keywords = [
    "Web Developer",
    "Web Designer",
    "Writer",
    "Fullstack",
    "Senior",
    "Team Lead",
    "Administration",
    "SQA",
    "Tester",
  ];

  return (
    <>
      <Head>
        <title>JobCareer - The World’s Work Marketplace</title>
      </Head>
      <main>
        <div className='w-4/5 mx-auto h-screen'>
          <div className='max-w-2xl h-[80vh] rounded-b-full absolute top-0 left-[62%] -translate-x-1/2 overflow-hidden z-0'>
            <Image
              id='hero1'
              src={hero1}
              alt=''
              className='object-cover h-full w-full'
            />
            <Image
              id='hero2'
              src={hero2}
              alt=''
              className='object-cover h-full w-full'
            />
            <Image
              id='hero3'
              src={hero3}
              alt=''
              className='object-cover h-full w-full'
            />
          </div>
          <div className='h-full w-full flex items-center z-10 relative'>
            <div className='flex w-full'>
              <div className='w-1/2 flex flex-col items-start'>
                <h1 id='hero-title' className='heroElement font-bold text-7xl'>
                  Find the perfect <br /> job for you
                </h1>
                <p id='hero-subtitle' className='mt-5 text-lg'>
                  Search your career opportunity through 12,800 jobs
                </p>
                <div
                  id='search-container'
                  className='bg-white rounded-full p-3 flex w-full max-w-xl overflow-hidden mt-5  shadow-lg'
                >
                  <input
                    className='flex-auto text-lg p-2 border-none outline-none focus:ring-0'
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Job title or Keyword'
                  />
                  <button
                    id='search-button'
                    className='p-2 rounded-full bg-primary  h-14 w-14 grid place-items-center'
                  >
                    <BiSearchAlt size='23' color='white' />
                  </button>
                </div>
                <div className='mt-16'>
                  <h2 className='badge-container'>Popular Search</h2>
                  <div className='mt-3 max-w-xl flex flex-wrap  gap-3'>
                    {keywords.map((item) => (
                      <TheBadge key={item} className='badge'>
                        {item}
                      </TheBadge>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between '>
                <div className='statCard rounded-3xl shadow-2xl p-7 bg-white relative left-[150%]'>
                  <div>
                    <span className='text-2xl font-bold'>319 </span>
                    <span>Job offers</span>
                  </div>
                  <p className='font-light text-gray-500'>
                    In Business Development
                  </p>
                </div>
                <div className='statCard rounded-3xl shadow-2xl p-7 bg-white relative left-[130%]'>
                  <div>
                    <span className='text-2xl font-bold'>265 </span>
                    <span>Job offers</span>
                  </div>
                  <p className='font-light text-gray-500'>
                    In Marketing & Communication
                  </p>
                </div>
                <div className='statCard rounded-3xl shadow-2xl p-7 bg-white relative left-[105%]'>
                  <div>
                    <span className='text-2xl font-bold'>324 </span>
                    <span>Job offers</span>
                  </div>
                  <p className='font-light text-gray-500'>In Project Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;