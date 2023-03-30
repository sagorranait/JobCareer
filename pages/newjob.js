import TheDivArea from "@/components/TheDivArea"
import Head from "next/head"

const newjob = () => {
  return (
   <>
      <Head>
         <title>Add New Job - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-1/2 p-8 border border-silver rounded-xl text-center">
               <h2 className="text-3xl font-bold leading-relaxed">Provide a New Job</h2>
               <p>Fill out all the fields with your dream project, <br /> and our freelancers will do the work.</p>
               <form className="pt-6">
                  <div className="text-left">
                     <label htmlFor="title" className="pl-1 mb-2 block">Job Title *</label>
                     <input 
                        className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none"
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter your job title." 
                     />
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                     <div className="text-left w-1/2 relative">
                        <label htmlFor="btype" className="pl-1 mb-2 block">Budget Type *</label>
                        <select className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none appearance-none" name="btype" id="btype">
                           <option value="fixed" defaultChecked>Fixed Price</option>
                           <option value="hourly">Hourly Price</option>
                        </select>
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           strokeWidth="1.5" 
                           stroke="currentColor" 
                           className="w-5 h-5 absolute right-3 top-12"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                     </div>
                     <div className="text-left w-1/2">
                        <label htmlFor="budget" className="pl-1 mb-2 block">Budget *</label>
                        <input 
                           className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none"
                           type="number" 
                           id="budget" 
                           name="budget" 
                           placeholder="$0 - $1000 or more" 
                        />
                     </div>
                  </div>
                  <div className="text-left mt-5">
                     <label htmlFor="description" className="pl-1 mb-2 block">Description</label>
                     <textarea 
                        className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none appearance-none" 
                        name="description" 
                        id="description" 
                        rows="4"
                     ></textarea>
                  </div>
                  <div className="text-left relative mt-3">
                        <label htmlFor="ptype" className="pl-1 mb-2 block">Project Type *</label>
                        <select className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none appearance-none" name="ptype" id="ptype">
                           <option value="complex">Complex</option>
                           <option value="intermediate">Intermediate</option>
                           <option value="normal">Normal</option>
                        </select>
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           strokeWidth="1.5" 
                           stroke="currentColor" 
                           className="w-5 h-5 absolute right-3 top-12"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                  </div>
               </form>
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export default newjob