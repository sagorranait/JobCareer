import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { getUser } from "@/features";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import TheDivArea from "@/components/TheDivArea";
import ProposalSkleton from "@/components/skeleton/ProposalSkleton";

const jobs = () => {
  const user = useSelector(getUser);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   const getProposal = async () => {
   setLoading(true);
   await axios.get(`/api/jobs?id=${user?.id}`)
   .then(async (res) => {
      setJobs(res.data);
      setLoading(false);
   })
   .catch(error => console.log(error));
   }

   getProposal();
  }, []);

  return (
   <>
      <Head>
         <title>My Jobs - JobCareer</title>
      </Head>
      <main>
      <TheDivArea>
         <div className="w-4/5 lg:w-9/12 p-5 border border-silver rounded-lg mt-20 xl:mt-0">
            {loading ? 
               <div className="animate-pulse">
                  <div className="w-full lg:w-72 h-10 bg-secondary/20 border-[2px] border-white mb-5"></div>
               </div> : 
               <h3 className="text-base font-semibold pb-5 text-center sm:text-center sm:text-xl md:text-center lg:text-left lg:pb-8 lg:text-2xl">
                  Submitted Jobs ({jobs?.length || 0})
               </h3>
            }
            {
               loading ? 
               <>
                  <ProposalSkleton />
                  <ProposalSkleton />
                  <ProposalSkleton />
                  <ProposalSkleton />
               </>
               :
               jobs.map((job) => 
               <div key={job?._id} className="flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4">
                  <p className="text-axolotl">Initiated {job?.date}</p>
                  <Link href={`/works/${job?._id}`} className="w-96 text-primary hover:underline font-medium text-center py-2 lg:text-left lg:py-0">
                     {job?.title}
                  </Link>
                  <p className="w-28 text-sm text-axolotl">Budget: ${job?.budget}</p>
                  <div className="pt-1 pl-1 md:pt-3 lg:pt-0">
                     <Link 
                        href={`/jobs/proposals/${job?._id}`} 
                        className="bg-primary text-white font-medium px-6 py-2 rounded-full block">
                           Proposals
                     </Link>
                  </div>
               </div>
            )}
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

export default jobs