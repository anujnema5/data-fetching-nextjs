import { getAllUsers } from '@/utils/feature'
import Posts from './posts';
import React, { Suspense } from 'react'
import {notFound} from 'next/navigation'


// export const dynamicParams = false;

// export const generateStaticParams = async () => {
//     return [
//         {
//             id: "1"
//         },

//         {
//             id: "2"
//         },

//         {
//             id: "3"
//         },

//         {
//             id: "4"
//         },
//     ]
// }

export const generateMetadata = async ({ params }) => {
    const user = await getAllUsers(params.id)

    return {
        title: `${user.name}'s Profile`
    }
}


const page = async ({ params }) => {

    const userData = await getAllUsers(params.id);
    if(!userData.id) return notFound();


    return (
        <>
            <div>
                <h1>{userData.name}</h1>
                <h1>{userData.email}</h1>
            </div>

            <Suspense fallback={<h1 className='font-extrabold text-2xl mt-10'>Loading ...</h1>}>
                <Posts id={params.id} />
            </Suspense>
        </>
    )
}

export default page