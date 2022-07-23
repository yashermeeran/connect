const LoginForm = ({ handleRegisterModal }) => {
  return (
    <div class="shadow-lg bg-white p-10 rounded-xl mb-6">
      <form>
        <div class="mb-6">
          <input
            type="text"
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            minLength={1}
          />
        </div>

        <div class="mb-6">
          <input
            type="password"
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
          />
        </div>

        <div class="flex justify-between items-center mb-6">
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="exampleCheck2"
            >
              Remember me
            </label>
          </div>
        </div>
        <div class="flex justify-between items-center mb-6">
          <a href="#!" class="text-gray-800">
            Forgot password?
          </a>
        </div>

        <div class="text-center lg:text-center ">
          <button
            type="button"
            class="inline-block w-1/2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
          <div class="text-sm font-semibold mt-2 pt3 md:pt-6 mb-0 flex">
            {`Don't have an account?  `}
            {
              <div
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out pl-2 cursor-pointer"
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
