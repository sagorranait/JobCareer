import TheDivArea from "@/components/TheDivArea"
import Head from "next/head"

const WorkDetails = () => {
  return (
   <>
      <Head>
         <title>Looking for an Experienced Shopify developer - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="details border border-silver rounded-lg flex items-start">
               <div className="leftArea flex-1 border-r border-silver">
                  <div className="titleArea border-b border-silver p-6">
                     <h1 className="text-xl font-medium">Looking for an Experienced Shopify developer</h1>
                     <p className="pt-5 text-axolotl text-sm"><b>Fixed Price</b> - Budget: $80 - Posted 4 minutes ago</p>
                  </div>
                  <div className="workDetails border-b border-silver p-6">
                     <p>knowledgeable in WordPress platforms to build, customize, and maintain websites for clients. This may include tasks such as creating custom themes and plugins, optimizing site performance and security, integrating e-commerce functionality, and providing ongoing maintenance and support. Strong understanding of HTML, CSS, JavaScript, and PHP, as well as experience working with WordPress and related technologies.</p>
                  </div>
                  <div className="workInfo"></div>
                  <div className="workType border-b border-silver px-6 py-4">
                     <p className="text-axolotl text-base"><strong>Project Type: </strong> Complex project</p>
                  </div>
                  <div className="wrokSkills border-b border-silver p-6">
                     <h3 className="text-base font-medium">Skills and Expertise</h3>
                     <ul className="flex items-center gap-3 pt-3 flex-wrap">
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">web design</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">html</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">css</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">JavaScript</li>
                        <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1">jQuery</li>
                     </ul>
                  </div>
                  <div className="workActivity p-6">
                     <h3 className="text-base font-medium pb-3">Activity on this job</h3>
                     <p className="pb-2">Proposals:  Less than 5</p>
                     <p className="pb-2">Interviewing: 0</p>
                     <p className="pb-2">Invites sent: 0</p>
                     <p>Unanswered invites: 0</p>
                  </div>
               </div>
               <div className="rightArea">
                  <div className="workAction border-b border-silver p-6">
                     <button className="bg-primary text-white font-medium px-6 py-2 rounded-full w-full mb-10">Apply Now</button>
                     <p className="pb-2">Send a proposal for: 6 Connects</p>
                     <p>Available Connects: 52</p>
                  </div>
                  <div className="aboutClient border-b border-silver p-6">
                     <h3 className="text-base font-medium pb-3">About the client</h3>
                     <p className="pb-3">Payment method not verified</p>
                     <p className="text-axolotl pb-3">
                        <span className="font-medium block text-black pb-1">1 job posted</span> 0% hire rate, 1 open job
                     </p>
                     <p className="text-axolotl">
                        <span className="font-medium block text-black pb-1">Tech & IT</span>Member since Sep 25, 2014
                     </p>
                  </div>
                  <div className="workLink p-6">
                     <h3 className="text-base font-medium pb-3">Job link</h3>
                     <input 
                        className="block bg-[#e4ebe4] text-axolotl border border-[#e4ebe4] rounded-lg cursor-not-allowed"
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