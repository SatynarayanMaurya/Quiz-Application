import React from 'react'

function Navbar() {
  return (
    <div className='h-[65px] shadow-sm flex items-center'>
      <div className='w-10/12 mx-auto flex justify-between items-center'>

            <img src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_6568572.png" className='w-[70px]' alt="" />

            <div className='flex gap-6 items-center'>
                <button className='font-bold cursor-pointer text-blue-600'>Home</button>
                <button className='font-semibold'>About</button>
                <button className='font-semibold'>Contact Us</button>
            </div>

            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='w-[40px] h-[40px] rounded-full' alt="" />
            </div>
      </div>
    </div>
  )
}

export default Navbar
