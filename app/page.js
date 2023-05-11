import { getAllUsers } from '@/utils/feature'
import Link from 'next/link'



export default async function Home() {
  const users = await getAllUsers();
  
  return (
    <div className='flex flex-col gap-4'>
      {users.map((user)=>(
        <Link key={user.id} href={`/user/${user.id}`}>{user.name}</Link>
      ))}
    </div>
  )
}
