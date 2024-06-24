'use client'

import React from 'react'

function CommingSoonForm() {
    return (
        
<div>
      {/* Contact Form Layout */}
      <div className="absolute w-[381.32px] h-[387.59px] top-[166px] left-[876px] rounded">
      <form className="flex flex-col h-full  justify-between bg-transparent">
        <div className="space-y-8">
          <div className="relative">
            <input
              className="w-full pb-4 font-poppins bg-transparent text-[#ffffff] placeholder-[#ffffff]  border-b-[0.7px] border-[#ffffff]"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="relative">
            <input
              className="w-full pb-4 bg-transparent text-[#ffffff] placeholder-[#ffffff]  border-b-[0.7px] border-[#ffffff]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              className="w-full pb-4 bg-transparent text-[#ffffff] placeholder-[#ffffff]  border-b-[0.7px] border-[#ffffff]"
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div className="relative">
            <textarea
              className="w-full pb-8 bg-transparent text-[#ffffff] placeholder-[#ffffff]  border-b-[0.7px] border-[#ffffff]"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <button
className="self-center bg-white text-black rounded-md w-[180.55px] h-[44.99px] "
type="submit"
>
Submit
</button>

      </form>
    </div>
    </div>

    )
}

export default CommingSoonForm
