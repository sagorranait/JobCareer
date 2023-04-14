import Badge from "./Badge";

const HomeTag = () => {
  const keywords = [ "Web Developer", "Web Designer", "Writer", "Fullstack", "Senior", "Team Lead", "Administration", "SQA", "Tester" ];

  return (
   <div className='mt-8 xl:mt-12'>
      <h2 className='badge-container'>Popular Search</h2>
      <div className='mt-3 max-w-xl flex flex-wrap gap-3 justify-center xl:justify-start'>
         {keywords.map((item) => (
         <Badge key={item} className='badge'>
            {item}
         </Badge>
         ))}
      </div>
   </div>
  )
}

export default HomeTag