import React from 'react'
import CoverPhoto from './coverPhoto'
import ProfileInfo from './profileInfo'
import PostContainer from '@components/feed/postContainer'
import DesktopProfileInfo from './desktopProfileIntro'

const Profile = () => {
  return (
    <>
      <div className="w-11/12 md:w-ful h-auto mx-auto md:px-0 mt-2 md:mt-0 md:border-b">
        <CoverPhoto />
        <ProfileInfo />
      </div>
      <div className="w-full h-auto md:w-11/12 mx-auto mt-4 flex gap-5">
        <div className="hidden md:block md:w-1/3 h-full">
          <DesktopProfileInfo />
        </div>
        <div className="w-full md:w-2/3 h-full">
          <div className="h-auto mx-auto md:mx-0 w-11/12 py-1 md:py-2">
            <span className="text-lg font-semibold">Posts</span>
          </div>
          <PostContainer newPostList={[]} />
        </div>
      </div>
    </>
  )
}

export default Profile
