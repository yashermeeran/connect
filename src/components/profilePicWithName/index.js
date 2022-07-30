import YaserProfilePic from '@assets/profile/yaser.jpg'

const ProfilePicWithName = () => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 h-auto flex">
      <img className="h-9 w-9 rounded-full" src={YaserProfilePic.src} alt="" />
      <div className="flex flex-col px-3">
        <span className="text-gray-900">Yaser Meeran</span>
      </div>
    </div>
  )
}

export default ProfilePicWithName
