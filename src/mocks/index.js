import YaserProfilePic from '@assets/profile/yaser.jpg'
import YaserCoverPic from '@assets/profile/yaser_cover_pic.jpeg'

export const userMock = {
  _id: '1',
  username: 'yaser',
  fullname: 'Yaser Meeran',
  dp: YaserProfilePic.src,
  coverPic: YaserCoverPic.src,
  slug: 'yasermeeran',
  profile: {
    bio: 'I am not fake, am still perfect !!',
    location: 'Chennai, India'
  }
}

export const postsData = [
  {
    _id: '1',
    user: userMock,
    caption: 'New Profile Pic ☺ !! ',
    image: YaserProfilePic.src,
    likes: 129,
    comments: 5,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    user: userMock,
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
    user: userMock,
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
    user: userMock,
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1050',
    likes: 29,
    comments: 1,
    shares: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
