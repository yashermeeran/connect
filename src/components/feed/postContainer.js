import Post from './post'
import { postsData } from '@mocks/index'

const PostContainer = ({ postsView, newPostList = [] }) => {
  return (
    <div className="w-full h-full">
      <div
        className={`grid ${
          postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
        {newPostList && newPostList.length
          ? newPostList.map((post, idx) => (
              <Post key={`newpost_${idx}`} post={post} />
            ))
          : null}
        {postsData.length ? (
          postsData.map((post, idx) => <Post key={idx} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  )
}

export default PostContainer
