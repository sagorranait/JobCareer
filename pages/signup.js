import Head from "next/head";
import TheLoginDiv from '@/components/TheLoginDiv';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState } from "react";
import LoadingIcon from "@/components/LoadingIcon";

const signup = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const { register, formState: { errors }, handleSubmit } = useForm();

   const onSignup = async (data) => {
      setLoading(true);
      const options = {
         method: "POST",
         headers : { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     }

     await fetch('/api/auth/signup', options)
      .then(res => res.json())
      .then((result) => {
            if(result) {
               setLoading(false);
               router.push('/signin');
            }
      });
   }

  return (
   <>
      <Head>
        <title>Create an Account - JobCareer</title>
      </Head>
      <main>
         <TheLoginDiv title='Create an Account' subtitle='Even though registration just takes a few seconds.'>
            <form onSubmit={handleSubmit(onSignup)} className="pt-5 pb-2 lg:pt-8 lg:pb-4">
            <ul className="w-full grid gap-5 grid-cols-2 pb-5 lg:gap-6 lg:pb-8">
               <li>
                  <input type="radio" id="client" name="type" {...register('type')} value="client" className="hidden peer" defaultChecked />
                  <label 
                     htmlFor="client" 
                     className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-secondary peer-checked:text-primary"
                     >                           
                        <div className="block">
                           <div className="w-full text-base font-semibold">I’m a client</div>
                        </div>
                  </label>
               </li>
               <li>
                  <input type="radio" id="freelancer" name="type" {...register('type')} value="freelancer" className="hidden peer" />
                  <label htmlFor="freelancer" className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-secondary peer-checked:text-primary">
                        <div className="block">
                           <div className="w-full text-base font-semibold">I’m a freelancer</div>
                        </div>
                  </label>
               </li>
            </ul>
            <div className="relative mb-5">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
               </svg>
               </div>
               <input 
                  type="text" 
                  id="user-address-icon" 
                  className={`border border-silver text-sm rounded-lg ${errors.username?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} block w-full pl-10 p-3`} 
                  placeholder={errors.username?.type !== 'required' ? 'Username' : 'Username is required !'} 
                  {...register("username", { required: true })}
               />
            </div>
            <div className="relative mb-5">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
               </svg>

               </div>
               <input 
                  type="email" 
                  id="email-address-icon" 
                  className={`border border-silver text-sm rounded-lg ${errors.email?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} block w-full pl-10 p-3`} 
                  placeholder={errors.email?.type !== 'required' ? 'name@company.com' : 'Email is required !'}
                  {...register("email", { required: true })}
               />
            </div>
            <div className="relative mb-5">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
               </svg>
               </div>
               <input 
                  type="password" 
                  id="password-address-icon" 
                  className={`border border-silver text-sm rounded-lg ${errors.password?.type !== 'required' ? 'focus:outline-primary focus:ring-primary focus:border-primary' : 'focus:outline-red focus:ring-red focus:border-red'} block w-full pl-10 p-3`} 
                  placeholder={errors.password?.type !== 'required' ? 'Password' : 'Password is required !'}
                  {...register("password", { required: true })}
               />
            </div>
            <button type="submit" className="text-white bg-primary font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">
               {loading ? <LoadingIcon title="Signing..." /> : 'Sign Up'}
            </button>
            </form>
         </TheLoginDiv>
      </main>
   </>
  )
}

export async function getServerSideProps({ req }){
   const session = await getSession({ req })
 
   if(session) {
     return { redirect : { destination: '/', permanent: false } }
   }
 
   return { props: { session } };
 }

export default signup