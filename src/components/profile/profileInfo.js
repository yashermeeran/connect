import React, { useState } from 'react'
import EditProfileInfoModal from './editProfileModal'
import MobileProfileIntro from './mobileProfileIntro'
import YaserProfilePic from '@assets/profile/yaser.jpg'

const ProfileInfo = () => {
  const [showEditProfileForm, setShowEditProfileForm] = useState(false)

  const handleEditProfileForm = (showModal) => {
    setShowEditProfileForm(showModal)
  }

  return (
    <div className="w-full h-auto md:h-40 bg-gray-50 flex justify-center md:justify-start ">
      <div className="px-4 md:pt-2 md:pb-3 space-y-1 h-full w-full relative bottom-8 md:static md:bottom-0 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
        <img
          className="h-40 w-40 md:h-40 md:w-40 rounded-full md:relative md:bottom-12 md:left-3"
          src={YaserProfilePic.src}
          alt=""
        />
        <div className="flex flex-col px-3 m-4 md:m-5 pt-2 h-auto md:justify-between md:flex-row md:w-full">
          <span className="text-gray-900 font-bold text-2xl md:text-3xl">
            Yaser Meeran
          </span>
          <div
            className="w-auto h-9 md:w-36 rounded-md bg-gray-200 flex justify-center items-center mt-5 md:mt-0 cursor-pointer"
            onClick={() => handleEditProfileForm(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <span className="tex-black font-medium pl-2">Edit Profile</span>
          </div>
        </div>
        <EditProfileInfoModal showEditProfileForm={showEditProfileForm} handleEditProfileForm={handleEditProfileForm} />
        <MobileProfileIntro />
      </div>
    </div>
  )
}

export default ProfileInfo
