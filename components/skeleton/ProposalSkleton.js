import React from 'react'

function ProposalSkleton() {
  return (
  <div className="animate-pulse flex items-center justify-center lg:justify-between border-b border-silver pb-4 mb-4 flex-wrap md:flex-col lg:flex-row lg:gap-4">
    <div className="w-full lg:w-40 h-7 bg-secondary/20 border-[2px] border-white"></div>
    <div className="w-full lg:w-80 h-7 bg-secondary/20 border-[2px] border-white"></div>
    <div className="w-full lg:w-28 h-7 bg-secondary/20 border-[2px] border-white"></div>

    <div className="text-center pt-3 flex items-center gap-3 lg:pt-0 lg:text-left">
        <div className="w-full lg:w-36 h-10 bg-secondary/20 font-medium px-6 py-2 rounded-full"></div>
        <div className="w-full lg:w-36 h-10 bg-secondary/20 font-medium px-6 py-2 rounded-full"></div>
    </div>
  </div>
  )
}

export default ProposalSkleton