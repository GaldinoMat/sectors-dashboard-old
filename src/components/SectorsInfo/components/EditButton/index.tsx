import { useDispatch } from 'react-redux'
import { loadRoles } from '../../../../store/modules/editRoles/actions'
import { addSectorToEdit } from '../../../../store/modules/editSector/actions'
import type { EditButton } from './typings/types'

function Editbutton({ sector, roles }: EditButton) {
  const dispatch = useDispatch()

  const handleEditRequest = () => {
    dispatch(addSectorToEdit(sector))
    dispatch(loadRoles(roles))
  }

  return (
    <button onClick={() => handleEditRequest()} className='bg-gray-300 px-3 py-2'>Editar</button>
  )
}

export default Editbutton