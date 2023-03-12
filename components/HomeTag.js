import TheBadge from "./TheBadge";

const HomeTag = () => {
  const keywords = [ "Web Developer", "Web Designer", "Writer", "Fullstack", "Senior", "Team Lead", "Administration", "SQA", "Tester" ];
  return (
   <div className='mt-12'>
      <h2 className='badge-container'>Popular Search</h2>
      <div className='mt-3 max-w-xl flex flex-wrap gap-3'>
         {keywords.map((item) => (<TheBadge key={item} className='badge'>{item}</TheBadge>))}
      </div>
   </div>
  )
}

export default HomeTag