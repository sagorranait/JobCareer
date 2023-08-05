import axios from 'axios';
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-hot-toast';
import LoadingIcon from './LoadingIcon';

const WithDraw = ({ proposalId, updatedProposal }) => {
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const withdrawHandler = async () => { 
     setLoading(true);    
     await axios.delete(`/api/proposals/delete?id=${proposalId}`)
     .then((_) => {
         toast.success('Successfully Withdrew!');
         updatedProposal((preProposals)=> preProposals.filter(proposal => proposal._id !== proposalId));
         setLoading(false);
         closeModal();
     })
     .catch(error => {
         console.error(error);
         toast.error("Something went wrong, Please try againis didn't work.");
         closeModal();
     });
  }

  return (
   <>
      <button 
         type="button"
         onClick={openModal} 
         className="bg-primary text-white font-medium px-6 py-2 rounded-full"
      >
         Withdraw
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
                  <div className="mt-2">
                  <div className="text-center">
                     <svg 
                        aria-hidden="true" 
                        className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                     <h3 className="mb-5 text-base font-normal">Are you sure you want to Withdraw?</h3>
                     <button 
                        onClick={withdrawHandler}
                        data-modal-hide="popup-modal" 
                        type="button" 
                        className="text-white bg-[#FF0000] focus:ring-0 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        { loading ? <LoadingIcon title="Withdrawing..."/> : "Yes, I'm sure" } 
                     </button>
                     <button 
                        data-modal-hide="popup-modal" 
                        onClick={closeModal}
                        type="button"
                        className="text-gray-500 bg-white focus:ring-0 focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5">
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

export default WithDraw