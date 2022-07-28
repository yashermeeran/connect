import React, { useState } from 'react'
import Head from 'next/head'

import Logo from '@assets/logo/logo_transparent.png'
import LoginForm from '@components/loginForm'
import Register from '@components/register'

const Home = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleRegisterModal = (showModal) => {
    setShowRegisterModal(showModal)
  }

  return (
    <section className="h-screen bg-gray-100">
      <Head>
        <title>Connect App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 -mb-8 md:mb-6">
            <img src={Logo.src} className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 w-full">
            <LoginForm handleRegisterModal={handleRegisterModal} />
            <Register
              showRegisterModal={showRegisterModal}
              handleRegisterModal={handleRegisterModal}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
