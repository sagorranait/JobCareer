import Head from "next/head"
import Link from "next/link"

const signup = () => {
  return (
   <>
      <Head>
        <title>Create an Account - JobCareer</title>
      </Head>
      <main>
         <div className='w-4/5 mx-auto h-screen flex items-center justify-center'>
            <div className="w-1/3 p-8 border border-[#d5e0d5] rounded-xl text-center">
               <h2 className="text-3xl font-bold leading-relaxed">Create an Account</h2>
               <p>Even though registration just takes a few seconds.</p>
               <form className="pt-8 pb-4">
               <ul class="grid w-full gap-6 md:grid-cols-2 pb-8">
                  <li>
                     <input type="radio" id="client" name="userStatus" value="client" class="hidden peer" defaultChecked />
                     <label for="client" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-secondary peer-checked:text-primary">                           
                           <div class="block">
                              <div class="w-full text-lg font-semibold">I’m a client, hiring for a project</div>
                           </div>
                     </label>
                  </li>
                  <li>
                     <input type="radio" id="freelancer" name="userStatus" value="freelancer" class="hidden peer" />
                     <label for="freelancer" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-secondary peer-checked:text-primary">
                           <div class="block">
                              <div class="w-full text-lg font-semibold">I’m a freelancer, looking for work</div>
                           </div>
                     </label>
                  </li>
               </ul>
               <div class="relative mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                     <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <input type="text" id="email-address-icon" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3" placeholder="Username"/>
               </div>
               <div class="relative mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                     <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                     <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  </div>
                  <input type="email" id="email-address-icon" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3" placeholder="name@company.com"/>
               </div>
               <div class="relative mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                     <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <input type="password" id="email-address-icon" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3" placeholder="********"/>
               </div>
               <button type="submit" class="text-white bg-primary font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">Sign Up</button>
               </form>
               <p className="pb-4">Already have an account? <Link href='/login' className="text-primary font-semibold">Log In</Link></p>
            </div>
         </div>
      </main>
   </>
  )
}

export default signup