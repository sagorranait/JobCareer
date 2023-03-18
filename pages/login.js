import Head from "next/head"
import TheLoginDiv from "@/components/TheLoginDiv"

const login = () => {
  return (
   <>
      <Head>
         <title>Log In to Your Account - JobCareer</title>
      </Head>
      <main>
         <TheLoginDiv title='Hey, Welcome Back !!!' subtitle='Use the email and password you chose when registering to your account.'>
            <form className="pt-8 pb-4">         
               <div class="relative mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                     <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                     <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  </div>
                  <input type="email" id="email-address-icon" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3" placeholder="Email"/>
               </div>
               <div class="relative mb-5">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400">
                     <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <input type="password" id="email-address-icon" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-3" placeholder="Password"/>
               </div>
            <button type="submit" class="text-white bg-primary font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">Sign Up</button>
            </form>
         </TheLoginDiv>
      </main>
   </>
  )
}

export default login