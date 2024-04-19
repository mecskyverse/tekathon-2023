'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
import QuizSubjectSelect from '@/components/QuizSubjectSelect'

const page = () => {
    const subjects = ['Operating System', 'Java', 'Web Dev', 'Network Security'];
    const [subject, setSubject] = useState('')
    const router = useRouter()
    const handleSubjectSelect = (subject) => {
        // Handle subject selection here (e.g., navigate to quiz page)
        console.log('Selected subject:', subject);
        router.push(`Quiz/${subject}`)
    };
    return (
        // <Link href={`Quiz/${subjects[0].replace(/\s/g, '').toLowerCase()}`} className='w-full'>
        < QuizSubjectSelect subjects = { subjects } onSubjectSelect = { handleSubjectSelect } />
        // </Link>
  )
}

export default page





    