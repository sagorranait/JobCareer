import { Fragment, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { getUser, storeUser } from '@/features';
import { Menu, Transition  } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';

import Coins from '../assets/coins.png';

const TheMenu = () => {
 const router = useRouter();
 const dispatch = useDispatch();
 const user = useSelector(getUser);
 const { data: session, status: loading } = useSession();

 useEffect(() => {
   const fetchData = async () => {
     if (session) {
       const email = session?.user?.email;
       if (email) {
         await fetch(`/api/user/${email}`)
         .then((res) => res.json())
         .then((result) => dispatch(storeUser({ user: result })));
       } else {
         console.error('Email not found in session');
       }
     }
   };
 
   fetchData();
 }, [session]); 

  return (
   <nav className='w-full fixed z-[999] bg-white shadow-sm h-16 xl:h-14 xl:shadow-none'>
      <ul className='w-4/5 mx-auto flex gap-5 h-full items-center'>
         <li className='flex-auto'>
            <div className="flex items-center gap-10">
               <Link href='/' className="font-bold text-2xl">Job<span className='text-secondary'>Career</span></Link>
               <ul className="left-menu flex items-center gap-8 pt-1">
                  <li className='hidden lg:inline-block'>
                     <Link 
                        className={router.pathname === "/works" ? "border-b-2 border-secondary" : "text-black hover:border-b-2 duration-100"} 
                        href='/works'
                     >
                        Find Work
                     </Link>
                  </li>
                  <li className='hidden lg:inline-block'>
                     <Link 
                     className={router.pathname === "/enterprise" ? "border-b-2 border-secondary" : "hover:border-b-2 duration-100"} 
                     href='/enterprise'
                     >
                        Enterprise
                     </Link>
                  </li>
               </ul>
            </div>
         </li>
         {session && <>
            {user?.type === 'client' && 
               <li className='hidden lg:inline-block'>
                  <Link 
                     href='/newjob' 
                     className={router.pathname === "/newjob" ? "border-b-2 border-secondary" : "hover:border-b-2 duration-100"}
                  >
                  Add New Job
                  </Link>
               </li>
            }
            <Menu as="div" className="relative text-left hidden lg:inline-block">
               <div className='flex items-center gap-3'>
                  {!user?.type === 'client' &&
                  <div className='coins bg-primary flex items-center w-20 p-1 rounded-full gap-3'>
                     <Image src={Coins} alt='Coins' className='w-6 pl-1' />
                     <span className='text-white font-bold text-lg'>{user?.connects}</span>
                  </div>
                  }
                  <Menu.Button className="inline-flex items-center w-14 justify-center py-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-75">
                     {
                        loading === 'loading' ? 
                        <div className="animate-pulse flex space-x-2 items-center">
                           <div className="rounded-full bg-silver h-[38px] w-[38px]"></div>
                           <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              className="ml-1 mt-1 -mr-1 h-4 w-4 text-violet-200 hover:text-violet-100"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                           </svg>
                        </div>
                        :
                        <>
                           {user?.imgURL ? <Image
                              src={user?.imgURL}
                              alt={user?.username}
                              width={38}
                              height={38}
                              className='border-[2px] w-[38px] h-[38px] object-cover object-top border-primary rounded-full'
                           /> : 
                           <div className='w-[38px] h-[38px] bg-silver border-[1px] border-primary rounded-full flex items-center justify-center text-lg font-semibold'>
                              {user?.username[0]}
                           </div>
                           }
                           
                           <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              className="ml-1 mt-1 -mr-1 h-4 w-4 text-violet-200 hover:text-violet-100"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                           </svg>
                        </>
                     }
                  </Menu.Button>
               </div>
               <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
               >
                  <Menu.Items className="bg-white border border-primary absolute right-0 mt-2 w-56 rounded-lg shadow-lg focus:outline-none">
                     <div className="px-1 py-1">
                     <Menu.Item>
                        {({ active }) => (
                           <Link 
                           href='/profile'
                           className={`${
                              active ? 'bg-violet-500' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                           >
                              <svg 
                                 xmlns="http://www.w3.org/2000/svg" 
                                 fill="none" 
                                 viewBox="0 0 24 24" 
                                 strokeWidth="1.5" 
                                 stroke="currentColor" 
                                 className="mr-2 h-4 w-4"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                              Profile
                           </Link>
                        )}
                     </Menu.Item>
                     {user?.type === 'client' && 
                        <Menu.Item>
                           {({ active }) => (
                              <Link
                              href='/jobs'
                              className={`${
                                 active ? 'bg-violet-500' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                              >
                              <svg 
                                 xmlns="http://www.w3.org/2000/svg" 
                                 fill="none" 
                                 viewBox="0 0 24 24" 
                                 strokeWidth="1.5" 
                                 stroke="currentColor" 
                                 className="mr-2 h-4 w-4"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                              </svg>
                              My Jobs
                              </Link>
                           )}
                        </Menu.Item>
                     }
                     <Menu.Item>
                        {({ active }) => (
                           <Link
                           href='/proposals'
                           className={`${
                              active ? 'bg-violet-500' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                              </svg>
                              My Proposals
                           </Link>
                        )}
                     </Menu.Item>
                     </div>
                     <div className="px-1 py-1 border-t border-silver">
                     <Menu.Item>
                        {({ active }) => (
                           <button
                           className={`${
                              active ? 'bg-violet-500' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                           onClick={
                              ()=>{
                                 if (typeof window !== 'undefined') {
                                    window.sessionStorage.removeItem('redirectUrl');
                                    signOut(); 
                                 }
                              }
                           }
                           >
                           <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              className="mr-2 w-4 h-4"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                           </svg>
                           Sign Out
                           </button>
                        )}
                     </Menu.Item>
                     </div>
                  </Menu.Items>
               </Transition>
            </Menu>
         </>}
          {(!session && loading !== 'loading') && <>
            <li className='hidden lg:inline-block'>
               <Link 
                  href='/signin' 
                  className={router.pathname === "/signin" ? "bg-primary text-white font-medium px-6 py-2 rounded-full" : ""}
               >
                  Sign In
               </Link>
            </li>
            <li className='hidden lg:inline-block'>
               <Link 
               className={router.pathname === "/signin" ? "text-black" : "bg-primary text-white font-medium px-6 py-2 rounded-full"} 
               href='/signup' 
            >
               Sign Up
            </Link>
            </li>
          </>}
         {/* Responsive Menu */}
         <Menu as="div" className="relative inline-block text-left lg:hidden">
            <div className='flex items-center gap-1'>
               { user?.type !== 'client' && 
               <div className='coins bg-primary flex items-center w-16 p-1 rounded-full gap-2'>
                  <Image src={Coins} alt='Coins' className='w-5' />
                  <span className='text-white font-bold text-base'>{user?.connects}</span>
               </div>
               }
               <Menu.Button className="inline-flex w-8 justify-center py-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-75">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
               </Menu.Button>
            </div>
            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="bg-white border border-primary absolute right-0 mt-2 w-56 rounded-lg shadow-lg focus:outline-none">
                  <div className="px-1 py-1">
                  <Menu.Item>
                     {({ active }) => (
                        <Link 
                        href='/works'
                        className={`${
                           active ? 'bg-violet-500' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                          </svg>
                          Find Work
                        </Link>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <Link 
                        href='/enterprise'
                        className={`${
                           active ? 'bg-violet-500' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                          </svg>
                          Enterprise
                        </Link>
                     )}
                  </Menu.Item>
                  {user?.type === 'client' && 
                     <Menu.Item>
                        {({ active }) => (
                           <Link 
                           href='/newjob'
                           className={`${
                              active ? 'bg-violet-500' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                           >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                           </svg>
                           Add New Job
                           </Link>
                        )}
                     </Menu.Item>
                  }
                  <Menu.Item>
                     {({ active }) => (
                        <Link 
                        href='/profile'
                        className={`${
                           active ? 'bg-violet-500' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                           <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              className="mr-2 h-4 w-4"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                           </svg>
                           Profile
                        </Link>
                     )}
                  </Menu.Item>
                  {user?.type === 'client' && 
                     <Menu.Item>
                        {({ active }) => (
                           <Link
                           href='/jobs'
                           className={`${
                              active ? 'bg-violet-500' : 'text-gray-900'
                           } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                           >
                           <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth="1.5" 
                              stroke="currentColor" 
                              className="mr-2 h-4 w-4"
                           >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                           </svg>
                           My Jobs
                           </Link>
                        )}
                     </Menu.Item>
                  }
                  <Menu.Item>
                     {({ active }) => (
                        <Link
                        href='/proposals'
                        className={`${
                           active ? 'bg-violet-500' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                           </svg>
                            My Proposals
                        </Link>
                     )}
                  </Menu.Item>
                  </div>
                  <div className="px-1 py-1 border-t border-silver">
                     {!session &&
                        <>
                           <Menu.Item>
                              {({ active }) => (
                                 <Link
                                 href='/signin'
                                 className={`${
                                    active ? 'bg-violet-500' : 'text-gray-900'
                                 } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                 >
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                 </svg>
                                 Sign In
                                 </Link>
                              )}
                           </Menu.Item>
                           <Menu.Item>
                              {({ active }) => (
                                 <Link
                                 href='/signup'
                                 className={`${
                                    active ? 'bg-violet-500' : 'text-gray-900'
                                 } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                                 >
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                 </svg>
                                 Sign Up
                                 </Link>
                              )}
                           </Menu.Item>
                        </>
                     }
                  <Menu.Item>
                     {({ active }) => (
                        <button
                        className={`${
                           active ? 'bg-violet-500' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                        onClick={
                           ()=>{
                              if (typeof window !== 'undefined') {
                                 window.sessionStorage.removeItem('redirectUrl');
                                 signOut(); 
                              }
                           }
                        }
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-2 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                          </svg>
                          Sign Out
                        </button>
                     )}
                  </Menu.Item>
                  </div>
               </Menu.Items>
            </Transition>
          </Menu>
      </ul>
   </nav>
  )
}

export default TheMenu