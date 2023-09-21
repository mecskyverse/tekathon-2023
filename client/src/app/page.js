"use client";
import Image from 'next/image'
import {useState, useEffect} from 'react'
import SideNav from '@/components/SideNav';
import DashboardHeader from '@/components/DashboardHeader'
import QuizSection from '@/components/QuizSection'
export default function Home() {
  const [quizStart, setQuizStart] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  var timer;

 
  useEffect(()=>{
    if(quizStart){
      timer=setInterval(()=>{
        setSeconds(seconds+1)
        if(seconds===59){
          setMinutes(minutes+1)
          setSeconds(0)
        }
      },1000)
      return ()=>clearInterval(timer)
    }
  })

  const restart=()=>{
    setSeconds(0)
    setMinutes(0)
  }

  function startQuiz() {
    setQuizStart(true)
    restart()
  }
  function endQuiz() {
    setQuizStart(false)
    restart();
  }
  return (
    <main className="flex flex-row h-screen w-screen bg-[#000A1F] home-screen items-center">
      <div className='w-[20vw] h-full rounded-lg '>
        <SideNav/>
      </div>
      <div className='flex flex-col items-center h-full w-[80vw]'>

      <span className='mt-20'><DashboardHeader minutes={minutes} seconds={seconds} /></span>
      <span className='mt-10'><QuizSection startQuiz={startQuiz} endQuiz={endQuiz}/></span>
      </div>

    </main>
  )
}
