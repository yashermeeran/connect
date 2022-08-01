import { userMock } from '@mocks/index'
import Link from 'next/link'
import YaserProfilePic from '@assets/profile/yaser.jpg'

const DesktopLeftSidebar = () => {
  return (
    <div>
      <div className="px-2 pt-2 pb-3 space-y-1 h-auto flex ">
        <img
          className="h-9 w-9 rounded-full"
          src={YaserProfilePic.src}
          alt=""
        />
        <div className="flex flex-col px-3">
          <span className="text-gray-900">Yaser Meeran</span>
        </div>
      </div>
      <div className="px-2 pt-2 pb-3 space-y-1 h-auto flex ">
        <div className="h-9 w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="flex flex-col px-3">
          <Link href={`/profile/${userMock.slug}/`} passHref>
            <a className="text-gray-900">View your profile</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopLeftSidebar
