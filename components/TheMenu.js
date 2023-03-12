import Link from "next/link"

const TheMenu = () => {
  return (
   <nav className='w-full h-14 fixed z-[999]'>
      <ul className='w-4/5 mx-auto flex gap-5 h-full items-center'>
         <li className='flex-auto'>
            <div className="flex items-center gap-10">
               <Link href='/' className="font-bold text-2xl">Job<span className='text-secondary'>Career</span></Link>
               <ul className="left-menu flex items-center gap-8 pt-1">
                  <li>
                     <Link href='/works'>Find Work</Link>
                  </li>
                  <li>
                     <Link href='/whyus'>Why Us?</Link>
                  </li>
                  <li>
                     <Link href='/enterprise'>Enterprise</Link>
                  </li>
               </ul>
            </div>
         </li>
         <li>
            <Link href='/login'>Log In</Link>
         </li>
         <li>
            <Link className='bg-primary text-white font-medium px-6 py-2 rounded-full'href='/signup' >Sign Up</Link>
         </li>
      </ul>
   </nav>
  )
}

export default TheMenu