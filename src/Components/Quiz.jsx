import React, { useEffect, useState } from 'react'
// import {question} from "./questions"
import { questions } from './questions'
import { useNavigate } from 'react-router-dom';
function Quiz() {

  const allQuestions = questions;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const navigate = useNavigate()

  
  const handleOptionSelect = (option) => {
    if (isAnswered) return; 

    setSelectedOption(option);
    setIsAnswered(true);
  };

  const nextButton = ()=>{
    if(isAnswered){
      if(selectedOption.is_correct){
        setCorrectAnswer(correctAnswer+1)
      }
    }
    if(currentIndex < allQuestions.length - 1){
      setSelectedOption(null)
      setIsAnswered(false)
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(() => {
    if (isAnswered && currentIndex === allQuestions.length - 1) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + (selectedOption.is_correct ? 1 : 0));
    }
  }, [isAnswered, currentIndex]);
  const optionLabels = ["A", "B", "C", "D"];

  const viewResult = ()=>{
    if (isAnswered) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + (selectedOption.is_correct ? 1 : 0));
    }
    console.log("Correct answer is : ",correctAnswer)
    navigate('/result', { state: { correctAnswer, totalQuestion:allQuestions.length } });
  }


  return (
    <div className='bg-[#48467D]'>

        <div className=' w-10/12 mx-auto flex justify-center items-center  h-[91vh]'>
          <div className='border w-[600px] h-[570px] rounded-lg  px-8  bg-[#1D1A5F] text-[#F9FAFD]'>
            
            <p className='text-xl font-semibold text-center mt-10 px-6 h-[120px] '>{allQuestions[currentIndex].description}</p>
            <div className='mt-8  flex flex-col gap-6 '>

              {
                allQuestions[currentIndex].options.map((option,index)=>{
                  let bgColor = "bg-white"; 
                  if (isAnswered) {
                    if (option === selectedOption) {
                      bgColor = option.is_correct ? "bg-green-500 text-white" : "bg-red-500 text-white";
                    } else if (option.is_correct) {
                      bgColor = "bg-green-500 text-white"; 
                    }
                  }
                  return  <div key={option.id} className='flex relative'>
                            <p className=' absolute  font-semibold py-2 rounded-2xl px-4 bg-orange-400 border border-r border-t-0 border-l-0 border-b-0  '>{optionLabels[index]}.</p>
                            
                            <label htmlFor={`${option.id}`}  className={`${bgColor} w-full cursor-pointer pl-12  transition-all duration-all text-[#1D1A5F]   py-2 text-center rounded-2xl font-semibold`}>{option.description} <input className='hidden' type='radio' name='option' id={option.id} value={option.description} onChange={()=>handleOptionSelect(option)}/></label>
                          </div>
                })
              }
            </div>

            <div className='flex justify-between items-center mt-10 pb-4'>
              <p className='px-4 py-2 rounded-lg bg-white text-black font-semibold cursor-pointer'>{currentIndex+1}/{allQuestions.length}</p>
              {
                allQuestions.length-1 === currentIndex ? <button onClick={viewResult} className='px-6 py-2 rounded-lg bg-[#3EB8D4] font-semibold cursor-pointer'>View Result</button> :<button onClick={nextButton} className='px-6 py-2 rounded-lg bg-[#3EB8D4] font-semibold cursor-pointer'>Next</button>
              }
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Quiz
