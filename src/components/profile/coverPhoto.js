import React from 'react'
import YaserCoverPic from '@assets/profile/yaser_cover_pic.jpeg'

const CoverPhoto = () => {
  return (
    <div className="w-full mx-auto h-36 md:h-96 ">
      <img
        src={YaserCoverPic.src}
        alt="cover photo"
        className="object-cover w-full h-full rounded"
      />
    </div>
  )
}

export default CoverPhoto
