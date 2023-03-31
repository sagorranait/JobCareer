import { useState, Fragment } from 'react';
import Head from "next/head";
import { Dialog, Transition } from '@headlessui/react';
import TheDivArea from "@/components/TheDivArea";

const proposals = () => {
   const [isOpen, setIsOpen] = useState(false);
   const closeModal = () => setIsOpen(false);
   const openModal = () => setIsOpen(true);
 
   const changeTermsHandler = () => {
       console.log('changeTerms');
       setIsOpen(false)
   }

  return (
   <>
      <Head>
         <title>Proposals - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
         <div className="w-9/12 p-5 border border-silver rounded-lg">
            <h3 className="text-2xl font-semibold pb-8">Proposals (6)</h3>
            <div className="flex items-center justify-between border-b border-silver pb-4 mb-4">
               <p className="text-axolotl">Sagor Rana</p>
               <p className="font-medium">Looking for an Experienced Shopify developer...</p>
               <p className="text-sm text-axolotl">Budget: $60</p>
               <div>
                  <button type="button" onClick={openModal}  className="bg-primary text-white font-medium px-6 py-2 rounded-full">See More</button>
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
                  <h3 className='relative -top-2.5'>Proposal Details</h3>
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
                     <div className=''>
                        <h3><b>Name:</b> Sagor Rana</h3>
                        <p className='py-3'><b>Given Budget:</b> $60</p>
                        <p><b className='block pb-2'>Cover Letter:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni totam eligendi repellendus odit sapiente temporibus. Ipsam, minima qui ad cupiditate, mollitia quis voluptates at commodi quisquam doloremque dolore velit!</p>
                     </div>
                     <div className='mt-4'>
                        <button 
                           onClick={changeTermsHandler}
                           data-modal-hide="popup-modal" 
                           type="button" 
                           className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                           Yes, Like it
                        </button>
                        <button 
                           data-modal-hide="popup-modal" 
                           onClick={closeModal}
                           type="button"
                           className="focus:ring-0 focus:outline-none text-sm font-medium px-5 py-2.5">
                              No, cancel
                           </button>
                     </div>
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

export default proposals