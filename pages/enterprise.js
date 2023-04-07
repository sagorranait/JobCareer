import Head from "next/head";
import Image from "next/image";
import TheDivArea from "@/components/TheDivArea";
import expert from '../assets/expert.jpg';

const enterprise = () => {
  return (
    <>
      <Head>
        <title>Enterprise - JobCareer</title>
      </Head>
      <main>
          <TheDivArea>
              <div className="flex items-center justify-between flex-col gap-8 lg:gap-0 lg:flex-row xl:gap-0 xl:flex-row">
                <div className="w-11/12 text-center lg:text-left xl:text-left xl:w-1/2">
                  <h5 className="text-base lg:text-lg xl:text-xl font-semibold">Enterprise Suite</h5>
                  <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-extrabold py-3">This is how we jetpack over the skills gap.</h2>
                  <p className="pt-2 pb-5">
                    Access the top 1% of talent on a full-service Enterprise platform, customized to meet your needs. This is how Flexibility works now.
                  </p>
                  <button className="bg-primary text-white font-medium px-6 py-2 rounded-full">Talk to an expert</button>
                </div>
                <div className="w-11/12 xl:w-1/2 flex items-center justify-center lg:justify-end xl:justify-end">
                    <Image 
                      priority
                      className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] object-cover rounded-full object-center shadow-2xl"
                      src={expert}
                      alt='expert-image'
                    />
                </div>
              </div>
          </TheDivArea>
      </main>
    </>
  )
}

export default enterprise