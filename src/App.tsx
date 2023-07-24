import axios from 'axios'
import './App.css'
import { UsersList } from './components/UsersList.tsx'
import { useEffect, useState } from 'react'
import { type User } from './types.ts'
import { UsersForm } from './components/UsersForm.tsx'
import { CreateBtn } from './components/CreateBtn.tsx'
import { Toaster, toast } from 'sonner'

function App (): JSX.Element {

  const [allUsers, setAllUsers] = useState<User[]>([])
  const [userSelected, setUserSelected] = useState<User | undefined>(undefined)
  const [showForm, setShowForm] = useState<boolean>(false)

  const getUsers = (): void => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then(resp => { setAllUsers(resp.data) })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    getUsers()
  }, [])

  const AddUser = (user: User): void => {
    axios
      .post('https://users-crud.academlo.tech/users/', user)
      .then(() => {
        getUsers()
        setShowForm(!showForm)
        toast.success('Usuario creado')
      })
      .catch(err => {
        console.log(err)
        toast.error('Error al crear usuario')
      })
  }

  const deleteUser = (user: User): void => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${user.id}/`)
      .then(() => {
        getUsers()
        toast.success('Usuario eliminado')
      })
      .catch(err => {
        console.log(err)
        toast.error('Error al eliminar usuario')
      })
  }

  const updateUser = (user: User): void => {
    handleShowForm()
    setUserSelected(user)
  }
  const resetUserSelected = (): void => {
    setUserSelected(undefined)
  }

  const editUser = (user: User): void => {
    axios
      .put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
      .then(() => {
        getUsers()
        setShowForm(!showForm)
        toast.success('Usuario actualizado')
      })
      .catch(err => {
        console.log(err)
        toast.error('Error al actualizar usuario')
      })
  }

  const handleShowForm = (): void => {
    setShowForm(!showForm)
  }

  return (
    <>
      <Toaster richColors={true} expand={true}/>
      <main className=' flex flex-col items-center mt-60 gap-5'>
        <CreateBtn handleShowForm={handleShowForm} resetUserSelected={resetUserSelected} />
        <UsersList
          allUsers={allUsers}
          deleteUser={deleteUser}
          updateUser={updateUser} />
        {
          showForm
            ? <UsersForm
              AddUser={AddUser}
              handleShowForm={handleShowForm}
              editUser={editUser}
              userSelected={userSelected} />
            : false
        }
      </main>
    </>
  )
}

export default App
