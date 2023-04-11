import Head from "next/head"
import TheDivArea from "@/components/TheDivArea"
import { BiSearchAlt } from "react-icons/bi"
import Link from "next/link"

const Work = () => {
  return (
    <>
      <Head>
        <title>Find Work - JobCareer</title>
      </Head>
      <main>
        <TheDivArea>
          <div className="work-area mt-[1250px] w-11/12 md:mt-[350px] lg:w-11/12 lg:mt-[450px] xl:mt-28 2xl:mt-0 xl:w-auto">          
            <div className="w-full py-5 xl:py-12">
              <form className="flex items-center justify-center">
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  className="w-[950px] rounded-l-xl border border-[#e4ebe4] outline-none focus:ring-0 focus:border-primary border-r-0 p-3 " 
                  placeholder="Search for job..." 
                />
                <button type="submit" className="bg-primary p-[13.5px] rounded-r-xl">
                  <BiSearchAlt size='23' color='white' />
                </button>
              </form>
            </div>
            <div className="w-full">
              <div className="works grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                <div className="work border border-silver p-5 rounded-xl">
                  <div className="title flex items-start justify-between pb-3 lg:pb-5 flex-col xl:flex-row">
                    <div className="text flex-1">
                      <h3 className="text-lg font-medium ">Looking for an Experienced Shopify developer</h3>
                      <p className="text-axolotl text-xs lg:text-sm pt-3"><b>Fixed Price</b> - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action flex items-center flex-row xl:flex-col gap-2 mt-3 xl:mt-0">
                      <button className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">Apply Now</button>
                      <Link href='/works/01' className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">See More</Link>
                    </div>
                  </div>
                  <p className="text-sm text-justify lg:text-base xl:text-left">Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git...</p>
                  <ul className="flex items-center gap-3 py-5 flex-wrap">
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">web design</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">html</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">css</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">JavaScript</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">jQuery</li>
                  </ul>
                  <p className="text-axolotl text-sm">Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work border border-silver p-5 rounded-xl">
                  <div className="title flex items-start justify-between pb-3 lg:pb-5 flex-col xl:flex-row">
                    <div className="text flex-1">
                      <h3 className="text-lg font-medium ">Looking for an Experienced Shopify developer</h3>
                      <p className="text-axolotl text-xs lg:text-sm pt-3"><b>Fixed Price</b> - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action flex items-center flex-row xl:flex-col gap-2 mt-3 xl:mt-0">
                      <button className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">Apply Now</button>
                      <Link href='/works/01' className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">See More</Link>
                    </div>
                  </div>
                  <p className="text-sm text-justify lg:text-base xl:text-left">Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git...</p>
                  <ul className="flex items-center gap-3 py-5 flex-wrap">
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">web design</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">html</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">css</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">JavaScript</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">jQuery</li>
                  </ul>
                  <p className="text-axolotl text-sm">Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work border border-silver p-5 rounded-xl">
                  <div className="title flex items-start justify-between pb-3 lg:pb-5 flex-col xl:flex-row">
                    <div className="text flex-1">
                      <h3 className="text-lg font-medium ">Looking for an Experienced Shopify developer</h3>
                      <p className="text-axolotl text-xs lg:text-sm pt-3"><b>Fixed Price</b> - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action flex items-center flex-row xl:flex-col gap-2 mt-3 xl:mt-0">
                      <button className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">Apply Now</button>
                      <Link href='/works/01' className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">See More</Link>
                    </div>
                  </div>
                  <p className="text-sm text-justify lg:text-base xl:text-left">Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git...</p>
                  <ul className="flex items-center gap-3 py-5 flex-wrap">
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">web design</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">html</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">css</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">JavaScript</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">jQuery</li>
                  </ul>
                  <p className="text-axolotl text-sm">Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work border border-silver p-5 rounded-xl">
                  <div className="title flex items-start justify-between pb-3 lg:pb-5 flex-col xl:flex-row">
                    <div className="text flex-1">
                      <h3 className="text-lg font-medium ">Looking for an Experienced Shopify developer</h3>
                      <p className="text-axolotl text-xs lg:text-sm pt-3"><b>Fixed Price</b> - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action flex items-center flex-row xl:flex-col gap-2 mt-3 xl:mt-0">
                      <button className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">Apply Now</button>
                      <Link href='/works/01' className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">See More</Link>
                    </div>
                  </div>
                  <p className="text-sm text-justify lg:text-base xl:text-left">Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git...</p>
                  <ul className="flex items-center gap-3 py-5 flex-wrap">
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">web design</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">html</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">css</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">JavaScript</li>
                    <li className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">jQuery</li>
                  </ul>
                  <p className="text-axolotl text-sm">Proposals: <strong>Less than 5</strong></p>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-primary text-white font-medium px-6 py-2 rounded-full my-5 lg:mb-0 lg:mt-12 xl:mb-5 2xl:mb-0">Load More Jobs</button>
              </div>
            </div>
          </div>
        </TheDivArea>
      </main>
    </>
  )
}

export default Work