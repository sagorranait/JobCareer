const HomeTag = () => {
  const keywords = [ "Web Developer", "Web Designer", "Writer", "Fullstack", "Senior", "Team Lead", "Administration", "SQA", "Tester" ];

  return (
   <div className='mt-12'>
      <h2 className='badge-container text-black'>Popular Search</h2>
      <div className='mt-3 max-w-xl flex flex-wrap gap-3'>
         {keywords.map((item) => (<div 
            key={item} 
            className= 'bg-primary/10 font-light w-fit px-2 py-1 rounded-full text-primary text-sm cursor-pointer' 
         >
            <p className="text-primary">{item}</p>
         </div>))}
      </div>
   </div>
  )
}

export default HomeTag