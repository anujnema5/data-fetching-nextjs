import { getAllPosts } from '@/utils/feature'
import React from 'react'

const page = async () => {
    const posts = await getAllPosts();

    return (
        <div className='flex flex-col gap-4'>
            {posts?.map((post) => (
                <h1 key={post.id} className='text-lg font-bold mt-6'>{post.title}</h1>
            ))}
        </div>
    )
}

export default page