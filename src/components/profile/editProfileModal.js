import React, { useRef } from 'react'
import { userMock } from '@mocks/index'
import YaserProfilePic from '@assets/profile/yaser.jpg'

const EditProfileInfoForm = ({}) => {
  const descriptionRef = useRef(null)
  return (
    <div className="py-2 px-5">
      <div className="border-b-2 py-2">
        <div className="flex justify-between">
          <span className="text-black font-bold text-md">Profile picture</span>
          <span className="text-blue-900 cursor-pointer">Edit</span>
        </div>
        <div className="py-2 flex justify-center items-center">
          <img
            className="h-40 w-40 rounded-full  md:bottom-12 md:left-3"
            src={YaserProfilePic.src}
            alt=""
          />
        </div>
      </div>
      <div className="border-b-2 py-2">
        <div className="flex justify-between">
          <span className="text-black font-bold text-md">Cover photo</span>
          <span className="text-blue-900 cursor-pointer">Edit</span>
        </div>
        <div className="py-2 flex justify-center items-center">
          <div className="w-full mx-auto md:w-4/5 md:h-48 h-36 ">
            <img
              src={userMock.coverPic}
              alt="cover photo"
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between">
          <span className="text-black font-bold text-md">Bio</span>
        </div>
        <div className="py-2">
          <div
            className="text-sm text-black crebioContaineratePostContainer"
            contentEditable
            role={'textbox'}
            tabIndex={-1}
            ref={descriptionRef}
          >
            {userMock.profile.bio}
          </div>
        </div>
      </div>
    </div>
  )
}

const EditProfileInfoModal = ({
  showEditProfileForm,
  handleEditProfileForm
}) => {
  if (!showEditProfileForm) {
    return null
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-3xl h-full md:h-auto">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full md:h-auto">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalCenteredScrollableLabel"
            >
              Edit Profile
            </h5>
            <button
              type="button"
              className="btn-close box-content rounded-full flex justify-center items-center w-5 h-5 bg-gray-300 cursor-pointer p-1 text-black border-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline text-xl"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleEditProfileForm(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative w-full">
            <EditProfileInfoForm />
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileInfoModal
