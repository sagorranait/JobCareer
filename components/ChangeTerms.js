import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ChangeTerms = () => {
   const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const changeTermsHandler = () => {
      console.log('changeTerms');
      setIsOpen(false)
  }

  return (
   <>
      <button 
         type="button"
         onClick={openModal} 
         className="bg-primary text-white font-medium px-6 py-2 rounded-full mb-2 sm:mr-3 xl:mb-0 xl:mr-3"
      >
         Change Terms
      </button>
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
                  <h3 className='relative -top-2.5'>Change Terms</h3>
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
                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
                  </Dialog.Title>
                  <div className="mt-5">
                  <form>
                     <div className="mb-4">
                        <label htmlFor="profile" className="mb-3 text-base font-medium pr-5">Propose with a Specialized profile</label>
                        <select 
                           id="profile" 
                           className="w-60 border border-silver text-base rounded-lg focus:ring-silver focus:border-silver p-2 mt-3">
                           <option defaultValue value='id'>General Profile</option>
                        </select>
                     </div>
                     <div className="py-2">
                        <div className="flex items-center justify-center gap-8 pb-5">
                           <div className="flex-1">
                              <h4 className="text-base font-semibold">Bid</h4>
                           </div>
                           <div className='w-[100px] md:w-auto'>
                              <div className="relative">
                                 <span className="absolute left-3 top-2.5 text-base font-medium">
                                    $
                                 </span>
                                 <input 
                                    type="text" 
                                    id="website-admin" 
                                    className="border border-axolotl p-2 font-medium rounded-lg text-right w-full" 
                                    value='200.00'
                                    onChange={()=>{}}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:gap-8 pb-5">
                           <div className="flex-1">
                              <h4 className="text-base font-semibold">
                                 <span className="text-secondary hidden md:inline-block">20%</span> Service Fee
                              </h4>
                           </div>
                           <div className='w-[100px] md:w-auto'>
                              <div className="relative">
                                 <span className="absolute left-3 top-2.5 text-base font-medium">
                                    $
                                 </span>
                                 <input 
                                    type="text" 
                                    id="website-admin" 
                                    className="border-none text-right font-medium cursor-not-allowed bg-[#e4ebe44f] text-[#5e6d55] rounded-lg p-2 w-full" 
                                    disabled
                                    readOnly
                                    value='20.00'
                                    onChange={()=>{}}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:gap-8 pb-2 md:pb-5">
                           <div className="flex-1">
                              <h4 className="text-base font-semibold">You’ll Receive</h4>
                           </div>
                           <div className='w-[100px] md:w-auto'>
                              <div className="relative">
                                 <span className="absolute left-3 top-2.5 text-base font-medium">
                                    $
                                 </span>
                                 <input 
                                    type="text" 
                                    id="website-admin" 
                                    className="border border-[#d5e0d5] w-full p-2 font-medium rounded-lg text-right cursor-not-allowed" 
                                    disabled
                                    readOnly
                                    value='180.00'
                                    onChange={()=>{}}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="py-3">
                        <div>
                           <label htmlFor="coverLetter" className="block mb-2 text-base font-medium">Cover Letter</label>
                           <textarea 
                              id="coverLetter" 
                              rows="4" 
                              className="block p-2.5 w-full rounded-lg border border-[#d5e0d5] focus:ring-[#d5e0d5] focus:border-[#d5e0d5]"
                           ></textarea>
                        </div>
                     </div>
                     <div className='mt-3'>
                        <button 
                           onClick={changeTermsHandler}
                           data-modal-hide="popup-modal" 
                           type="button" 
                           className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                           Yes, I'm sure
                        </button>
                        <button 
                           data-modal-hide="popup-modal" 
                           onClick={closeModal}
                           type="button"
                           className="focus:ring-0 focus:outline-none text-sm font-medium px-2 md:px-5 py-2.5">
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

export default ChangeTerms