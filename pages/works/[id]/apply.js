import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { getUser } from "@/features";
import { useRouter } from "next/router";
import withAuth from "../../../withAuth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TheDivArea from "@/components/TheDivArea";

const Applied = ({ jobBudget }) => {
   const router = useRouter();
   const user = useSelector(getUser);
   const [serviceFee, setServiceFee] = useState();
   const [receivedPrice, setReceivedPrice] = useState();
   const [jobBidPrice, setJobBidPrice] = useState(jobBudget);
   const { register, formState: { errors }, handleSubmit } = useForm();

   useEffect(() => {
      const fee = jobBidPrice * 0.2;
      const received = jobBidPrice - fee;
      
      setServiceFee(fee);
      setReceivedPrice(received)
   }, [jobBidPrice]);

   const onProposal = async (data) => {
      console.log(data);

      await axios.post('/api/proposals/apply', data)
      .then(res => {
         if (res.statusText === "OK") {            
            router.push('/proposals')
         }
      })
      .catch(error => {
       console.log(error);
      })
   }

  return (
   <>
      <Head>
         <title>Submit a Proposal - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <form onSubmit={handleSubmit(onProposal)} className="w-11/12 lg:w-3/4 xl:w-2/4 mt-8 xl:mt-0 ">
            <div className="py-5 mb-1 lg:mb-5 mt-8">
               <h3 className="text-xl font-medium mb-5 md:mb-2 lg:mb-5">Proposal Settings</h3>
               <label htmlFor="profile" className="text-sm md:text-base lg:mb-2 font-medium pr-5">Propose with a Specialized profile</label>
               <select 
                  id="profile" 
                  {...register("userId", { required: true })}
                  className="w-full md:w-60 border border-silver text-base rounded-lg focus:ring-silver focus:border-silver focus:outline-0 p-2 mt-3 lg:mt-0">
                  <option defaultValue value={user?.id}>General Profile</option>
               </select>
               <p className="py-2 text-sm md:text-base lg:py-3">This proposal requires 4 Connects. </p>
               <p className="text-sm md:text-base">When you submit this proposal, you'll have 47 Connects remaining.</p>
            </div>
            <div className="py-2">
               <div className="flex items-start lg:items-center justify-center gap-3 lg:gap-8 pb-5 flex-col md:flex-row">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold">Bid</h4>
                     <p className="text-[#5e6d55] text-sm md:text-base">Total amount the client will see on your proposal</p>
                  </div>
                  <div className="w-full md:w-auto">
                     <div className="relative">
                        <span className="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin"
                           placeholder={errors.amount?.type !== 'required' ? 'Enter your Bid amount' : 'Amount is required !'}
                           {...register("amount", { required: true })}
                           className={`border border-axolotl ${errors.amount?.type !== 'required' ? 'focus:outline-axolotl focus:ring-axolotl focus:border-axolotl' : 'focus:outline-red focus:ring-red focus:border-red'} p-2 font-medium rounded-lg text-right w-full md:w-auto`}
                           value={`${jobBidPrice}`}
                           onChange={(e)=>setJobBidPrice(e.target.value)}
                        />
                     </div>
                  </div>
               </div>
               <div className="flex items-start lg:items-center justify-center gap-3 lg:gap-8 pb-5 flex-col md:flex-row">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold"><span className="text-secondary">20%</span> JobCareer Service Fee</h4>
                  </div>
                  <div className="w-full md:w-auto">
                     <div className="relative">
                        <span className="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin" 
                           className="w-full lg:w-auto border-none text-right font-medium cursor-not-allowed bg-[#e4ebe44f] text-[#5e6d55] rounded-lg p-2" 
                           disabled
                           readOnly
                           value={serviceFee}
                        />
                     </div>
                  </div>
               </div>
               <div className="flex items-start lg:items-center justify-center gap-3 lg:gap-8 pb-5 flex-col md:flex-row">
                  <div className="flex-1">
                     <h4 className="text-base font-semibold">You’ll Receive</h4>
                     <p className="text-axolotl text-sm md:text-base">The amount you'll receive after service fees</p>
                  </div>
                  <div className="w-full md:w-auto">
                     <div className="relative">
                        <span className="absolute left-3 top-2.5 text-base font-medium">
                           $
                        </span>
                        <input 
                           type="text" 
                           id="website-admin" 
                           className="w-full lg:w-auto border border-[#d5e0d5] p-2 font-medium rounded-lg text-right cursor-not-allowed" 
                           disabled
                           readOnly
                           value={receivedPrice}
                           onChange={()=>{}}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="py-3 mt-0 lg:mt-3">
               <div>
                  <label htmlFor="coverLetter" className="block mb-2 text-base font-medium">Cover Letter</label>
                  <textarea 
                     id="coverLetter" 
                     placeholder={errors.coverLetter?.type !== 'required' ? '' : 'Cover Letter is required !'}
                     {...register("coverLetter", { required: true })}
                     rows="4" 
                     className={`block p-2.5 w-full rounded-lg border border-[#d5e0d5] ${errors.coverLetter?.type !== 'required' ? 'focus:outline-[#d5e0d5] focus:ring-[#d5e0d5] focus:border-[#d5e0d5]' : 'focus:outline-red focus:ring-red focus:border-red'}`}
                  ></textarea>
               </div>
            </div>
            <div className="pt-3 mb-5 lg:mb-0">
               <button type="submit" className="bg-primary text-white font-medium px-6 py-2 rounded-full" >Send for 4 Connects</button>
               <Link href='/works' className="text-primary font-medium pl-5 hover:underline">Cancel</Link>
            </div>
            </form>
         </TheDivArea>
      </main>
   </>
  )
}

export default withAuth(Applied);

export async function getServerSideProps({ req, query }) {
   const { id } = query;
   const baseUrl = req.headers.host;
   const singleJob = await fetch(`http://${baseUrl}/api/jobs/${id}`);
   const data = await singleJob.json();

   return {
      props: {
         jobBudget: data[0].budget
      },
    };
}