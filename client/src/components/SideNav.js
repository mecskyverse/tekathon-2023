import React from 'react'
import Link from 'next/link'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineQuiz} from 'react-icons/md'
import {MdOutlineScoreboard} from 'react-icons/md'
import {BiLogoDiscourse} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

function SideNav() {

    const navArray = ['Home', 'Quiz', 'Score', 'Course', 'Settings']
    const iconArray = [<AiOutlineHome/>, <MdOutlineQuiz/>, <MdOutlineScoreboard/>, <BiLogoDiscourse/>, <FiSettings/>]
  return (
    <section className='flex flex-col items-center w-[15vw]  mt-20 '>
        <Link href='/signin'> <button  className={`hover:border flex flex-row gap-2 justify-center border-blue-600 w-40 rounded-xl bg-gradient-to-r from-[#363E52] to-[#2B3242] items-center space p-3 text-white text-center text-lg`}><AiOutlineUser/><p>Sign In</p></button></Link>
        <div className='flex flex-col mt-10'>
            {
                navArray.map((item, index) => {
                    return (
                        <Link href={`${item === 'Home' ? '/' : item}`}>

                        <div className='p-5 rounded-xl flex flex-row mb-5 nav__items'>
                        <div className='text-white text-xl mr-3'>{iconArray[index]}</div>
                        <button className='text-white text-xl'>{item}</button>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default SideNav