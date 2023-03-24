import Head from "next/head";
import TheDivArea from "@/components/TheDivArea";
import Link from "next/link";

const proposals = () => {
  return (
   <>
      <Head>
         <title>My Proposals - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-9/12 p-5 border border-silver rounded-lg">
               <h3 className="text-2xl font-semibold pb-8">Submitted Proposals (6)</h3>
               <div className="flex items-center justify-between border-b border-silver pb-4 mb-4">
                  <p className="text-axolotl">Initiated Mar 20, 2023</p>
                  <Link href='/works/01' className="text-primary hover:underline font-medium">Looking for an Experienced Shopify developer</Link>
                  <p className="text-sm text-axolotl">General Profile</p>
                  <div>
                     <button className="bg-primary text-white font-medium px-6 py-2 rounded-full mr-3">Change Terms</button>
                     <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">Withdraw</button>
                  </div>
               </div>
            </div>
         </TheDivArea>  
      </main>
   </>
  )
}

export default proposals