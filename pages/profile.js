import { useState, Fragment, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import { getSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import TheDivArea from "@/components/TheDivArea";
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton';

const profile = ({ data, plength }) => {
   const { 
      type,
      about, 
      hourly, 
      imgURL, 
      address, 
      available,
      username,
      designation
   } = data;
   const [isOpen, setIsOpen] = useState(false);
   const [isShow, setIsShow] = useState(false);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const updatePhotoHandler = () => {
      console.log('Upload New Photo.');
      setIsOpen(false)
  }

  const profileUpdateHandler = (event) => {
      event.preventDefault();
  }

  return (
   <>
      <Head>
         <title>Profile - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            { !loading ? 
               <div className="w-11/12 mt-24 mb-3 p-3 md:mt-32 lg:mb-0 lg:w-10/12 lg:p-8 xl:mt-0 xl:w-2/3 border border-silver rounded-xl">
                  <div className="flex items-center flex-col justify-center gap-5 lg:items-start lg:justify-start lg:flex-row lg:gap-14 xl:gap-20">
                     <div className="relative">
                        {  imgURL ? <div>
                        
                        </div> : 
                           <Image
                              alt={username}
                              src={imgURL}
                              width={112}
                              height={112}
                              className="rounded-full object-cover object-top"
                           />
                        }
                        <div className="w-4 h-4 bg-primary border-[2px] border-white rounded-full absolute bottom-2 right-2"/>
                        <button  
                           type="button"
                           onClick={() => setIsOpen(true)}  
                           className="absolute top-0 left-0 border border-[#d5e0d5] p-1 rounded-full"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#108a00" className="w-4 h-4">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                           </svg>
                        </button>
                     </div>
                     <form className="flex-1" onSubmit={profileUpdateHandler}>
                        <div className='flex items-center justify-between pb-2.5 flex-col gap-3 md:flex-row md:px-20 lg:gap-0 lg:flex-row lg:px-0'>
                           <h2 className='text-xl lg:text-2xl font-medium'>{username}</h2>
                           <div>
                              {isShow ? <button 
                              className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                              type='submit'
                              >
                                 Update Profile
                              </button> : <span 
                              className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 cursor-pointer"
                              onClick={()=> setIsShow(true)}
                              >
                                 Edit Profile
                              </span>}
                           </div>
                        </div>
                        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start md:px-20 lg:justify-items-start lg:grid-cols-2 gap-2 lg:px-0'>
                           <div>
                              { isShow ? 
                              <input 
                                 type="text" 
                                 name='tagline' 
                                 value={designation} 
                                 placeholder='Tagline'
                                 onChange={()=>{}} 
                                 className="border border-silver text-base rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> :
                              <p className='text-base'>{designation}</p>                           
                              }
                           </div>
                           <div>
                              { isShow ?  
                              <p className='text-base'>$ <input 
                                 type="number" 
                                 name='hourlyrate' 
                                 placeholder='Hourly Rate'                              
                                 value={hourly}
                                 onChange={()=>{}}
                                 className="w-32 border border-silver rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> .00/hr</p> :
                              <p className='text-base'>$ {hourly}.00/hr</p>
                              }
                           </div>
                           <div>
                              { isShow ? 
                              <input 
                                 type="text" 
                                 name='location' 
                                 value={address}
                                 placeholder='Location'
                                 onChange={()=>{}} 
                                 className="border border-silver text-base rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> :
                              <p className='text-base'>{address}</p>
                              }
                           </div>
                           <div>
                              { isShow ? 
                              <p className='text-base'>
                                 <button 
                                    className='border border-silver p-1 px-3 rounded-full text-sm mr-2 disabled:bg-silver/20 disabled:text-[#d9d9d9]' 
                                    disabled
                                 >Available Now</button> 
                                 <select 
                                    className="border border-silver rounded-lg focus:ring-0 outline-none" 
                                    name="available"
                                 >
                                 <option value="true" defaultChecked>On</option>
                                 <option value="false">Off</option>
                              </select>
                              </p> :
                              <p className='text-base'>
                                 <button 
                                    className='border border-silver p-1 px-3 rounded-full text-sm mr-2 disabled:bg-silver/20 disabled:text-[#d9d9d9]' 
                                    disabled={!available}
                                 >Available Now</button> 
                                 {available ? '' : 'off'}
                              </p>
                              }
                           </div>
                        </div>
                        <div className='pt-5 lg:pt-8 text-center lg:text-left'>
                           <h3 className='text-xl font-medium pb-1'>Overview</h3>
                           <p className='pb-4 text-sm lg:text-base'>Use this space to show clients you have the skills and experience they're looking for:</p>
                           { isShow ? 
                           <textarea 
                              className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none text-sm lg:text-base" 
                              name="description" 
                              id="description" 
                              rows="6"
                              value={about}
                              onChange={()=>{}}
                              maxLength={500}
                           ></textarea> : 
                           <p className='text-sm md:text-base lg:text-base'>{about}</p> 
                           }
                        </div>
                        <div className='pt-8 lg:pt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3'>
                           <div className='text-center lg:text-left'>
                              <h3 className='text-3xl text-primary font-semibold'>{plength}</h3>
                              <p>{type === 'client' ? 'Job' : 'Proposals'}</p>
                           </div>
                           <div className='text-center lg:text-left'>
                              <h3 className='text-3xl text-primary font-semibold'>5</h3>
                              <p>Invited</p>
                           </div>
                           <div className='text-center lg:text-left'>
                              <h3 className='text-3xl text-primary font-semibold'>2</h3>
                              <p>Hired</p>
                           </div>
                           <div className='text-center lg:text-left'>
                              <h3 className='text-3xl text-primary font-semibold'>2</h3>
                              <p>Completed</p>
                           </div>
                        </div>
                     </form>
                  </div>
               </div> :
               <ProfileSkeleton/> 
            }
         </TheDivArea>
      </main>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                     onClick={() => setIsOpen(false)}
                  >
                  <svg 
                     aria-hidden="true" 
                     className="w-5 h-5" 
                     fill="currentColor" 
                     viewBox="0 0 20 20" 
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
                  </Dialog.Title>
                  <div className="mt-5">
                  <form>
                     <div className="flex items-center py-5 gap-5 flex-col lg:flex-row">
                     <div className="shrink-0">
                        <Image
                           alt="Current Profile Image"
                           src={imgURL}
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
                           onClick={() => setIsOpen(false)}
                           type="button"
                           className="focus:ring-0 focus:outline-none text-sm font-medium px-5 py-2.5">
                              Cancel
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

export async function getServerSideProps({ req }){
   const session = await getSession({ req })
   const email = session.user?.email;
 
   if(!session) {
     return { redirect : { destination: '/signin', permanent: false } }
   }

   if (email) {
      const baseUrl = req.headers.host;
      const res = await fetch(`http://${baseUrl}/api/user/${email}`);
      const data = await res.json();
      if (data._id) {
         const res = await fetch(`http://${baseUrl}/api/proposals/${data._id}`);
         const proposals = await res.json();
 
         return { props: { data, plength: proposals.length } }
      }
   } else {
      console.error('Email not found in session');
      return { props: { session } }
   }
 
}

export default profile