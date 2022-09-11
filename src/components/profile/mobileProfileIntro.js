import { userMock } from '@mocks/index'

const MobileProfileIntro = () => {
  return (
    <div className="w-full md:hidden mt-5">
      <div className="rounded-md w-full h-auto px-5 pt-5 flex flex-col justify-start">
        <div className="flex flex-row gap-3 justify-start items-center w-full mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            color={'#65676b'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span>{userMock.profile.bio}</span>
        </div>
        {/* <div className="flex flex-row gap-3 justify-start items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            color={'#65676b'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{`From ${userMock.profile.location}`}</span>
        </div> */}
      </div>
    </div>
  )
}

export default MobileProfileIntro
