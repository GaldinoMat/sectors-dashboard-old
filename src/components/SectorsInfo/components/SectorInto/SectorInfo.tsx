import { useState } from 'react'
import Expand from "../../../../assets/Expand.svg"
import clsx from "clsx"
import { InfoCard, OpenCard, RoleType } from '../../typings/types'
import { Sector } from '../../../../typings/types'
import DeleteButton from '../DeleteButton'
import { useDispatch } from 'react-redux'
import { addSectorToEdit } from '../../../../store/modules/editSector/actions'
import { loadRoles } from '../../../../store/modules/editRoles/actions'


function SectorInfo(sector: Sector) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gray-400'>
      <div className={clsx('px-2 py-4 flex flex-col gap-5 transition-all duration-75', {
        "gap-5": isOpen,
        "gap-0": !isOpen
      })}>
        <SectorInfoCard isOpen={isOpen} setIsOpen={setIsOpen} roles={sector.roles} sectorName={sector.sectorName} id={sector.id} />
      </div>
    </div>
  )
}

function SectorInfoCard({ isOpen, setIsOpen, ...sector }: InfoCard) {
  const dispatch = useDispatch()
  const { id, roles, sectorName } = sector


  const handleEditRequest = () => {
    dispatch(addSectorToEdit(sector))
    dispatch(loadRoles(roles))
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-lg'>{sectorName}</h3>
        </div>
        <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={clsx('px-4 overflow-hidden flex flex-col items-center gap-3 xl:px-10', {
        "max-h-full h-full": isOpen,
        "max-h-0 h-0": !isOpen
      })}>
        <div className='flex flex-wrap justify-center gap-3'>
          {roles.map(role => (
            <RoleSpan role={role} key={role} />
          ))}
        </div>
        <div className='flex gap-3'>
          <button onClick={() => handleEditRequest()} className='bg-gray-300 px-3 py-2'>Editar</button>
          <DeleteButton id={id} />
        </div>
      </div>
    </>
  )
}

function ExpandButton({ isOpen, setIsOpen }: OpenCard) {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={Expand} alt="expand button" className={
          clsx("transition-all duration-75", {
            "rotate-180": isOpen,
            "rotate-0": !isOpen
          })
        } />
      </button>
    </div>
  )
}

function RoleSpan({ role }: RoleType) {
  return (
    <span className='bg-gray-300 px-3 py-2'>{role}</span>
  )
}


export default SectorInfo