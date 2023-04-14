import { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import Head from 'next/head';
import Image from 'next/image';
import { BiSearchAlt } from "react-icons/bi";
import HomeCard from '@/components/HomeCard';
import HomeTag from '@/components/HomeTag';

import hero1 from "../assets/hero-01.png";
import hero2 from "../assets/hero-02.png";
import hero3 from "../assets/hero-03.png";

const Home = () => {
  
  const el = useRef();
  const tl = useRef();
  const tl2 = useRef();

  useLayoutEffect(() => {
    let cards = gsap.utils.toArray(".statCard");

    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ repeat: -1 })
        .to("#hero1", { opacity: 1, duration: 3 })
        .to("#hero1", { opacity: 0, display: "none", duration: 3, delay: 1 })
        .to("#hero2", { opacity: 1, duration: 3 })
        .to("#hero2", { opacity: 0, display: "none", duration: 3, delay: 1 })
        .to("#hero3", { opacity: 1, duration: 3 })
        .to("#hero3", { opacity: 0, display: "none", duration: 3, delay: 1 });

      tl2.current = gsap
        .timeline()
        .from("#hero-title", { delay: 0.2, y: 50, opacity: 0, duration: 0.3 })
        .from("#hero-subtitle", { y: 50, opacity: 0, duration: 0.3 })
        .from("#search-container", { y: 50, opacity: 0, duration: 0.3 })
        .from("#search-button", {
          x: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2",
        })
        .from(".badge-container", { opacity: 0 })
        .from(".badge", { opacity: 0, y: 50, stagger: 0.1 });
    }, el);

    const movement = (e) => {
      cards.forEach((card, index) => {
        const depth = 90;
        const moveX = (e.pageX - window.innerWidth / 2) / depth;
        const moveY = (e.pageY - window.innerHeight / 2) / depth;
        index++;
        gsap.to(card, {
          x: moveX * index,
          y: moveY * index,
        });
      });
    };

    document.addEventListener("mousemove", movement);

    return () => {
      ctx.revert();

      document.removeEventListener("mousemove", movement);
    };
  }, []);

  return (
    <>
      <Head>
        <title>JobCareer - The World’s Work Marketplace</title>
      </Head>
      <main>
        <div ref={el} className='w-4/5 mx-auto h-auto xl:h-screen'>
          {/* <div className='max-w-2xl h-[80vh] rounded-b-full absolute top-0 left-[63%] -translate-x-1/2 overflow-hidden z-0'>
            <Image id='hero1' src={hero1} alt='hero1' className='object-cover h-full w-full' />
            <Image id='hero2' src={hero2} alt='hero2' className='object-cover h-full w-full'  />
            <Image id='hero3' src={hero3} alt='hero3' className='object-cover h-full w-full' />
          </div> */}
          <div className='h-full w-full flex items-center z-10 relative'>
            <div className='flex w-full flex-col xl:flex-row'>
              <div className='w-full xl:w-1/2 flex flex-col items-start mt-24 text-center xl:text-left xl:mt-0'>
                <h1 id='hero-title' className='heroElement font-bold text-3xl pl-3 xl:pl-0 xl:text-7xl'>Find the perfect <br /> job for you.</h1>
                <p id='hero-subtitle' className='mt-5 text-lg'>Search your career opportunity through 12,800 jobs.</p>
                <div id='search-container' className='bg-white rounded-full p-3 flex w-full max-w-xl overflow-hidden mt-5 shadow-lg'>
                  <input
                    className='flex-auto text-lg p-2 border-none outline-none focus:ring-0 w-full xl:w-auto'
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Job title or Keyword'
                  />
                  <button id='search-button' className='p-2 rounded-full bg-primary h-12 xl:h-14 w-14 grid place-items-center'>
                    <BiSearchAlt size='23' color='white' />
                  </button>
                </div>
                <HomeTag/>
              </div>
              <div className='flex flex-col justify-between w-full items-center py-10 gap-8 xl:gap-0 xl:py-0 xl:w-2/4 xl:items-end xl:pr-20'>
                <HomeCard jobTitle='Business Development' jobNumber='319' />
                <div className='xl:mr-10'>                  
                  <HomeCard jobTitle='Marketing & Communication' jobNumber='275' />
                </div>
                <div className="xl:mr-24">                  
                  <HomeCard jobTitle='Development & IT' jobNumber='325' />
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