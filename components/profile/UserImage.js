import { useState, Fragment } from 'react';
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import LoadingIcon from '../LoadingIcon';

function UserImage({ id, name, url, available, edited }) {
   const [photo, setPhoto] = useState(null);
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const { register, handleSubmit } = useForm();
   const [uploadedImage, setUploadedImage] = useState(null);

   const getUserPhoto = (event) => {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();

      reader.onloadend = () => {
         setPhoto(reader.result); 
      };

      if (file) {
         reader.readAsDataURL(file);
      }
   }

   const updatePhotoHandler = async (data) => {
      setLoading(true);
      const uploadedImage = data.userPhoto[0];
      const formData = new FormData();
      formData.append("image", uploadedImage);

      await fetch(`https://api.imgbb.com/1/upload?key=8bc71f5c88870561f133c9caf6282517`, {
         method: 'POST',
         body: formData
      })
      .then(res => res.json())
      .then( async (result) => {
         setUploadedImage(result.data?.url);
         axios.patch(`/api/user/update?userId=${id}`, { imgURL: result.data?.url })
         .then((_) => {
            toast.success("Photo Updated Successfully.");
            setLoading(false);
            setIsOpen(false);
         })
         .catch(error => {
            console.error(error);
            toast.error(`Server Error: ${error}`);
         })
      })
      .catch(error => {
         console.error(error);
         toast.error(`Image Server Error: ${console.error(error)}`);
      });

      setPhoto(null);
    }
    

  return (
    <>
         <div className="relative">
            {  !url ? 
            <div 
               className='w-[112px] h-[112px] bg-silver border-[1px] border-primary rounded-full flex items-center justify-center text-5xl font-semibold' 
            >
               S
            </div> : 
               <Image
                  alt={name}
                  src={uploadedImage || url}
                  width={112}
                  height={112}
                  className="rounded-full w-[112px] h-[112px] object-cover object-top border-[1px] border-primary"
               />
            }
            {available === 'false' ? 
            <div className="w-4 h-4 bg-silver border-[2px] border-white rounded-full absolute bottom-2 right-2"/>:
            <div className="w-4 h-4 bg-primary border-[2px] border-white rounded-full absolute bottom-2 right-2"/>
            }
            {edited && 
               <button  
                  type="button"
                  onClick={() => setIsOpen(true)}  
                  className="absolute top-0 left-0 border-[2px] border-white bg-silver p-1 rounded-full"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#108a00" className="w-4 h-4">
                     <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
               </button>
            }
         </div>
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
                  <p className='relative -top-2.5'>Change Photo</p>
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
                  <form onSubmit={handleSubmit(updatePhotoHandler)}>
                     <div className="flex items-center py-5 gap-5 flex-col lg:flex-row">
                     <div className="shrink-0">
                        <Image
                           alt={name}
                           src={photo ? photo : url}
                           width={112}
                           height={112}
                           className="h-28 rounded-full object-cover object-top border border-primary"
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
                           cursor-pointer"
                           {...register("userPhoto")}
                           onChange={getUserPhoto}
                        />
                     </label>
                     </div>
                     <div className='mt-3'>
                        <button
                           data-modal-hide="popup-modal" 
                           type="submit" 
                           className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                           {loading ? <LoadingIcon title="Updating..."/> : 'Update Photo'}
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

export default UserImage