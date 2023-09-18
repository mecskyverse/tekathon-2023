import React from 'react'
import Image from 'next/image'
import parakhLogo from '../../../public/parakhlogo.png'
import Head from 'next/head'
function page() {
    return (
        <>
            <Head>
                <title>Sign In</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Urbanist:wght@100;200&display=swap" rel="stylesheet" />
            </Head>
            <main className='h-screen bg-sign'>
                <section className='bg-sign h-screen w-screen flex flex-col justify-center align-center'>
                    <div className='self-center'>
                        <Image
                            src={parakhLogo}
                            alt="parakh Logo"
                        />
                    </div>
                    <div>

                        <h1 className='headline center text-[46px] font-[700] not-italic mt-32'>Parakh: Sign In</h1>
                    </div>
                    <div className='flex flex-col gap-10 self-center'>
                        <input
                            type="text"
                            placeholder="Username"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='text-white'>Sign In</button>
                    </div>

                </section>
            </main>
        </>
    )
}

export default page