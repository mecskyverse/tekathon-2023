'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import OpenAI from 'openai'
import QuizSection from '@/components/QuizSection';
import { FaArrowLeft } from "react-icons/fa";
const page = ({ params }) => {
    const [quizStart, setQuizStart] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const osQuestions = [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Control Panel Unit", "Computer Processing Unit", "Coding Processing Unit"],
            difficultyLevel: "easy",
            correctIndex: "0"
        },
        {
            question: "Which of the following is NOT a function of an operating system?",
            options: ["Memory management", "Process management", "Installing software", "Running web browsers"],
            difficultyLevel: "medium",
            correctIndex: "3"
        },
        {
            question: "What is the difference between a kernel and a shell in an operating system?",
            options: [
                "Kernel is the core, shell provides user interface",
                "Kernel is for hardware, shell is for software",
                "They are the same thing",
                "Shell is the core, kernel provides user interface"
            ],
            difficultyLevel: "medium",
            correctIndex: "0"
        },
        {
            question: "What is multitasking in an operating system?",
            options: [
                "The ability to run multiple programs at the same time",
                "The ability to access multiple files at once",
                "The ability to connect to multiple networks",
                "The ability to use multiple monitors"
            ],
            difficultyLevel: "easy",
            correctIndex: "0"
        },
        {
            question: "What is a virtual machine?",
            options: [
                "A software program that simulates a computer system",
                "A physical computer with a lot of processing power",
                "A type of computer virus",
                "A cloud-based storage solution"
            ],
            difficultyLevel: "medium",
            correctIndex: "0"
        },
        {
            question: "What is the purpose of a device driver?",
            options: [
                "Allows the operating system to communicate with hardware devices",
                "Provides a user interface for specific hardware",
                "Increases the processing speed of the computer",
                "Protects the computer from malware"
            ],
            difficultyLevel: "easy",
            correctIndex: "0"
        },
    ];

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        setLoading(true)
        const newPrompt = { prompt: `Generate 5 quiz question array of objects in JSON format related to ${params.subject.replace('%20', ' ')} subject where you have follow this format {quizQuestions : [{ question: question text, options: array of strings with 4 choices , difficultyLevel: a string representing if the question is hard, easy, medium, correctIndex: it tells the correct option index from options}, ...]} the questions should be randomly sorted based on their difficulty` }
        const response = await fetch("/api/completion", {
            method: "POST",
            headers: {
                "Content-type": "application/json"  
            },
            body: JSON.stringify(newPrompt)

        });


        const json = await response.json();
        const responseObj = JSON.parse(json.result)
        //   console.log(responseObj);
        if (response.ok) {
            console.log(typeof json.result);
            setQuestions(responseObj.quizQuestions)
        } else {
            console.warn(json?.error?.message);
        }
        setLoading(false)
    }

    var timer;


    useEffect(() => {
        if (quizStart) {
            timer = setInterval(() => {
                setSeconds(seconds + 1)
                if (seconds === 59) {
                    setMinutes(minutes + 1)
                    setSeconds(0)
                }
            }, 1000)
            return () => clearInterval(timer)
        }
    })

    const restart = () => {
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
        <div className=' text-white w-full mt-20 flex flex-col items-center'>
            <div className='flex justify-center relative w-full mb-20'>
                <Link href='/Quiz' className='absolute left-10'><FaArrowLeft className='text-2xl ' /></Link>
                <h2 className='text-3xl '>{params.subject.replace('%20', ' ')}</h2>
                {/* <button onClick={() => getData()}>click</button> */}
            </div>
            {
                loading ?
                    <div>Loading...</div> :
                    <QuizSection startQuiz={startQuiz} endQuiz={endQuiz} quesArr={questions} />
            }
        </div>
    )
}

export default page