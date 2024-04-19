"use client";

import React,{useState} from 'react'
const qArr = [
  {
    "question": " If cos 9x = sin x and 9x < 90°, then the value of tan 5x is:",
    "options": [
      "1/√3",
      "√3",
      "1",
      "0"
    ],
    "correctIndex": '2'
  },
  {
    "question": "In ∆ ABC, right-angled at B, AB = 24 cm, BC = 7 cm. The value of tan C is:",
    "options": [
      "12/7",
      "24/7",
      "20/7",
      "7/24"
    ],
    "correctIndex": '1'
  },
  {
    "question": "If cos(x + y) = 0, then sin(x - y) can be reduced to:",
    "options": [
      "cos y",
      "cos 2y",
      "sin x",
      "sin 2x"
    ],
    "correctIndex": '1'
  },
  {
    "question": "The value of the expression [cosec (75° + θ) - sec (15° - θ) - tan (55° + θ) + cot (35° - θ)] is:",
    "options": [
      "-1",
      "0",
      "1",
      "3/2"
    ],
    "correctIndex": '1'
  },
  {
    "question": "The value of (tan 1° tan 2° tan 3° … tan 89°) is:",
    "options": [
      "0",
      "1",
      "2",
      "1/2"
    ],
    "correctIndex": '1'
  }
]
function QuizSection({startQuiz, endQuiz, quesArr=qArr }) {

    const [selected, setSelected] = useState(-1);
    const [question, setQuestion] = useState(-1);
    const [result, setResult] = useState(0);

    

      const checkAndNext = () => {
        if (ans == quesArr[ques].correctIndex) {
          setCorrectAns(correctAns+1)
        }
        setAns('')
        restart()
        setQues(ques+1)
      }
    
      const handleOptionClick = (index) =>{ 
        setSelected(index)

      }
      const handleStartQuiz = () => {
        setQuestion(0);
        startQuiz();
      }
      
      const handlePreviousClick =() => {
        setQuestion(question-1)
        setSelected(-1);

        startQuiz();
      }

      const handleNextClick =() => {
        if(quesArr[question].correctIndex == selected )
        {
            setResult(result+1);
        }
        setQuestion(question+1)
        setSelected(-1);
        startQuiz();

      }

      if(question === quesArr.length){
        endQuiz()
        return(
            <div style={{backgroundColor: 'rgba(3, 25, 72, 0.60)'}} className='w-[70vw] text-white p-5 h-[50vh] rounded-xl flex flex-col items-center'>
                    <div className='text-2xl font-bold'>Result of Your Quiz: {result} points<br/>
            

            </div>
            </div>
        )
      }
  return (
    <div style={{backgroundColor: 'rgba(3, 25, 72, 0.60)'}} className='w-[70vw] relative text-white p-5 h-[50vh] rounded-xl flex flex-col items-center'>
        {
        question === -1  ?
            (<div className='text-3xl font-bold flex flex-col items-center w-full h-full relative pt-10'>Start Your Quiz <br/>
            <button onClick={handleStartQuiz} className='p-4 rounded-xl bg-[#0D8A7C] absolute bottom-10'>Start</button> 

            </div>) : 
            (
            <>
            <div className='text-xl mt-5'>{quesArr[question].question}</div>
            <div className='py-3 px-2 bg-slate-100 text-black text-xl absolute right-2 rounded-lg'>{quesArr[question].difficultyLevel}</div>
            <div className='flex flex-row gap-8 mt-20'>
            {
                quesArr[question].options.map((option,index) => {
                    return(
                        selected === index ?

                        
                        <button  onClick={() => handleOptionClick(index)} className={`hover:border border-blue-600 p-4 rounded-xl bg-gradient-to-r from-[#2a303f] to-[#1c212d] items-center space p-4`}>
                        <p className='text-white  '>{option}</p>
                        </button>
                        :
                        <button  onClick={() => handleOptionClick(index)} className={`hover:border border-blue-600 p-4 rounded-xl bg-gradient-to-r from-[#363E52] to-[#2B3242] items-center space p-4`}>
                            <p className='text-white  '>{option}</p>
                        </button>
                    
                    )
                })
            }

            </div>
            <div className='flex justify-between flex-row mt-5 w-full p-5'>
            <button onClick={handlePreviousClick} className='p-4 rounded-xl bg-[#0D8A7C]'>Previous</button> 
            <button onClick={handleNextClick} className='p-4 rounded-xl bg-[#0D8A7C]'>Next</button>
            </div>
            </>
            )    
        }
    </div>
  )
}

export default QuizSection
