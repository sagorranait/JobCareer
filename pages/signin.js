import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import TheLoginDiv from "@/components/TheLoginDiv";
import { useState } from "react";
import LoadingIcon from "@/components/LoadingIcon";

const SignIn = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const { register, formState: { errors }, handleSubmit } = useForm();

   const onSignin = async (data) => {
      setLoading(true);
      const status = await signIn('credentials', {
         redirect: false,
         email: data.email,
         password: data.password,
         callbackUrl: "/"
     });

      if(status.ok) {
         const redirectUrl = window.sessionStorage.getItem('redirectUrl');
         if (redirectUrl) {
            router.push(redirectUrl);
            setLoading(false);
         } else {
            router.push(status.url);
            setLoading(false);
         }
      }
   }

  return (
   <>
      <Head>
         <title>Log In to Your Account - JobCareer</title>
      </Head>
      <main>
         <TheLoginDiv title='Hey, Welcome Back.' subtitle='Use the email and password you chose when registering to your account.'>
            <form onSubmit={handleSubmit(onSignin)} className="pt-8 pb-4">         
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
                     placeholder={errors.email?.type !== 'required' ? 'Email' : 'Email is required !'}
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

export default SignIn