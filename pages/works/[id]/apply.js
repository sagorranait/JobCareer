import Head from "next/head";
import TheDivArea from "@/components/TheDivArea";
import Link from "next/link";

const Applied = () => {
  return (
   <>
      <Head>
         <title>Submit a Proposal - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <form className="w-3/4">
            <div className="py-5 mb-5 mt-8">
               <h3 className="text-xl font-medium mb-5">Proposal Settings</h3>
               <label htmlFor="profile" class="mb-2 text-base font-medium pr-5">Propose with a Specialized profile</label>
               <select 
                  id="profile" 
                  class="w-60 border border-silver text-base rounded-lg focus:ring-silver focus:border-silver p-2">
                  <option defaultValue value='id'>General Profile</option>
               </select>
               <p className="py-3">This proposal requires 4 Connects. </p>
               <p className="text-black">When you submit this proposal, you'll have 47 Connects remaining.</p>
            </div>
            <div className="py-2">
               <p className="text-xl font-medium mb-8">What is the full amount you'd like to bid for this job?</p>
               <div className="flex items-center justify-center gap-8 pb-5">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold">Bid</h4>
                     <p className="text-[#5e6d55]">Total amount the client will see on your proposal</p>
                  </div>
                  <div>
                     <div class="relative">
                        <span class="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin" 
                           class="border border-axolotl p-2 font-medium rounded-lg text-right" 
                           value='200.00'
                           onChange={()=>{}}
                        />
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-center gap-8 pb-5">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold"><span className="text-secondary">20%</span> JobCareer Service Fee</h4>
                  </div>
                  <div>
                     <div class="relative">
                        <span class="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin" 
                           class="border-none text-right font-medium cursor-not-allowed bg-[#e4ebe44f] text-[#5e6d55] rounded-lg p-2" 
                           disabled
                           readOnly
                           value='20.00'
                           onChange={()=>{}}
                        />
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-center gap-8 pb-5">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold">You’ll Receive</h4>
                     <p className="text-axolotl">The amount you'll receive after service fees</p>
                  </div>
                  <div>
                     <div class="relative">
                        <span class="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin" 
                           class="border border-[#d5e0d5] p-2 font-medium rounded-lg text-right cursor-not-allowed" 
                           disabled
                           readOnly
                           value='180.00'
                           onChange={()=>{}}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="py-3 mt-3">
               <h3 className="text-xl font-medium mb-5">Additional Details</h3>
               <div>
                  <label htmlFor="coverLetter" class="block mb-2 text-base font-medium">Cover Letter</label>
                  <textarea 
                     id="coverLetter" 
                     rows="4" 
                     class="block p-2.5 w-full rounded-lg border border-[#d5e0d5] focus:ring-[#d5e0d5] focus:border-[#d5e0d5]"
                  ></textarea>
               </div>
            </div>
            <div className="pt-3">
               <button type="submit" className="bg-primary text-white font-medium px-6 py-2 rounded-full" >Send for 4 Connects</button>
               <Link href='/works' className="text-primary font-medium pl-5 hover:underline">Cancel</Link>
            </div>
            </form>
         </TheDivArea>
      </main>
   </>
  )
}

export default Applied