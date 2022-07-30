import YaserProfilePic from '@assets/profile/yaser.jpg'

const createMockPostData = ({ image = null, caption = '' }) => {
  return {
    _id: '1',
    user: {
      _id: '1',
      username: 'yaser',
      fullname: 'Yaser Meeran',
      dp: YaserProfilePic.src
    },
    caption,
    image,
    likes: 0,
    comments: 0,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

export default createMockPostData
