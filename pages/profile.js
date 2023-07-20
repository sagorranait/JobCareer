import { useState, useEffect } from 'react';
import Head from "next/head";
import { getSession } from 'next-auth/react';

import { useForm } from "react-hook-form";
import TheDivArea from "@/components/TheDivArea";
import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton';
import UserImage from '@/components/profile/UserImage';
import UserStatus from '@/components/profile/UserStatus';

const profile = ({ data, plength, url }) => {
   const { 
      _id,
      type,
      about, 
      hourly, 
      imgURL, 
      address, 
      available,
      username,
      designation
   } = data;
   const [isShow, setIsShow] = useState(false);
   const [loading, setLoading] = useState(true);
   const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(false);
  }, []);

  const profileUpdateHandler = async (data) => {
      await fetch(`http://${url}/api/user/update?id=${_id}`, {
         method: 'PATCH', 
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json",
         },
      })
      .then(res => {
         if (res.ok) {
            toast.success('Successfully Updated!')
            setIsShow(true);
         }
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
                     <UserImage id={_id} name={username} url={imgURL} edited={isShow}/>
                     <form className="flex-1" onSubmit={handleSubmit(profileUpdateHandler)}>
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
                                 placeholder='Tagline'
                                 {...register("tagline")}
                                 defaultValue={designation || ''}
                                 className="border border-silver text-base rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> :
                              designation === null ? 
                              <p className='text-base'>Add your designation</p> :
                              <p className='text-base'>{designation}</p>                           
                              }
                           </div>
                           <div>
                              { isShow ?  
                              <p className='text-base'>$ <input 
                                 type="number" 
                                 name='hourlyrate' 
                                 placeholder='Hourly Rate' 
                                 {...register("hourlyrate")}
                                 defaultValue={hourly || ''}
                                 className="w-32 border border-silver rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> .00/hr</p> :
                              hourly === null ?
                              <p className='text-base'>Add your hourly price</p> :
                              <p className='text-base'>$ {hourly}.00/hr</p>
                              }
                           </div>
                           <div>
                              { isShow ? 
                              <input 
                                 type="text" 
                                 name='location' 
                                 placeholder='Location'
                                 defaultValue={address || ''}
                                 {...register("location")}
                                 className="border border-silver text-base rounded-lg focus:outline-primary focus:ring-primary focus:border-primary p-1 px-2"
                              /> :
                              address === null ?
                              <p className='text-base'>Add your  address</p> :
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
                                    {...register("available")}
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
                              {...register("description")}
                              defaultValue={about || ''}
                              maxLength={500}
                           ></textarea> : 
                           about === null ?
                           <p className='text-sm md:text-base lg:text-base'>Tell us about you shortly...</p> :
                           <p className='text-sm md:text-base lg:text-base'>{about}</p> 
                           }
                        </div>
                        <div className='pt-8 lg:pt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3'>
                           {type === 'client' ? 
                           <UserStatus title='Job' value='2'/> :
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
 
         return { props: { data, plength: proposals.length, url: baseUrl } }
      }
   } else {
      console.error('Email not found in session');
      return { props: { session } }
   }
 
}

export default profile