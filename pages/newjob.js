import { useRef, useState } from "react";
import Head from "next/head";
import TheDivArea from "@/components/TheDivArea";

const newjob = () => {
   const skillRef = useRef(null);
   const [skills, setSkills] = useState([]);
   const [inputLength, setInputLength] = useState({title: '', description: '', skills: ''});

   const skillsHandler = (event) => {
      if (event.key === 'Tab') {
         event.preventDefault();
         const newSkill = event.target.value.trim();
         if (newSkill !== '') {
            setSkills(prevSkills => [...prevSkills, newSkill]);
         }
         event.target.value = '';
         skillRef.current;
      }
   }

   const titleHandler = (event) => {
      if (inputLength.title.length > 50) {
         return;
      }
      setInputLength({ ...inputLength, title: event.target.value });
   }

   // console.log(inputLenght);

  return (
   <>
      <Head>
         <title>Add New Job - JobCareer</title>
      </Head>
      <main>
         <TheDivArea>
            <div className="w-1/2 p-8 pt-6 border border-silver rounded-xl text-center mt-14">
               <h2 className="text-3xl font-bold leading-relaxed">Provide a New Job</h2>
               <p>Fill out all the fields with your dream project, <br /> and our freelancers will do the work.</p>
               <form className="pt-6">
                  <div className="text-left">
                     <label htmlFor="title" className="pl-1 mb-2 flex items-center justify-between">
                        <span>Job Title *</span>
                        <span className="pr-2 text-sm text-axolotl font-medium">{inputLength.title.length}/50</span>
                     </label>
                     <input 
                        className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none"
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter your job title." 
                        onChange={titleHandler}
                        maxLength={50}
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
                     <label htmlFor="description" className="pl-1 mb-2 block">Description *</label>
                     <textarea 
                        className="w-full border border-silver p-3 rounded-lg focus:ring-0 outline-none" 
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
                  <div className="text-left mt-5">
                     <label htmlFor="skills" className="pl-1 mb-2 block">Skills and Expertise *</label>
                     <div className="w-full border border-silver p-3 rounded-lg flex items-center gap-2 flex-wrap">
                        <ul className="flex items-center gap-2 flex-wrap">
                           {skills.map(skill => <li className="bg-primary/10 font-medium w-fit px-2 py-1 rounded-full text-primary text-sm">{skill}</li>)}
                        </ul>
                        <div>
                           <input 
                              className="focus:ring-0 outline-none"
                              type="text" 
                              id="skills" 
                              name="skills" 
                              placeholder="Skills and Expertise" 
                              onKeyDown={skillsHandler}
                              ref={skillRef}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='mt-5 text-left'>
                     <button 
                        data-modal-hide="popup-modal" 
                        type="submit" 
                        className="text-white bg-primary focus:ring-0 focus:outline-none font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Submit
                     </button>
                     <button 
                        data-modal-hide="popup-modal" 
                        type="reset"
                        className="focus:ring-0 focus:outline-none text-sm font-medium px-5 py-2.5">
                           No, cancel
                        </button>
                  </div>
               </form>
            </div>
         </TheDivArea>
      </main>
   </>
  )
}

export default newjob