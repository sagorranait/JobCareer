const ProfileSkeleton = () => {
  return (
   <div className="w-full flex items-center justify-center animate-pulse">
      <div className="w-11/12 mt-24 mb-3 p-3 md:mt-32 lg:mb-0 lg:w-10/12 lg:p-8 xl:mt-0 xl:w-2/3 border border-secondary/10 rounded-xl">
         <div className="flex items-center flex-col justify-center gap-5 lg:items-start lg:justify-start lg:flex-row lg:gap-14 xl:gap-20">
            <div className="relative">
               <div className="w-[112px] h-28 rounded-full bg-secondary/20"></div>
               <div className="w-4 h-4 bg-secondary/20 border-[2px] border-white rounded-full absolute bottom-2 right-2"/>
               <div className="absolute top-0 left-0 border border-white p-1 rounded-full bg-secondary/20 w-7 h-7"></div>
            </div>
            <div className="flex-1">
               <div className='flex items-center justify-between pb-2.5 flex-col gap-3 md:flex-row md:px-20 lg:gap-0 lg:flex-row lg:px-0'>
                  <div className="rounded-full bg-secondary/20 h-9 w-40"></div>
                  <div className="rounded-full bg-secondary/20 h-9 w-28"></div>
               </div>
               <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:justify-items-start md:px-20 lg:justify-items-start lg:grid-cols-2 gap-2 lg:px-0'>
                  <div className="rounded-full bg-secondary/20 h-6 w-32"></div>
                  <div className="rounded-full bg-secondary/20 h-6 w-24"></div>
                  <div className="rounded-full bg-secondary/20 h-6 w-40"></div>
                  <div className="rounded-full bg-secondary/20 h-6 w-40"></div>
               </div>
               <div className='pt-5 lg:pt-8 text-center lg:text-left'>
                  <div className="rounded-full bg-secondary/20 h-6 w-28"></div>              
                  <div className="rounded-full bg-secondary/20 h-6 w-10/12 mb-4 mt-3"></div>
                  <div className="rounded-2xl bg-secondary/20 h-40 w-1/1"></div>                 
               </div>
               <div className='pt-8 lg:pt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3'>
                  <div className='text-center lg:text-left'>
                     <div className="rounded-full bg-secondary/20 h-10 w-8 mb-1"></div>
                     <div className="rounded-full bg-secondary/20 h-5 w-24"></div>
                  </div>
                  <div className='text-center lg:text-left'>
                     <div className="rounded-full bg-secondary/20 h-10 w-8 mb-1"></div>
                     <div className="rounded-full bg-secondary/20 h-5 w-16"></div>
                  </div>
                  <div className='text-center lg:text-left'>
                     <div className="rounded-full bg-secondary/20 h-10 w-8 mb-1"></div>
                     <div className="rounded-full bg-secondary/20 h-5 w-14"></div>
                  </div>
                  <div className='text-center lg:text-left'>
                     <div className="rounded-full bg-secondary/20 h-10 w-8 mb-1"></div>
                     <div className="rounded-full bg-secondary/20 h-5 w-24"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ProfileSkeleton