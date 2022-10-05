import React from 'react'
import Post from './Post'
import { addPost } from '../../store'

const Posts = (props) => {
  
 let newPostElement = React.createRef()

    const postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  
    const addPostHandler = () => {
    let text = newPostElement.current.value;
    addPost(text)
    console.log(props.posts)
  }
  
    return (
    <div><textarea ref={newPostElement}></textarea>
    <button onClick={addPostHandler}>Add post</button>
    {postElements}
    </div>
  )
}

export default Posts