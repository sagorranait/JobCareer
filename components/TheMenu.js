import { Fragment } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition  } from "@headlessui/react";

const TheMenu = () => {
 const router = useRouter();

  return (
   <nav className='w-full h-14 fixed z-[999]'>
      <ul className='w-4/5 mx-auto flex gap-5 h-full items-center'>
         <li className='flex-auto'>
            <div className="flex items-center gap-10">
               <Link href='/' className="font-bold text-2xl">Job<span className='text-secondary'>Career</span></Link>
               <ul className="left-menu flex items-center gap-8 pt-1">
                  <li>
                     <Link 
                        className={router.pathname === "/works" ? "border-b-2 border-secondary" : "text-black hover:border-b-2 duration-100"} 
                        href='/works'
                     >
                        Find Work
                     </Link>
                  </li>
                  <li>
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
         <li>
            <Link 
               href='/newjob' 
               className={router.pathname === "/newjob" ? "border-b-2 border-secondary" : "hover:border-b-2 duration-100"}
            >
              Add New Job
            </Link>
         </li>
         <Menu as="div" className="relative inline-block text-left">
            <div>
               <Menu.Button className="inline-flex w-full justify-center py-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Settings
                  <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     strokeWidth="1.5" 
                     stroke="currentColor" 
                     className="ml-3 mt-1 -mr-1 h-4 w-4 text-violet-200 hover:text-violet-100"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
          <li>
            <Link 
               href='/login' 
               className={router.pathname === "/login" ? "bg-primary text-white font-medium px-6 py-2 rounded-full" : ""}
            >
               Log In
            </Link>
         </li>
         <li>
            <Link 
            className={router.pathname === "/login" ? "text-black" : "bg-primary text-white font-medium px-6 py-2 rounded-full"} 
            href='/signup' 
         >
            Sign Up
         </Link>
         </li>
      </ul>
   </nav>
  )
}

function EditInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 13V16H7L16 7L13 4L4 13Z"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 function EditActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 13V16H7L16 7L13 4L4 13Z"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 function DuplicateInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 4H12V12H4V4Z"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
       <path
         d="M8 8H16V16H8V8Z"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 function DuplicateActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M4 4H12V12H4V4Z"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
       <path
         d="M8 8H16V16H8V8Z"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
     </svg>
   )
 }
 
 function ArchiveInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <rect
         x="5"
         y="8"
         width="10"
         height="8"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
       <rect
         x="4"
         y="4"
         width="12"
         height="4"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
     </svg>
   )
 }
 
 function ArchiveActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <rect
         x="5"
         y="8"
         width="10"
         height="8"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
       <rect
         x="4"
         y="4"
         width="12"
         height="4"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
     </svg>
   )
 }
 
 function MoveInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
       <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
       <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
     </svg>
   )
 }
 
 function MoveActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
       <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
       <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
     </svg>
   )
 }
 
 function DeleteInactiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <rect
         x="5"
         y="6"
         width="10"
         height="10"
         fill="#EDE9FE"
         stroke="#A78BFA"
         strokeWidth="2"
       />
       <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
       <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
     </svg>
   )
 }
 
 function DeleteActiveIcon(props) {
   return (
     <svg
       {...props}
       viewBox="0 0 20 20"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <rect
         x="5"
         y="6"
         width="10"
         height="10"
         fill="#8B5CF6"
         stroke="#C4B5FD"
         strokeWidth="2"
       />
       <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
       <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
     </svg>
   )
 }

export default TheMenu