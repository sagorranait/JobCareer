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
               <h3 className="text-2xl font-semibold pb-8 text-black">Submitted Proposals (6)</h3>
               <div className="flex items-center justify-between border-b border-silver pb-4 mb-4">
                  <p className="text-[#5e6d55]">Initiated Mar 20, 2023</p>
                  <Link href='/works/01' className="text-primary hover:underline font-medium">Looking for an Experienced Shopify developer</Link>
                  <p className="text-sm text-[#5e6d55]">General Profile</p>
                  <div>
                     <button className="bg-primary text-white font-medium px-6 py-2 rounded-full mr-3">Change Terms</button>
                     <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">Withdraw</button>
                  </div>
               </div>
            </div>
         </TheDivArea>  
         <label htmlFor="my-modal-4" className="btn">open modal</label>

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-4" className="modal-toggle" />
         <label htmlFor="my-modal-4" className="modal cursor-pointer">
         <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
         </label>
         </label>
      </main>
   </>
  )
}

export default proposals