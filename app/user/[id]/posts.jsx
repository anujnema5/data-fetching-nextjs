import { getUserPosts } from '@/utils/feature'
import React from 'react'

const posts = async({id}) => {
    const posts = await getUserPosts(id)
    
  return (
    <div>
        {posts?.map((post)=>(
            <h1 key={post.id} className='text-lg font-bold mt-6'>{post.title}</h1>
        ))}
    </div>
  )
}

export default posts