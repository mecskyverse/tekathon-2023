"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import parakhLogo from '../../../public/parakhlogo.png'
import Head from 'next/head'
import { BiUserCircle } from 'react-icons/bi'
import {MdPassword} from 'react-icons/md'
function page() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUserIconVisible, setIsUserIconVisible] = useState(true);
    const [isPwdIconVisible, setIsPwdIconVisible] = useState(true);
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsUserIconVisible(e.target.value === '');
    };
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        setIsPwdIconVisible(e.target.value === '')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('Email:', email);
        console.log('Password:', password);
    
        // Resetting the form fields
        setEmail('');
        setPassword('');
      };
    return (
        <>
            {/* <Head>
                <title>Sign In</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Urbanist:wght@100;200&display=swap" rel="stylesheet" />
            </Head> */}
            <section className='h-screen bg-sign w-full' suppressHydrationWarning>
                <section className='bg-gradient h-screen flex flex-col justify-center align-center ' suppressHydrationWarning>
                        <Image
                            src={parakhLogo}
                            alt="parakh Logo"
                            className='self-center'
                            priority
                        />
                   
                        <h1 className='headline center text-[46px] font-[700] not-italic mt-10'>Parakh: Sign In</h1>
                    <section className='flex flex-col self-center mt-5' suppressHydrationWarning>
                    <form onSubmit={handleSubmit} suppressHydrationWarning>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                                className='w-80 placeholder:pl-5 h-14 bg-transparent border border-gray-500 focus:border-blue-500 outline-none px-4 py-2 rounded-2xl text-white p-5'
                                required
                            />
                            {isUserIconVisible && <span><BiUserCircle className='relative bottom-10 left-2 text-2xl align-center' /></span>}
                            <input
                                    type="password"
                                    placeholder="Password"
                                    className='bg-transparent placeholder:pl-5 w-80 h-14 border border-gray-500 focus:border-blue-500 outline-none px-4 py-2 rounded-2xl text-white '
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    suppressHydrationWarning
                                />
                        {isPwdIconVisible && <MdPassword className='relative bottom-10 left-2 text-2xl align-center' />}
                        <button type="submit" className='text-white rounded-2xl w-80 h-14 bg-[#205BF1] button-signin'>Sign In</button>
                        </form>
                        
                    </section>
                        <p className='mt-5 text-center text-white opacity-50'>Don't have an account? Sign up</p>
                </section>
            </section >
        </>
    )
}

export default page