import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'
import ImagePicker from '@components/imagePicker'
import YaserProfilePic from '@assets/profile/yaser.jpg'

export default function CreatePostDialog({
  isOpen,
  closeModal,
  images,
  setImages,
  handlePost
}) {
  const descriptionRef = useRef(null)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg font-bold leading-6 text-gray-900 w-full flex justify-center items-center h-14 border-b"
                  >
                    <span>Create post</span>
                    <div
                      className="absolute right-4 rounded-2xl bg-gray-200 p-1 cursor-pointer"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </Dialog.Title>
                  <div className="p-6 w-full">
                    <div className="space-y-1 h-auto flex pb-3" tabIndex={0}>
                      <img
                        className="h-9 w-9 rounded-full"
                        src={YaserProfilePic.src}
                        alt=""
                      />
                      <div className="flex flex-col px-3">
                        <span className="text-gray-900 font-semibold">
                          Yaser Meeran
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 overflow-y-auto min-h-64 max-h-64">
                      <div
                        className="text-sm text-black createPostContainer"
                        data-text="What's on your mind, Yaser?"
                        contentEditable
                        role={'textbox'}
                        tabIndex={-1}
                        ref={descriptionRef}
                      ></div>
                      <>
                        {images && images.length > 0 ? (
                          <div className="relative mt-10 h-full p-2 rounded-xl border border-gray-100 border-solid ">
                            <img src={images[0].src} />
                            <div
                              className="absolute right-5 top-2 rounded-2xl bg-gray-200 p-1 cursor-pointer"
                              onClick={() => setImages([])}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-10 h-40 md:h-52 p-2 rounded-xl border border-gray-100 border-solid ">
                            <ImagePicker setImages={setImages} />
                          </div>
                        )}
                      </>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full font-bold rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          const description =
                            descriptionRef &&
                            descriptionRef.current &&
                            descriptionRef.current.innerText
                              ? descriptionRef.current.innerText
                              : ''

                          if (description !== '') {
                            handlePost(description)
                          }
                        }}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
