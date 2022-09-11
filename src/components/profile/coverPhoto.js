import React from 'react'
import { userMock } from '@mocks/index'

const CoverPhoto = () => {
  return (
    <div className="w-full mx-auto h-36 md:h-96 ">
      <img
        src={userMock.coverPic}
        alt="cover photo"
        className="object-cover w-full h-full rounded"
      />
    </div>
  )
}

export default CoverPhoto
