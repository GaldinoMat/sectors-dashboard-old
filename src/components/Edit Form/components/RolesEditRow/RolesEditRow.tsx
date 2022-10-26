import { useSelector } from "react-redux"
import { IStateType } from "../../../../store"
import Role from "./RoleEdit"

function RolesEditRow() {
  const { editRoles } = useSelector<IStateType, IStateType>((state) => state).editRoles

  return (
    <div className='flex gap-3'>
      {editRoles.map((role: string) => (
        <Role role={role} key={role} />
      ))}
    </div>
  )
}

export default RolesEditRow