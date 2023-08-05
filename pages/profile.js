import axios from 'axios';
import Head from "next/head";
import { useState } from 'react';
import { getSession } from 'next-auth/react';

import { useForm } from "react-hook-form";
import TheDivArea from "@/components/TheDivArea";
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton';
import UserImage from '@/components/profile/UserImage';
import UserStatus from '@/components/profile/UserStatus';
import { toast } from 'react-hot-toast';

const profile = ({ data, plength, loading, jobLenght }) => {
   const [isShow, setIsShow] = useState(false);
   const [userData, setUserData] = useState(data);
   const { register, formState: { errors }, handleSubmit } = useForm();

  const profileUpdateHandler = async (data) => {  
   axios.patch(`/api/user/update?userId=${userData?._id}`, data)
   .then(_ => {
      setUserData(preData =>{
         return { 
            ...preData, 
            about: data.about,
            hourly: data.hourly,
            address: data.address,
            available: data.available,
            designation: data.designation,
         }
      });
      toast.success('Successfully Updated!');
      setIsShow(!isShow);
   })
   .catch(error => {
      console.log(error);
      toast.error(`${error}`)
   });
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
                     <UserImage id={userData?._id} name={userData?.username} url={userData?.imgURL} available={userData?.available} edited={isShow}/>
                     <form className="flex-1" onSubmit={handleSubmit(profileUpdateHandler)}>
                        <div className='flex items-center justify-between pb-2.5 flex-col gap-3 md:flex-row md:px-20 lg:gap-0 lg:flex-row lg:px-0'>
                           <h2 className='text-xl lg:text-2xl font-medium'>{userData?.username}</h2>
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
                                 name='designation'
                                 placeholder={errors.designation?.type !== 'required' ? 'Tagline' : 'Tagline is required !'}
                                 {...register("designation", { required: true })}
                                 defaultValue={userData?.designation || ''}
                                 className={`border border-silver text-base ${errors.designation?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} rounded-lg p-1 px-2`}
                              /> :
                              userData?.designation === null ? 
                              <p className='text-base'>Add your designation</p> :
                              <p className='text-base'>{userData?.designation}</p>                           
                              }
                           </div>
                           <div>
                              { isShow ?  
                              <p className='text-base'>$ <input 
                                 type="number" 
                                 name='hourly'
                                 placeholder={errors.hourly?.type !== 'required' ? 'Hourly Rate' : 'Hourly Rate is required !'}
                                 {...register("hourly", { required: true })}
                                 defaultValue={userData?.hourly || ''}
                                 className={`w-32 border border-silver rounded-lg ${errors.hourly?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} p-1 px-2`}
                              /> .00/hr</p> :
                              userData?.hourly === null ?
                              <p className='text-base'>Add your hourly price</p> :
                              <p className='text-base'>$ {userData?.hourly ? userData?.hourly : '0'}.00/hr</p>
                              }
                           </div>
                           <div>
                              { isShow ? 
                              <input 
                                 type="text" 
                                 name='address'
                                 placeholder={errors.address?.type !== 'required' ? 'Location' : 'Location is required !'}
                                 defaultValue={userData?.address || ''}
                                 {...register("address", { required: true })}
                                 className={`border border-silver text-base rounded-lg ${errors.address?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} p-1 px-2`}
                              /> :
                              userData?.address === null ?
                              <p className='text-base'>Add your  address</p> :
                              <p className='text-base'>{userData?.address}</p>
                              }
                           </div>
                           <div>
                              { isShow ? 
                              <p className='text-base'>
                                 <span 
                                    className='border border-silver p-1 px-3 rounded-full text-sm mr-2 disabled:bg-silver/20 disabled:text-[#d9d9d9]' 
                                    disabled={!userData?.available}
                                 >{userData?.available === 'false' ? 'Unavailable' : 'Available Now'}</span> 
                                 <select 
                                    className="border border-silver rounded-lg focus:ring-0 outline-none" 
                                    name="available"
                                    {...register("available")}
                                 >
                                 <option value="true" defaultChecked>On</option>
                                 <option value="false">Off</option>
                              </select>
                              </p> :
                              <p className='text-base'>
                                 <span 
                                    className='border border-silver p-1 px-3 rounded-full text-sm mr-2 disabled:bg-silver/20 disabled:text-[#d9d9d9]' 
                                    disabled={!userData?.available}
                                 >{userData?.available === 'false' ? 'Unavailable' : 'Available Now'}</span> 
                                 {userData?.available === 'false' ? '' : 'off'}
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
                              name="about" 
                              id="description" 
                              rows="6"
                              placeholder={errors.about?.type !== 'required' ? 'Description' : 'Description is required !'}
                              {...register("about", { required: true })}
                              defaultValue={userData?.about || ''}
                              maxLength={500}
                           ></textarea> : 
                           !userData?.about ?
                           <p className='text-sm md:text-base lg:text-base text-axolotl'>
                              Tell us about you shortly, By edit your profile.
                           </p> :
                           <p className='text-sm md:text-base lg:text-base'>{userData?.about}</p> 
                           }
                        </div>
                        <div className='pt-8 lg:pt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3'>
                           {userData?.type === 'client' ? 
                           <UserStatus title='Jobs' value={jobLenght}/> :
                           <UserStatus title='Proposals' value={plength}/>
                           }
                           <UserStatus title='Invited' value='5'/>
                           <UserStatus title='Hired' value='2'/>
                           <UserStatus title='Completed' value='2'/>
                        </div>
                     </form>
                  </div>
               </div> :
               <ProfileSkeleton/> 
            }
         </TheDivArea>
      </main>
   </>
  )
}

export async function getServerSideProps({ req }){
   let loading = false;
   const session = await getSession({ req })
   const email = session?.user?.email;
 
   if(!session) {
     return { redirect : { destination: '/signin', permanent: false } }
   }

   if (email) {
      const baseUrl = req.headers.host;
      loading = true;
      try {
        const response = await fetch(`http://${baseUrl}/api/user/${email}`);
        const data = await response.json();
        if (data._id) {
         if (data.type === 'client') {
            const res = await fetch(`http://${baseUrl}/api/jobs?userId=${data._id}`);
            const jobs = await res.json();
            loading = false;
            return { props: { data, jobLenght: jobs.length, loading } };            
         }else{
            const res = await fetch(`http://${baseUrl}/api/proposals/${data._id}`);
            const proposals = await res.json();
            loading = false;
            return { props: { data, plength: proposals.length, loading } };
         }
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Email not found in session');
    }
  
    return { props: { session, loading } };
}

export default profile