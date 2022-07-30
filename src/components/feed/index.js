import { useState } from 'react'
import DesktopLeftSidebar from './desktopLeftSidebar'
import PostContainer from './postContainer'
import CreatePost from './createPost'

const Feed = () => {
  const [newPostList, setNewPostList] = useState([])

  console.log('newPostList', newPostList)
  
  return (
    <div className="w-full h-full flex flex-row gap-10">
      <div className="hidden md:block md:w-1/4 h-full">
        <DesktopLeftSidebar />
      </div>
      <div className="w-full md:w-2/4 h-full">
        <CreatePost setNewPostList={setNewPostList} />
        <PostContainer newPostList={newPostList} />
      </div>
      <div className="hidden md:block md:w-1/4 h-full"></div>
    </div>
  )
}

export default Feed
