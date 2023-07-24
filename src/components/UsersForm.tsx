import { useForm } from 'react-hook-form'
import { type User } from '../types'
import { useState, useEffect } from 'react'

interface UsersFormProps {
  AddUser: (user: User) => void // Define el tipo de la función AddUser
  editUser: (user: User) => void // Define el tipo de la función editUser
  userSelected: User | undefined // Define el tipo de userSelected
  handleShowForm: () => void // Define el tipo de la función handleShowForm
}

export const UsersForm: React.FC<UsersFormProps> = ({ AddUser, editUser, userSelected, handleShowForm }) => {

  const { register, handleSubmit, reset } = useForm()
  const [isVisible, setIsvisible] = useState(true)

  const emtyForm = (): void => {
    console.log('1')
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
  }
  useEffect(() => {
    if (userSelected !== undefined) {
      reset(userSelected)
    } else {
      console.log('2')
      emtyForm()
    }
  }, [userSelected])

  const submit = (data: User): void => {
    if (userSelected !== undefined) {
      editUser(data)
      console.log('3')

    } else {
      AddUser(data)
      console.log('4')
      emtyForm()
    }
  }

  const text = isVisible ? 'Ver' : 'Ocultar'
  const inputType = isVisible ? 'password' : 'text'
  const btnText = userSelected !== undefined ? 'Editar Usuario' : 'Añadir Usuario'

  return (
    <div className='p-6 flex gap-4 flex-wrap container rounded-3xl w-11/12 justify-center fixed glass'>
      <form
        className='flex flex-col gap-4'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submit)}
      >
        <span onClick={handleShowForm}
          className='absolute right-10 text-3xl cursor-pointer'><i className='bx bx-x'></i></span>
        <h2 className='text-2xl self-center'>{btnText}</h2>
        <div className="inputBox" >
          <input
            type="email"
            required= {true}
            className='bg-white p-2 rounded-lg'
            autoComplete='off'
            {...register('email')}/>
          <span>Email</span>
        </div>
        <div className=" divpass">
          <input
            type={inputType}
            autoComplete='off'
            required= {true}
            className='bg-white p-2 rounded-lg inline'
            {...register('password')}/>
          <span className='absolute right-0'>Contraseña</span>
          <button type='button' onClick={() => { setIsvisible(!isVisible) }} className='p-2 rounded-lg border bg-wite inline btnpass'>{text}</button>
        </div>
        <div className="inputBox" >
          <input
            type="text"
            autoComplete='off'
            required= {true}
            className='bg-white p-2 rounded-lg'
            {...register('first_name')}/>
          <span>Nombre</span>
        </div>
        <div className="inputBox" >
          <input
            type="text"
            autoComplete='off'
            required= {true}
            className='bg-white p-2 rounded-lg'
            {...register('last_name')}/>
          <span>Apellido</span>
        </div>
        <div className="inputBox" >
          <input type="date" className='bg-white p-2 rounded-lg' {...register('birthday')}/>
        </div>

        <button className='bg-gray-800 text-white p-2 rounded-lg btnpass'>{btnText}</button>

      </form>

    </div>
  )
}
