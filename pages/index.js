import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import Head from 'next/head';
import Image from 'next/image';
import { BiSearchAlt } from "react-icons/bi";
import HomeCard from '@/components/HomeCard';
import HomeTag from '@/components/HomeTag';
import hero1 from "../assets/hero-01.png";
import { useRouter } from 'next/router';
import axios from 'axios';
import LoadingIcon from '@/components/LoadingIcon';

const Home = () => {
  const el = useRef();
  const tl2 = useRef();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    let cards = gsap.utils.toArray(".statCard");

    let ctx = gsap.context(() => {
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

  const capitalizeSkill = (skill) => {
    return skill
      .split(' ')
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
      .join(' ');
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const capitalizedSkill = capitalizeSkill(search);
    await axios.get(`/api/jobs/search?skill=${capitalizedSkill}`)
    .then(res => {
      const serializedData = JSON.stringify(res.data);
      router.push({
        pathname: '/works/search',
        query: { searched: serializedData },
      });
      setLoading(false);
      setSearch('');
    })
    .catch(error => console.error(error));
  }

  return (
    <>
      <Head>
        <title>JobCareer - The World’s Work Marketplace</title>
      </Head>
      <main>
        <div ref={el} className='w-4/5 mx-auto h-auto xl:h-screen'>
          <div className='max-w-2xl h-[80vh] rounded-b-full absolute top-0 left-[63%] -translate-x-1/2 overflow-hidden z-0 hidden lg:block lg:h-[60vh] lg:left-[62%] xl:h-[80vh] xl:left-[59%] 2xl:h-[80vh] 2xl:left-[63%]'>
            <Image priority id='hero1' src={hero1} alt='hero1' className='object-cover h-full w-full' />
          </div>
          <div className='h-full w-full flex items-center z-10 relative'>
            <div className='flex w-full flex-col lg:flex-row lg:gap-10 xl:gap-0'>
              <div className='w-full flex flex-col items-start mt-24 text-center md:mt-32 lg:w-1/2 lg:text-left xl:w-1/2 xl:text-left xl:mt-0'>
                <h1 id='hero-title' className='heroElement font-bold text-3xl pl-3 m-auto md:text-5xl lg:m-0 lg:pl-0 lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                  Find the perfect <br /> job for you.
                </h1>
                <p id='hero-subtitle' className='mt-5 text-lg md:m-auto md:mt-5 xl:m-0 xl:mt-5'>Search your career opportunity through 12,800 jobs.</p>
                <form onSubmit={searchHandler} id='search-container' className='bg-white rounded-full p-3 flex w-full max-w-xl overflow-hidden mt-5 shadow-lg'>
                  <input
                    className='flex-auto text-lg p-2 border-none outline-none focus:ring-0 w-full xl:w-auto'
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Enter Job title or Keyword'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                  <button type='submit' id='search-button' className='p-2 rounded-full bg-primary h-12 xl:h-14 w-14 grid place-items-center'>
                    {!loading ? <BiSearchAlt size='23' color='white' /> : <LoadingIcon/> }
                  </button>
                </form>
                <HomeTag/>
              </div>
              <div className='flex flex-col justify-between w-full items-center py-10 gap-8 md:w-3/4 md:m-auto lg:w-[36%] lg:gap-8 lg:py-0 lg:items-end xl:pr-20 xl:w-2/4'>
                <HomeCard jobTitle='Business Development' jobNumber='319' />
                <div className='w-full xl:w-auto xl:mr-10'>                  
                  <HomeCard jobTitle='Marketing & Communication' jobNumber='275' />
                </div>
                <div className="w-full xl:w-auto xl:mr-24">                  
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