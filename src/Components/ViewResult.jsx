import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function ViewResult() {
    const { state } = useLocation();
    const navigate = useNavigate()
  return (
    <div  className='bg-[#48467D]'>

        <div className=' w-10/12 mx-auto flex justify-center items-center  h-[91vh]'>
            <div className='border w-[400px] h-[570px] rounded-lg flex items-center flex-col px-8  bg-[#1D1A5F] text-[#F9FAFD]'>
                <img src="https://png.pngtree.com/png-clipart/20231202/original/pngtree-golden-champion-cup-png-image_13754611.png" className='mt-10' width={250} alt="" />
                <h1  className='text-4xl font-semibold text-center mt-10 px-6  '>Congratulations</h1>
                <div className='mt-12 text-2xl flex flex-col gap-3 items-center'>
                    <p>Your Score</p>
                    <p>{state.correctAnswer} / {state.totalQuestion}</p>
                </div>
                <div onClick={()=>navigate("/")} className='flex justify-end cursor-pointer w-full'>
                    <button className='mt-8 cursor-pointer'>Go to home</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewResult
