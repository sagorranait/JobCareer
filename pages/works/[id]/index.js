import TheDivArea from "@/components/TheDivArea"
import Head from "next/head"
import Link from "next/link"

const WorkDetails = () => {
  return (
   <>
      <Head>
         <title>Looking for an Experienced Shopify developer - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="details border border-silver rounded-lg flex items-start flex-col mt-[590px] w-11/12 md:w-10/12 md:mt-[390px] lg:mt-12 lg:flex-row xl:mt-0 lg:w-auto">
               <div className="leftArea flex-1 border-r border-silver">
                  <div className="titleArea border-b border-silver p-3 lg:p-6">
                     <h1 className="text-lg lg:text-xl font-medium">Looking for an Experienced Shopify developer</h1>
                     <p className="pt-2 lg:pt-5 text-[#5e6d55] text-sm"><b>Fixed Price</b> - Budget: $80 - Posted 4 minutes ago</p>
                  </div>
                  <div className="workDetails border-b border-silver p-3 lg:p-6">
                     <p className="text-black text-sm md:text-base text-justify lg:text-left">knowledgeable in WordPress platforms to build, customize, and maintain websites for clients. This may include tasks such as creating custom themes and plugins, optimizing site performance and security, integrating e-commerce functionality, and providing ongoing maintenance and support. Strong understanding of HTML, CSS, JavaScript, and PHP, as well as experience working with WordPress and related technologies.</p>
                  </div>
                  <div className="workType border-b border-silver px-3 py-2 lg:px-6 lg:py-4">
                     <p className="text-axolotl text-sm lg:text-base"><strong>Project Type: </strong> Complex project</p>
                  </div>
                  <div className="wrokSkills border-b border-silver p-3 lg:p-6">
                     <h3 className="text-base font-medium">Skills and Expertise</h3>
                     <ul className="flex items-center gap-3 pt-3 flex-wrap">
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">web design</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">html</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">css</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">JavaScript</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">jQuery</li>
                     </ul>
                  </div>
                  <div className="workActivity p-3 lg:p-6">
                     <h3 className="text-base font-medium pb-3">Activity on this job</h3>
                     <p className="pb-2">Proposals:  Less than 5</p>
                     <p className="pb-2">Interviewing: 0</p>
                     <p className="pb-2">Invites sent: 0</p>
                     <p>Unanswered invites: 0</p>
                  </div>
               </div>
               <div className="rightArea w-full lg:w-auto">
                  <div className="workAction border-b border-silver p-3 lg:p-6">
                     <Link
                        href='/works/01/apply' 
                        className="bg-primary text-white font-medium px-6 py-2 rounded-full w-full mb-5 lg:mb-10 inline-block text-center"
                     >
                           Apply Now
                     </Link>
                     <p className="pb-2">Send a proposal for: 6 Connects</p>
                     <p className="text-black">Available Connects: 52</p>
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
                        value='http://localhost:3000/works/01' 
                        readOnly
                        disabled
                     />
                     <button className="pt-2 text-primary hover:underline">Copy link</button>
                  </div>
               </div>
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export default WorkDetails