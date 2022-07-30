import { useState } from 'react'
import CreatePostDialog from './createPostDialog'
import YaserProfilePic from '@assets/profile/yaser.jpg'

import createMockPostData from '@utils/createMockPostData'

const CreatePost = ({ setNewPostList }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [images, setImages] = useState([])

  const handleCreatePostClick = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setImages([])
  }

  const handlePost = (description) => {
    const image = images.length ? images[0].src : null
    const newPost = createMockPostData({ image, caption: description })

    setNewPostList((prevState) => [newPost, ...prevState])
    closeModal()
  }

  return (
    <div className="md:rounded-lg bg-white flex flex-col p-3 px-4 shadow mb-3 md:my-3 border-t">
      <CreatePostDialog
        isOpen={isOpen}
        closeModal={closeModal}
        setImages={setImages}
        images={images}
        handlePost={handlePost}
      />
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="w-10 h-10">
          <img
            src={YaserProfilePic.src}
            className="w-full h-full rounded-full"
            alt="dp"
          />
        </div>
        <button
          onClick={() => handleCreatePostClick()}
          className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5"
        >
          What&apos;s on your mind, Yaser?
        </button>
      </div>
      <div className="flex space-x-3 font-thin text-sm text-gray-600 -mb-1">
        <button
          onClick={() => {
            handleCreatePostClick()
          }}
          className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Photos</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CreatePost
