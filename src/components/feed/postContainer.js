import Post from './post'
import { postsData } from '@mocks/index'

const PostContainer = ({ postsView }) => {
  return (
    <div className="w-full h-full">
      <div
        className={`grid ${
          postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
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
