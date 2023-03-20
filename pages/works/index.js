import Head from "next/head"
import TheDivArea from "@/components/TheDivArea"
import { BiSearchAlt } from "react-icons/bi"

const Work = () => {
  return (
    <>
      <Head>
        <title>Find Work - JobCareer</title>
      </Head>
      <main>
        <TheDivArea>
          <div className="work-area">          
            <div className="w-full pb-8">
              <form className="flex items-center justify-center">
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  className="w-[950px] rounded-l-lg border border-[#e4ebe4] outline-none focus:ring-0 focus:border-primary border-r-0" 
                  placeholder="Search for job..." 
                />
                <button type="submit" className="bg-primary p-[9.5px] rounded-r-lg">
                  <BiSearchAlt size='23' color='white' />
                </button>
              </form>
            </div>
            <div className="w-full">
              <div className="works grid grid-cols-2 gap-8 px-10">
                <div className="work">
                  <div className="title">
                    <div className="text">
                      <h3>Looking for an Experienced Shopify developer</h3>
                      <p>Fixed Price - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action flex items-center flex-col gap-3">
                      <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">Apply Now</button>
                      <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">See More</button>
                    </div>
                  </div>
                  <p>Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git...</p>
                  <ul>
                    <li>web design</li>
                    <li>html</li>
                    <li>css</li>
                  </ul>
                  <p>Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work">
                  <div className="title">
                    <div className="text">
                      <h3>Looking for an Experienced Shopify developer</h3>
                      <p>Fixed Price - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action">
                      <button>Apply Now</button>
                      <button>See More</button>
                    </div>
                  </div>
                  <p>Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git ...</p>
                  <ul>
                    <li>web design</li>
                    <li>html</li>
                    <li>css</li>
                  </ul>
                  <p>Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work">
                  <div className="title">
                    <div className="text">
                      <h3>Looking for an Experienced Shopify developer</h3>
                      <p>Fixed Price - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action">
                      <button>Apply Now</button>
                      <button>See More</button>
                    </div>
                  </div>
                  <p>Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git ...</p>
                  <ul>
                    <li>web design</li>
                    <li>html</li>
                    <li>css</li>
                  </ul>
                  <p>Proposals: <strong>Less than 5</strong></p>
                </div>
                <div className="work">
                  <div className="title">
                    <div className="text">
                      <h3>Looking for an Experienced Shopify developer</h3>
                      <p>Fixed Price - Intermediate - Budget: $80</p>
                    </div>
                    <div className="action">
                      <button>Apply Now</button>
                      <button>See More</button>
                    </div>
                  </div>
                  <p>Skills Needed: - At least 3 years of Shopify experience building and customizing Shopify themes - Experience in building Shopify app is a big plus - Know how to work with Git ...</p>
                  <ul>
                    <li>web design</li>
                    <li>html</li>
                    <li>css</li>
                  </ul>
                  <p>Proposals: <strong>Less than 5</strong></p>
                </div>
              </div>
            </div>
          </div>
        </TheDivArea>
      </main>
    </>
  )
}

export default Work