"use client";

import React,{useState, useEffect} from 'react'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import Timer from './Timer.js'
function DashboardHeader({minutes, seconds}) {
  

  
  const checkAndNext = () => {
    if (ans == qArr[ques].correctIndex) {
      setCorrectAns(correctAns+1)
    }
    setAns('')
    restart()
    setQues(ques+1)
  }

  return (
    <div className='home__header__text flex gap-20'>
        <div className='text-white text-2xl '><b>AI Generated Quiz</b><br/><p className='text-white opacity-50 text-sm mt-2'>Select the topics and start the quiz</p></div>

        <div className='w-60 h-16  rounded-xl bg-gradient-to-r from-[#363E52] to-[#2B3242] flex flex-row items-center space p-4'>
          <p className='text-white  '>Computer Networking <b/> Operating System</p>
          <button ><BsFillPlusSquareFill className='bg-white rounded-sm text-red-300'/></button>
        </div>

        <Timer minutes={minutes} seconds={seconds} />
      </div>
  )
}

export default DashboardHeader
