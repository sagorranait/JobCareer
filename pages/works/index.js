import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { getUser } from "@/features";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import TheDivArea from "@/components/TheDivArea";
import LoadingIcon from "@/components/LoadingIcon";

const Work = () => {
  const user = useSelector(getUser);
  const [workData, setWorkData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/jobs`);
        const data = response.data;
        setTotalPages(Math.ceil(data.length / perPage));
        const newData = data.slice(0, perPage);
        setWorkData(newData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    const newPageNumber = currentPage + 1;
    setLoading(true);
    const response = await axios.get(`/api/jobs`);
    const data = response.data;
    const newData = data.slice((newPageNumber - 1) * perPage, newPageNumber * perPage);
    
    setLoading(false);
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

  const isLoadMoreDisabled = currentPage >= totalPages;

  return (
    <>
      <Head>
        <title>Find Work - JobCareer</title>
      </Head>
      <main>
        <TheDivArea>
          <div className="work-area mt-20 w-11/12 lg:w-11/12 xl:mt-40 xl:h-[800px] xl:w-auto xl:overflow-auto xl:p-4 2xl:p-4 2xl:mt-20 2xl:h-[800px] 2xl:overflow-auto">   
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
                        { user?.connects === '0' ? 
                          <button 
                            onClick={()=>toast.error("You don't have enough coins to apply.")} 
                            className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full"
                          >
                            Apply Now
                          </button> : 
                          <Link 
                            href={`/works/${_id}/apply`} 
                            className="bg-primary text-white font-medium px-4 lg:px-6 py-2 rounded-full"
                          >
                            Apply Now
                          </Link>
                        }
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
              </div>
              <div className="text-center mb-5">
                <button onClick={handleLoadMore} disabled={isLoadMoreDisabled} className="bg-primary text-white disabled:opacity-60 font-medium px-6 py-2 rounded-full my-5 lg:mb-0 lg:mt-12 xl:mb-5 2xl:mb-0">
                  {loading ? <LoadingIcon title="Loading..." /> : 'Load More Jobs'}
                </button>
              </div>
            </div>
          </div>
        </TheDivArea>
      </main>
    </>
  )
}

export default Work