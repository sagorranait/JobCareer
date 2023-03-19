import Head from "next/head";
import Image from "next/image";
import expert from '../assets/expert.jpg';

const enterprise = () => {
  return (
    <>
      <Head>
        <title>Enterprise - JobCareer</title>
      </Head>
      <main>
          <div className="w-4/5 mx-auto h-screen">
            <div className="h-screen flex items-center justify-center gap-5">
              <div className="w-1/2">
                <h5 className="text-xl font-semibold">Enterprise Suite</h5>
                <h2 className="text-6xl font-extrabold py-3">
                  This is how 
                  <span className=""> we jetpack over</span> 
                  the skills gap.
                </h2>
                <p className="pt-2 pb-5">
                  Access the top 1% of talent on a full-service Enterprise platform, customized to meet your needs. This is how Flexibility works now.
                </p>
                <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">Talk to an expert</button>
              </div>
              <div className="w-1/2 flex items-center justify-end">
                  <Image 
                    className="w-[500px] h-[500px] object-cover rounded-full object-center shadow-2xl"
                    src={expert}
                    alt='expert-image'
                  />
              </div>
            </div>
          </div>
      </main>
    </>
  )
}

export default enterprise