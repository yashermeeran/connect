import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { USER_LOGIN_STATUS } from '@constants/app'

const LoginForm = ({ handleRegisterModal }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (
      email &&
      password &&
      email.toLowerCase() === 'yaser' &&
      password.toLowerCase() === 'yaser'
    ) {
      localStorage.setItem(USER_LOGIN_STATUS, true)
      router.push('/feeds')
    } else {
      setError('Invalid Email/Password')
    }

    return false
  }

  return (
    <div className="shadow-lg bg-white p-10 rounded-xl mb-6">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-6">
            <span className="text-red-600 font-bold text-md">{error}</span>
          </div>
        )}

        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            minLength={1}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck2"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <a href="#!" className="text-gray-800">
            Forgot password?
          </a>
        </div>

        <div className="text-center lg:text-center ">
          <button
            type="submit"
            className="inline-block w-1/2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
          <div className="text-sm font-semibold mt-2 pt3 md:pt-6 mb-0 flex">
            {`Don't have an account?  `}
            {
              <div
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out pl-2 cursor-pointer"
                onClick={() => handleRegisterModal(true)}
              >
                Register
              </div>
            }
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
