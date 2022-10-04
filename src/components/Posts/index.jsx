import React from 'react'
import Post from './Post'

const Posts = (props) => {
    debugger
    const postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  return (
    <div><textarea></textarea>
    <button>Add post</button>
    {postElements}
    </div>
  )
}

export default Posts