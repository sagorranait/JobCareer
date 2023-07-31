import Head from "next/head";
import Link from "next/link";
import copy from 'copy-to-clipboard';
import { getUser } from "@/features";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import TheDivArea from "@/components/TheDivArea";
import { BsCheckAll } from "react-icons/bs";


const WorkDetails = ({ jobData, jobId }) => {
   const user = useSelector(getUser);
   const {
      _id,
      title,
      skills,
      budget,
      budgetType,
      description,
      projectType,
   } = jobData;
   
  return (
   <>
      <Head>
         <title>{title} - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="details border border-silver rounded-lg flex items-start flex-col mt-20 w-11/12 md:w-10/12 lg:mt-20 lg:flex-row xl:mt-0 lg:w-auto">
               <div className="leftArea flex-1 border-r border-silver">
                  <div className="titleArea border-b border-silver p-3 lg:p-6">
                     <h1 className="text-lg lg:text-xl font-medium">{title}</h1>
                     <p className="pt-2 lg:pt-5 text-[#5e6d55] text-sm capitalize">
                        <b>{budgetType} Price</b> - Budget: ${budget}.00 - Posted 4 minutes ago.
                     </p>
                  </div>
                  <div className="workDetails border-b border-silver p-3 lg:p-6">
                     <p className="text-black text-sm md:text-base text-justify lg:text-left">
                        {description}
                     </p>
                  </div>
                  <div className="workType border-b border-silver px-3 py-2 lg:px-6 lg:py-4">
                     <p className="text-axolotl text-sm lg:text-base capitalize">
                        <strong>project type: </strong> {projectType} project
                     </p>
                  </div>
                  <div className="wrokSkills border-b border-silver p-3 lg:p-6">
                     <h3 className="text-base font-medium">Skills and Expertise : </h3>
                     <ul className="flex items-center gap-3 pt-3 flex-wrap">
                        {skills.map((skill, index) => 
                           <li key={index} className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">{skill}</li>
                        )}
                     </ul>
                  </div>
                  <div className="workActivity p-3 lg:p-6">
                     <h3 className="text-base font-medium pb-3">Activity on this job : </h3>
                     <p className="pb-2">Proposals:  Less than 5</p>
                     <p className="pb-2">Interviewing: 0</p>
                     <p className="pb-2">Invites sent: 0</p>
                     <p>Unanswered invites: 0</p>
                  </div>
               </div>
               <div className="rightArea w-full lg:w-auto">
                  <div className="workAction border-b border-silver p-3 lg:p-6">
                     { (user?.connects === '0' || jobId === _id) ? 
                        <>
                           <button 
                              onClick={()=>{
                                 if (jobId === _id) {
                                    toast.success("Already applied.");               
                                 }else{
                                    toast.error("You don't have enough coins to apply.");
                                 }
                              }} 
                              className="bg-primary text-white font-medium px-6 py-2 rounded-full w-full mb-4 lg:mb-4 inline-block text-center">
                              Apply Now
                           </button>
                           { jobId === _id && <p className="flex items-center gap-1 mb-2">
                              <BsCheckAll className="text-xl text-[#49e1fb]"/>
                              <span className="font-medium text-[#49e1fb]">Applied</span>
                           </p> }                           
                        </>:
                        <Link
                           href={`/works/${_id}/apply`} 
                           className="bg-primary text-white font-medium px-6 py-2 rounded-full w-full mb-5 lg:mb-10 inline-block text-center"
                        >
                           Apply Now
                        </Link>
                     }                                          
                     <p className="pb-2">Send a proposal for: 4 Connects</p>
                     <p className="text-black">Available Connects: {user?.connects || 0}</p>
                  </div>
                  <div className="aboutClient border-b border-silver p-3 lg:p-6">
                     <h3 className="text-base font-medium pb-3">About the client</h3>
                     <p className="pb-3 text-[#5e6d55]">Payment method not verified</p>
                     <p className="text-axolotl pb-3">
                        <span className="font-medium block pb-1 text-[#000]">1 job posted</span> 0% hire rate, 1 open job
                     </p>
                     <p className="text-axolotl">
                        <span className="font-medium block pb-1 text-[#000]">Tech & IT</span>Member since Sep 25, 2014
                     </p>
                  </div>
                  <div className="workLink p-3 lg:p-6">
                     <h3 className="text-base font-medium pb-3">Job link</h3>
                     <input 
                        className="block bg-[#e4ebe4] text-[#5e6d55] border border-[#e4ebe4] p-2 rounded-lg cursor-not-allowed"
                        type="text"
                        name="jobLink"
                        value={`http://localhost:3000/works/${_id}`} 
                        readOnly
                        disabled
                     />
                     <button
                        onClick={()=>{
                           copy(`http://localhost:3000/works/${_id}`);
                           toast.success('Copied.');
                        }}
                        className="pt-2 text-primary hover:underline">
                           Copy link
                     </button>
                  </div>
               </div>
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export default WorkDetails;

export async function getServerSideProps({ req, query }) {
   const { id } = query;
   const baseUrl = req.headers.host;
   const singleJob = await fetch(`http://${baseUrl}/api/jobs?id=${id}`);
   const datas = await singleJob.json();
   const jobResult = datas.filter(data => data._id === id);
   // Get Proposals by the JobId
   const jobId = await fetch(`http://${baseUrl}/api/proposals?jobId=${id}`);
   const result = await jobId.json();

   // If no job data found, return 404 page
   if (!jobResult || jobResult.length === 0) {
      return {
       notFound: true,
      };
   }

   return {
      props: {
         jobData: jobResult[0],
         jobId: result[0]?.jobId || 0,
      },
    };
}