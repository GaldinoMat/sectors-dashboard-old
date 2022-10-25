import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { IStateType } from '../../store'
import { clearRoles } from '../../store/modules/roles/actions'
import { createSector, postSector } from '../../store/modules/sectors/actions'
import type { RolesObj } from '../../typings/types'
import RoleForm from './components/RoleForm/RoleForm'
import RolesRow from './components/RolesRow/RolesRow'


function SectorForm() {
  const [sectorName, setSectorName] = useState<string>("")
  const dispatch = useDispatch()
  const { roles } = useSelector<IStateType, IStateType>((state) => state).roles

  const handleSectorSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sector = {
      id: Math.floor(Math.random() * 6000) + 1,
      sectorName: sectorName,
      roles
    }
    dispatch(createSector(sector))
    dispatch(postSector(sector))
    dispatch(clearRoles())
    // try {
    //   await api.post("/sectors", {
    //     sector,
    //     roles
    //   })
    // } catch (error) {
    //   console.log(error);
    // }

    setSectorName("")
  }

  return (
    <form onSubmit={handleSectorSubmit} className='bg-gray-300 p-6 flex flex-col gap-[14px] xl:min-w-[842px] xl:pr-[49px] h-screen xl:h-full'>
      <section>
        <h2 className='text-2xl uppercase'>Adicionar setor</h2>
      </section>
      <section className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="sector" className='text-sm'>Nome:</label>
          <input type="text" name="sector" id="sector" className='bg-gray-400 text-white h-12 outline-gray-900' required value={sectorName} onChange={(e) => setSectorName(e.target.value)} />
        </div>
        <RoleForm />
        <RolesRow />
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

export default SectorForm