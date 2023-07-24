import { type User } from '../types'
import { UserCard } from './UserCard'

interface UsersListProps {
  allUsers: User[]
  deleteUser: (user: User) => void
  updateUser: (user: User) => void
}

export const UsersList: React.FC<UsersListProps> = ({ allUsers, deleteUser, updateUser }) => {

  const noUsers = allUsers.length === 0
  return (
    <div className='p-6 flex gap-4 flex-wrap rounded-3xl justify-center mx-10 container2'>
      {noUsers && <h2 className='text-center text-2xl mb-3 underline'>No hay usuarios</h2>}
      {
        allUsers.map((user) => {
          return (
            <>
              <UserCard key={user.id} user={user} deleteUser={deleteUser}
                updateUser={updateUser} />
            </>
          )
        })
      }
    </div>
  )
}
