import './CreateBtn.css'
interface UsersFormProps {
  handleShowForm: () => void // Define el tipo de la función handleShowForm
  resetUserSelected: () => void

}

export const CreateBtn: React.FC<UsersFormProps> = ({ handleShowForm, resetUserSelected }) => {
  return (
    <button onClick={() => {
      handleShowForm()
      resetUserSelected()
    }} className="Btn">
      <div className="sign">+</div>
      <div className="text">Create</div>
    </button>
  )
}
