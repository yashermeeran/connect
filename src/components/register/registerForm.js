const RegisterForm = () => {
  return (
    <form>
      <div class="mb-6">
        <input
          type="text"
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="registerFirstName"
          placeholder="First Name"
          minLength={1}
        />
      </div>
      <div class="mb-6">
        <input
          type="text"
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="registerLastName"
          placeholder="Last Name"
          minLength={1}
        />
      </div>
      <div class="mb-6">
        <input
          type="text"
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="registerEmailAdress"
          placeholder="Email address"
          minLength={1}
        />
      </div>

      <div class="mb-6">
        <input
          type="password"
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="registerPassword"
          placeholder="Password"
        />
      </div>
    </form>
  )
}

export default RegisterForm
