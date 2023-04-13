const TheDivArea = ({ children }) => {
  return (
   <div className="w-full lg:w-4/5 mx-auto h-screen">
      <div className="h-auto xl:h-screen flex items-center justify-center gap-5">
         {children}
      </div>
   </div>
  )
}

export default TheDivArea