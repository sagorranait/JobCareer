import Link from "next/link";
import Head from "next/head";
import TheDivArea from "@/components/TheDivArea";
import WithDraw from "@/components/WithDraw";
import ChangeTerms from "@/components/ChangeTerms";
import { getSession } from "next-auth/react";

const proposals = () => {
  return (
   <>
      <Head>
         <title>My Proposals - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-4/5 lg:w-9/12 p-5 border border-silver rounded-lg mt-20 xl:mt-0">
               <h3 className="text-base font-semibold pb-5 text-center sm:text-center sm:text-xl md:text-center lg:text-left lg:pb-8 lg:text-2xl">
                  Submitted Proposals (6)
               </h3>
               <div 
                  className="flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4"
               >
                  <p className="text-axolotl">Initiated Mar 20, 2023</p>
                  <Link href='/works/01' className="text-primary hover:underline font-medium text-center py-2 lg:text-left lg:py-0">
                     Looking for an Experienced Shopify developer
                  </Link>
                  <p className="text-sm text-axolotl">General Profile</p>
                  <div className="text-center pt-3 lg:pt-0 lg:text-left">
                     <ChangeTerms/>
                     <WithDraw/>
                  </div>
               </div>
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export async function getServerSideProps({ req }){
   const session = await getSession({ req })
 
   if(!session) {
     return { redirect : { destination: '/signin', permanent: false } }
   }
 
   return { props: { session } }
}

export default proposals