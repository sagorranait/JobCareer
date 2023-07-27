import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getUser } from "@/features";
import { useSelector } from "react-redux";
import WithDraw from "@/components/WithDraw";
import { getSession } from "next-auth/react";
import TheDivArea from "@/components/TheDivArea";
import ChangeTerms from "@/components/ChangeTerms";
import ProposalSkleton from "@/components/skeleton/ProposalSkleton";

const proposals = () => {
  const user = useSelector(getUser);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
   const getProposal = async () => {
   setLoading(true);
   await axios.get(`/api/proposals?id=${user?.id}`)
   .then(async (res) => {
      await axios.get(`/api/jobs?id=${res.data?.userId}`)
      .then(jobData => {
         setJobs(jobData.data);
         setProposals(res.data);
         setLoading(false);
      })
      .catch(error => console.log(error))
   })
   .catch(error => console.log(error));
   }

   getProposal();
  }, []);

  return (
   <>
      <Head>
         <title>My Proposals - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-4/5 lg:w-9/12 p-5 border border-silver rounded-lg mt-20 xl:mt-0">
               {loading ? 
               <div className="animate-pulse">
                  <div className="w-full lg:w-72 h-10 bg-secondary/20 border-[2px] border-white mb-5"></div>
               </div> : 
               <h3 className="text-base font-semibold pb-5 text-center sm:text-center sm:text-xl md:text-center lg:text-left lg:pb-8 lg:text-2xl">
                  Submitted Proposals ({proposals?.length || 0})
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
                  proposals.map((proposal) => {
                     const matchedJob = jobs.find((job) => job._id === proposal.jobId);
                     return (
                        <div key={proposal._id} className="flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4">
                           <p className="text-axolotl">Initiated {matchedJob?.date}</p>
                           <Link href={`/works/${matchedJob?._id}`} className="w-96 text-primary hover:underline font-medium text-center py-2 lg:text-left lg:py-0">
                              {matchedJob?.title}
                           </Link>
                           <p className="w-28 lg:text-left text-sm text-axolotl">Bid Price : ${proposal.amount}</p>
                           <div className="text-center pt-3 lg:pt-0 lg:text-left">
                              <ChangeTerms
                                 data={proposal}
                                 matchedJob={matchedJob._id}
                                 updatedProposal= {setProposals}
                              />
                              <WithDraw 
                                 proposalId= {proposal?._id}
                                 updatedProposal= {setProposals}
                              />
                           </div>
                        </div>
                     );                  
                  })
               }
               
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export async function getServerSideProps({ req }){
   const session = await getSession({ req });

   if(!session) {
     return { redirect : { destination: '/signin', permanent: false } }
   } 

   return { props: { session } }
}

export default proposals
