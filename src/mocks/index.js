import YaserProfilePic from '@assets/profile/yaser.jpg'

export const postsData = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'yaser',
      fullname: 'Yaser Meeran',
      dp: YaserProfilePic.src
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1080',
    likes: 129,
    comments: 5,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    user: {
      _id: '1',
      fullname: 'Yaser Meeran',
      username: 'yaser',
      dp: YaserProfilePic.src
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1070',
    likes: 798,
    comments: 52,
    shares: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '3',
    user: {
      _id: '1',
      fullname: 'Yaser Meeran',
      username: 'yaser',
      dp: YaserProfilePic.src
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1060',
    likes: 456,
    comments: 15,
    shares: 80,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '4',
    user: {
      _id: '1',
      fullname: 'Yaser Meeran',
      username: 'yaser',
      dp: YaserProfilePic.src
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1050',
    likes: 29,
    comments: 1,
    shares: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
