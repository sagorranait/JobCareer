const HomeCard = ({ jobTitle, jobNumber, position }) => {
  return (
   <div className={`statCard rounded-3xl shadow-2xl p-7 bg-white relative left-[${position}%]`}>
      <div>
         <span className='text-2xl font-bold'>{jobNumber} </span>
         <span>Job offers</span>
      </div>
      <p className='font-light text-gray-500'>In {jobTitle}</p>
   </div>
  )
}

export default HomeCard