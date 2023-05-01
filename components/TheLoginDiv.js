import Link from "next/link";
import { useRouter } from "next/router";

const TheLoginDiv = ({ title, subtitle, children }) => {
   const router = useRouter();

  return (
   <div className='w-11/12 md:w-4/5 lg:w-2/5 xl:w-1/2 2xl:w-2/5 mx-auto h-screen flex items-center justify-center'>
      <div className="w-full p-5 border border-silver rounded-xl text-center xl:w-3/5 xl:p-8">
         <h2 className="text-2xl lg:text-3xl xl:text-2xl font-bold leading-relaxed pb-2">{title}</h2>
         <p>{subtitle}</p>
         {children}

         {
            router.pathname === "/signin" ? 
            <p className="pb-2 text-sm md:text-base md:pb-4 pt-2">Don't have an JobCareer account? <Link href='/signup' className="text-primary font-semibold">Sign Up</Link></p> :
            <p className="pb-2 text-sm md:text-base md:pb-4 pt-2">Already have an account? <Link href='/signin' className="text-primary font-semibold">Log In</Link></p>
         }
      </div>
   </div>
  )
}

export default TheLoginDiv