import { useEffect } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import TheDivArea from "@/components/TheDivArea";
import expert from '../assets/expert.jpg';
import { useRef } from "react";
import { toast } from "react-hot-toast";

const enterprise = () => {
  const ep = useRef();
  const pr2 = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      pr2.current = gsap
        .timeline()
        .from("#en-title", { delay: 0.2, y: 50, opacity: 0, duration: 0.3 })
        .from("#en-subtitle", { y: 50, opacity: 0, duration: 0.3 })
        .from("#en-button", { x: -100, opacity: 0, duration: 0.5, ease: "power2", })
        .from("#en-image", { y: -100, opacity: 0, duration: 0.5, ease: "power2", })
    }, ep);
    
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Enterprise - JobCareer</title>
      </Head>
      <main>
          <TheDivArea>
              <div ref={ep} className="flex items-center justify-between flex-col gap-8 lg:gap-0 lg:flex-row xl:gap-0 xl:flex-row mt-32 lg:mt-60 xl:mt-0">
                <div className="w-11/12 text-center lg:text-left xl:text-left xl:w-1/2">
                  <h5 id="en-title" className="text-base lg:text-lg xl:text-xl font-semibold">Enterprise Suite</h5>
                  <h2 id="en-title" className="text-3xl xl:text-5xl 2xl:text-6xl font-extrabold py-3">This is how we jetpack over the skills gap.</h2>
                  <p id="en-subtitle" className="pt-2 pb-5">
                    Access the top 1% of talent on a full-service Enterprise platform, customized to meet your needs. This is how Flexibility works now.
                  </p>
                  <button 
                    id="en-button" 
                    className="bg-primary text-white font-medium px-6 py-2 rounded-full"
                    onClick={toast.success("Coming Soon ...")}
                  >
                    Talk to an expert
                  </button>
                </div>
                <div className="w-11/12 xl:w-1/2 flex items-center justify-center lg:justify-end xl:justify-end">
                    <Image 
                      id="en-image"
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