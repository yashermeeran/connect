import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import cuid from 'cuid'

const ImagePicker = ({ setImages = () => {} }) => {
  // const [images, setImages] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader()
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ])
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png']
    },
    onDrop,
    maxFiles: 1
  })

  // console.log('images', images)

  return (
    <div
      {...getRootProps({
        className:
          'bg-gray-100 h-full rounded flex justify-center items-center flex-col cursor-pointer'
      })}
    >
      <input {...getInputProps()} />
      <div className="rounded-2xl bg-gray-300 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
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
      <span className="text-black font-semibold">Add photos</span>
    </div>
  )
}

export default ImagePicker
