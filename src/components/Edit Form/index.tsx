import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { IStateType } from '../../store'
import { clearEditRoles } from '../../store/modules/editRoles/actions'
import { addSectorToEdit, updateEditSector } from '../../store/modules/editSector/actions'
import { clearRoles } from '../../store/modules/roles/actions'
import { addEditedSector } from '../../store/modules/sectors/actions'
import { dispatchWarning } from '../../store/modules/warning/actions'
import type { Sector } from '../../typings/types'
import RoleEditForm from './components/RoleEditForm/RoleEditForm'
import RolesEditRow from './components/RolesEditRow/RolesEditRow'


function SectorEditForm() {
  const dispatch = useDispatch()
  const { editRoles } = useSelector<IStateType, IStateType>((state) => state).editRoles
  const { sectors } = useSelector<IStateType, IStateType>((state) => state).sectors
  const { sector: editSector } = useSelector<IStateType, IStateType>((state) => state)
  const [sectorEditName, setsectorEditName] = useState<string>(editSector.sectorName)

  const checkRepeatedValues = () => {
    const filteredSectors = sectors.filter(sector => sector.id !== editSector.id)

    const isSectorNameFound = filteredSectors.some((sector: Sector) => sector.sectorName.toLowerCase() === sectorEditName.toLowerCase())

    const isRoleRepeated = filteredSectors.some((sector: Sector) => sector.roles.some(role => editRoles.includes(role)))

    return isSectorNameFound || isRoleRepeated
  }

  const dispatchSector = async () => {
    const editedSector: Sector = {
      id: editSector.id,
      sectorName: sectorEditName,
      roles: editRoles
    }

    dispatch(addEditedSector(editedSector))
    dispatch(updateEditSector(editedSector))
    dispatch(clearEditRoles())
    dispatch(addSectorToEdit({
      id: 0,
      roles: [],
      sectorName: ""
    }))

  }

  const handleEditSectorSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (checkRepeatedValues()) {
      dispatch(dispatchWarning(true, "Atributos já existentes na base de dados, certifique-se de inserir valores únicos"))
    } else {
      await dispatchSector()
      setsectorEditName("")
    }
  }

  return (
    <form onSubmit={handleEditSectorSubmit} className='bg-gray-300 p-6 flex flex-col gap-[14px] xl:min-w-[842px] xl:pr-[49px] h-screen xl:h-full'>
      <section>
        <h2 className='text-2xl uppercase'>Editar {editSector.sectorName}</h2>
      </section>
      <section className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="sector" className='text-sm'>Nome:</label>
          <input type="text" name="sector" id="sector" className='bg-gray-400 text-white h-12 outline-gray-900' required value={sectorEditName} onChange={(e) => setsectorEditName(e.target.value)} />
        </div>
        <RoleEditForm />
        <RolesEditRow />
      </section>
      <SaveFormButton />
    </form>
  )
}

function SaveFormButton() {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full self-end mt-auto' type='submit'>Salvar</button>
  )
}

export default SectorEditForm