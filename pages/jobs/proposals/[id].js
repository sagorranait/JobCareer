import axios from 'axios';
import Head from "next/head";
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import TheDivArea from "@/components/TheDivArea";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ProposalSkleton from '@/components/skeleton/ProposalSkleton';

const proposals = () => {
   const router = useRouter();
   const openModal = () => setIsOpen(true);
   const closeModal = () => setIsOpen(false);
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [proposals, setProposals] = useState([]);
 
   useEffect(() => {
      const getProposal = async () => {
         setLoading(true);
         await axios.get(`/api/proposals?jobId=${router.query?.id}`)
         .then(async (res) => {
            setProposals(res.data);
            setLoading(false);
         })
         .catch(error => console.log(error));
      }
      getProposal();
   }, []);

   const truncateText = (text, maxLength, ending) => {
      if (maxLength == null) { maxLength = 100; }
      if (ending == null) { ending = "..."; }
  
      if (text.length > maxLength) {
        return text.substring(0, maxLength - ending.length) + ending;
      } else {
        return text;
      }
    }

  return (
   <>
      <Head>
         <title>Proposals - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
         <div className="w-4/5 lg:w-9/12 p-5 border border-silver rounded-lg mt-20 xl:mt-0">
            {loading ? 
               <div className="animate-pulse">
                  <div className="w-full lg:w-72 h-10 bg-secondary/20 border-[2px] border-white mb-5"></div>
               </div> : 
               <h3 className="text-base font-semibold pb-5 text-center sm:text-center sm:text-xl md:text-center lg:text-left lg:pb-8 lg:text-2xl">
                  Proposals ({proposals?.length || 0})
               </h3>
            }
            {
               loading ? 
               <>
                  <ProposalSkleton />
                  <ProposalSkleton />
               </>
               :
            proposals.length === 0 ?
               <p className='text-center text-lg text-axolotl'>No one hasn't sent any proposals.</p>:
            proposals.map((proposal) =>          
            <div key={proposal?._id} className="flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4">
               <p className="text-axolotl">Id: {proposal?.userId}</p>
               <p className="font-medium text-center py-2 lg:text-left lg:py-0">{truncateText(proposal?.coverLetter, 55)}</p>
               <p className="text-sm text-axolotl mr-3 lg:mr-3">Budget: ${proposal?.amount}</p>
               <div className="pt-2 pl-1 md:pt-3 lg:pt-0">
                  <button 
                     type="button" 
                     onClick={openModal}  
                     className="bg-primary text-white font-medium px-6 py-2 rounded-full block"
                  >See More</button>
               </div>
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
                           <p className='relative -top-2.5'>Proposal Details</p>
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
                              <div className=''>
                                 <p><b>Id:</b> {proposal?.userId}</p>
                                 <p className='py-3'><b>Given Budget:</b> ${proposal?.amount}</p>
                                 <p><b className='block pb-2'>Cover Letter:</b> {proposal?.coverLetter}</p>
                              </div>
                              <div className='mt-4'>
                                 <button 
                                    onClick={closeModal}
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
            </div>
            )}
         </div>
         </TheDivArea>
      </main>
   </>
  )
}

export async function getServerSideProps({ req }){
   const session = await getSession({ req })
 
   if(!session) {
     return { redirect : { destination: '/signin', permanent: false } }
   }
 
   return { props: { session } }
}

export default proposals