import { useDispatch } from "react-redux"
import DeleteRole from "../../../../assets/DeleteRole.svg"
import { RoleType } from "./typings/types"
import { deleteEditRole } from "../../../../store/modules/editRoles/actions"

function RoleEdit({ role }: RoleType) {
  const dispatch = useDispatch()
  const handleRoleDeletion = () => dispatch(deleteEditRole(role))

  return (
    <span className='flex px-3 py-[7px] justify-center items-center gap-3 bg-white max-w-[121px]'>
      <p className='text-xs'>{role}</p>
      <button type='button' onClick={() => handleRoleDeletion()}>
        <img src={DeleteRole} alt="delete role button" />
      </button>
    </span>
  )
}

export default RoleEdit