import Link from "next/link";
import { useRouter } from "next/router";

const TheLoginDiv = ({ title, subtitle, children }) => {
   const router = useRouter();

  return (
   <div className='w-4/5 mx-auto h-screen flex items-center justify-center'>
      <div className="w-1/3 p-8 border border-[#d5e0d5] rounded-xl text-center">
         <h2 className="text-3xl font-bold leading-relaxed text-black">{title}</h2>
         <p className="text-black">{subtitle}</p>
         {children}

         {
            router.pathname === "/login" ? 
            <p className="pb-4 pt-2 text-black">Don't have an JobCareer account? <Link href='/signup' className="text-primary font-semibold">Sign Up</Link></p> :
            <p className="pb-4 pt-2 text-black">Already have an account? <Link href='/login' className="text-primary font-semibold">Log In</Link></p>
         }
      </div>
   </div>
  )
}

export default TheLoginDiv