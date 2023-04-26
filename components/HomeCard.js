const HomeCard = ({ jobTitle, jobNumber }) => {
  return (
   <div className={`statCard w-full rounded-3xl shadow-2xl p-5 bg-white relative xl:right-10 xl:w-80 xl:p-7`}>
      <div>
         <span className='text-2xl font-bold text-black'>{jobNumber} </span>
         <span className="text-black">Job offers</span>
      </div>
      <p className='font-light text-gray-500'>In {jobTitle}</p>
   </div>
  )
}

export default HomeCard