import { useState, Fragment } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react';
import TheDivArea from "@/components/TheDivArea";
import sagorrana from '../assets/sagorrana.png';

const profile = () => {
   const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const updatePhotoHandler = () => {
      console.log('changeTerms');
      setIsOpen(false)
  }

  return (
   <>
      <Head>
         <title>Profile - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-2/3 p-8 border border-silver rounded-xl">
               <div className="flex items-start gap-20">
                  <div className="relative">
                     <Image
                        alt="profile pic"
                        src={sagorrana}
                        width={112}
                        className="h-28 rounded-full object-cover object-top"
                     />
                     <div className="w-4 h-4 bg-primary border-[2px] border-white rounded-full absolute bottom-2 right-2"/>
                     <button  
                        type="button"
                        onClick={openModal}  
                        className="absolute top-0 left-0 border border-[#d5e0d5] p-1 rounded-full"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#108a00" className="w-4 h-4">
                           <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>
                     </button>
                  </div>
                  <div className="flex-1">
                     <div className='flex items-center justify-between pb-2.5'>
                        <h2 className='text-2xl font-medium'>Sagor Rana</h2>
                        <button 
                        className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        >
                           Edit Profile
                        </button>
                     </div>
                     <div className='grid grid-cols-2 gap-2'>
                        <p className='text-base'>MERN Developer</p>
                        <p className='text-base'>$90.00/hr</p>
                        <p className='text-base'>Narayanganj, Bangladesh</p>
                        <p className='text-base'>
                           <button 
                              className='border border-silver p-1 px-3 rounded-full text-sm mr-2 disabled:bg-silver/20 disabled:text-[#d9d9d9]' 
                              disabled
                           >Available Now</button> 
                           off
                        </p>
                     </div>
                     <div className='pt-8'>
                        <h3 className='text-xl font-medium pb-1'>Overview</h3>
                        <p className='pb-4'>Use this space to show clients you have the skills and experience they're looking for:</p>
                        <p>My Skills are: ✔ Comfortable: JavaScript, TypeScript, Reactjs, React-Router (6.4), Context API, React-Redux, Lazy Loading, Nextjs, Next-Auth, Styled-Components, Material UI, Ant Design, Bootstrap, TailwindCSS, MaterializeCSS, SCSS, HTML, CSS. ✔ Familiar: Nodejs, Expressjs, MongoDB, Firebase, MySQL ✔ Web Tools: Git, VS Code, Chrome Dev Tools, Netlify, Vercel. ✔ Design Tools: Figma, Adobe XD, Illustrator, Photoshop. ✔ Email Marketing Expert (MailChimp & Klaviyo). ✔ Email Signature Design (Gmail, Yahoo, Outlook, Hotmail & etc.) ✔ WordPress (Ecommerce, Theme Customizing, Elementor, Zion, Beaver Builder). ✔ Website Bug Fixing( CSS, JS, WordPress, Reactjs, etc ). Thank you.</p>
                     </div>
                     <div className='pt-12 grid grid-cols-4 gap-3'>
                        <div>
                           <h3 className='text-3xl text-primary font-semibold'>8</h3>
                           <p>Proposals</p>
                        </div>
                        <div>
                           <h3 className='text-3xl text-primary font-semibold'>5</h3>
                           <p>Invited</p>
                        </div>
                        <div>
                           <h3 className='text-3xl text-primary font-semibold'>4</h3>
                           <p>Hired</p>
                        </div>
                        <div>
                           <h3 className='text-3xl text-primary font-semibold'>2</h3>
                           <p>Completed</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </TheDivArea>
      </main>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border border-primary">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  <h3 className='relative -top-2.5'>Change Photo</h3>
                  <button
                     type="button" 
                     className="absolute top-2.5 right-2.5 bg-primary/80 text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" 
                     onClick={closeModal}
                  >
                  <svg 
                     aria-hidden="true" 
                     className="w-5 h-5" 
                     fill="currentColor" 
                     viewBox="0 0 20 20" 
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
                  </Dialog.Title>
                  <div className="mt-5">
                  <form>
                     <div className="flex items-center py-5 gap-5">
                     <div className="shrink-0">
                        <Image
                           alt="Current Profile Image"
                           src={sagorrana}
                           width={112}
                           className="h-28 rounded-full object-cover object-top"
                        />
                     </div>
                     <label className="block cursor-pointer">
                        <span className="sr-only cursor-pointer">Choose profile photo</span>
                        <input type="file" className="block w-full text-sm text-slate-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-violet-50 file:text-violet-700
                           hover:file:bg-violet-100
                           cursor-pointer
                        "/>
                     </label>
                     </div>
                     <div className='mt-3'>
                        <button 
                           onClick={updatePhotoHandler}
                           data-modal-hide="popup-modal" 
                           type="button" 
                           className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                           Update Photo
                        </button>
                        <button 
                           data-modal-hide="popup-modal" 
                           onClick={closeModal}
                           type="button"
                           className="focus:ring-0 focus:outline-none text-sm font-medium px-5 py-2.5">
                              No, cancel
                           </button>
                     </div>
                  </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
   </>
  )
}

export default profile