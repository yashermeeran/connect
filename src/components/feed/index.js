import DesktopLeftSidebar from './desktopLeftSidebar'
import PostContainer from './postContainer'

const Feed = () => {
  return (
    <div className="w-full h-full flex flex-row gap-10">
      <div className="hidden md:block md:w-1/4 h-full">
        <DesktopLeftSidebar />
      </div>
      <div className="w-full md:w-2/4 h-full">
        <PostContainer />
      </div>
      <div className="hidden md:block md:w-1/4 h-full"></div>
    </div>
  )
}

export default Feed
