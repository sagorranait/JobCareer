import Link from "next/link";
import Head from "next/head";
import TheDivArea from "@/components/TheDivArea";

const jobs = () => {

  return (
   <>
      <Head>
         <title>My Jobs - JobCareer</title>
      </Head>
      <main>
      <TheDivArea>
         <div className="w-4/5 lg:w-9/12 p-5 border border-silver rounded-lg">
            <h3 className="text-base font-semibold pb-5 text-center sm:text-center sm:text-xl md:text-center lg:text-left lg:pb-8 lg:text-2xl">
               Submitted Jobs (6)
            </h3>
            <div className="flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4">
               <p className="text-axolotl">Mar 20, 2023</p>
               <Link href='/works/01' className="text-primary hover:underline font-medium text-center py-2 lg:text-left lg:py-0">
                  Looking for an Experienced Shopify developer
               </Link>
               <p className="text-sm text-axolotl">Budget: $80</p>
               <div className="pt-1 pl-1 md:pt-3 lg:pt-0">
                  <Link href='/jobs/proposals/01' className="bg-primary text-white font-medium px-6 py-2 rounded-full block">Proposals (5)</Link>
               </div>
            </div>
         </div>
         </TheDivArea>
      </main>
   </>
  )
}

export default jobs