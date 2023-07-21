import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import TheDivArea from "@/components/TheDivArea";

const Work = ({ jobData, perPage }) => {
  const [workData, setWorkData] = useState(jobData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = async () => {
    const newPageNumber = currentPage + 1;
    const res = await fetch(`/api/jobs`);
    const data = await res.json();
    const newData = data.slice((newPageNumber - 1) * perPage, newPageNumber * perPage);

    setWorkData([...workData, ...newData]);
    setCurrentPage(newPageNumber);
  };

  const truncateText = (text, maxLength, ending) => {
    if (maxLength == null) { maxLength = 100; }
    if (ending == null) { ending = "..."; }

    if (text.length > maxLength) {
      return text.substring(0, maxLength - ending.length) + ending;
    } else {
      return text;
    }
  }

  return (
    <>
      <Head>
        <title>Find Work - JobCareer</title>
      </Head>
      <main>
        <TheDivArea>
          <div className="work-area mt-20 w-11/12 lg:w-11/12 xl:mt-40 2xl:mt-10 xl:w-auto">   
            <div className="w-full">
              <div className="works grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                {workData.map(({
                  _id,
                  title, 
                  skills,
                  budget, 
                  budgetType, 
                  description, 
                  projectType, 
                }) => (
                  <div key={_id} className="work border border-silver p-5 rounded-xl">
                    <div className="title flex items-start justify-between pb-3 lg:pb-5 flex-col xl:flex-row">
                      <div className="text flex-1">
                        <h3 className="text-xl font-medium ">{title}</h3>
                        <p className="text-axolotl text-xs lg:text-sm pt-3 capitalize">
                          <b>{budgetType} Price</b> - {projectType} - Budget: ${budget}.00
                        </p>
                      </div>
                      <div className="action flex items-center flex-row xl:flex-col gap-2 mt-3 xl:mt-0">
                        <Link href={`/works/${_id}/apply`} className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">
                          Apply Now
                        </Link>
                        <Link href={`/works/${_id}`} className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full">
                          See More
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-justify lg:text-base xl:text-left">{truncateText(description, 175)}</p>
                    <ul className="flex items-center gap-3 py-5 flex-wrap">
                      {skills.map((skill, index) => 
                        <li key={index} className="bg-[#f2f7f2] text-[#001e00] px-3 py-1 text-sm lg:text-base">{skill}</li>
                      )}
                    </ul>
                    <p className="text-axolotl text-sm">Proposals: <strong>Less than 5</strong></p>
                  </div>
                ))}
              {/* <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li>
                    <button
                      disabled={page === 1}
                      onClick={() => handlePageChange(page - 1)}
                      class="page-link"
                    >
                      Previous
                    </button>
                  </li>
                  {Array(totalPages).fill().map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handlePageChange(index + 1)}
                        class={`page-link ${page === index + 1 ? "active" : ""}`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      disabled={page === totalPages}
                      onClick={() => handlePageChange(page + 1)}
                      class="page-link"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav> */}
              </div>
              <div className="text-center mb-5">
                <button onClick={handleLoadMore} className="bg-primary text-white font-medium px-6 py-2 rounded-full my-5 lg:mb-0 lg:mt-12 xl:mb-5 2xl:mb-0">
                  Load More Jobs
                </button>
              </div>
            </div>
          </div>
        </TheDivArea>
      </main>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const perPage = 4;
  const baseUrl = req.headers.host;
  const jobRes = await fetch(`http://${baseUrl}/api/jobs`);
  const data = await jobRes.json();

  return {
    props: {
      jobData: data.slice(0, perPage),
      perPage,
    },
  };
}


export default Work