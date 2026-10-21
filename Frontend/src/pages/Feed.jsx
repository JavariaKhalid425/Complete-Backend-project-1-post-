import React, { useState ,useEffect} from 'react'
import axios from "axios"

export default function Feed() {
    const [posts,setPosts]=useState([
    {
        _id:"1",
        image:"https://images.unsplash.com/photo-1789349062001-cf5c014bbff0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        caption:"Beautifull_Scenary"
    }
])

    useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts)
    })
    },[])


  return (
    <section className='feed-section'>
     {
        posts.length > 0 ? (
    posts.map(( post ) => (
        <div key={post._id} className='post-card' >
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
        </div>
    ))
) : (
    <h1>No posts available</h1>
)

     }
    </section>
  )
}

