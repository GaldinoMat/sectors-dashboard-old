import React, { FormEvent, useEffect, useRef, useState } from 'react'
import DeleteRole from "../../assets/DeleteRole.svg"

type SectorsForm = {
  setSectors: (sectors: Sector[]) => void
  sectors: Sector[]
}

type Sector = {
  Sector: string;
  roles: string[];
}

type RoleForm = {
  setRoles: (roles: string[]) => void
  roles: string[]
}

type SubmissionButton = {
  handleRoleSubmission: () => void
}

type Roles = {
  roles: string[]
  handleRoleDeletion: (role: string) => void
}

type Role = {
  role: string
  handleRoleDeletion: (role: string) => void
}

function SectorForm({ setSectors, sectors }: SectorsForm) {
  const [sectorName, setSectorName] = useState<string>("")
  const [roles, setRoles] = useState<string[]>([])

  const handleRoleDeletion = (role: string) => {
    const newRoles = roles
    newRoles.splice(newRoles.indexOf(role), 1)
    setRoles([...newRoles])
  }

  const handleSectorSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSectors([...sectors, {
      roles,
      Sector: sectorName
    }])
    setSectorName("")
    setRoles([])
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
        <RoleForm roles={roles} setRoles={setRoles} />
        <RolesRow roles={roles} handleRoleDeletion={handleRoleDeletion} />
      </section>
      <SaveFormButton />
    </form>
  )
}

function RoleForm({ setRoles, roles }: RoleForm) {
  const [role, setRole] = useState("")

  const handleRoleSubmission = () => {
    setRoles([...roles, role])
    setRole("")
  }

  return (
    <div className='flex flex-col items-end gap-4'>
      <div className='flex gap-3 w-full items-end'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="role" className='text-sm'>Cargo(s):</label>
          <input type="text" name="role" id="role" className='bg-gray-400 text-white h-12 outline-gray-900' value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <SubmitButton handleRoleSubmission={handleRoleSubmission} />
      </div>
    </div>
  )
}

function RolesRow({ roles, handleRoleDeletion }: Roles) {
  return (
    <div className='flex gap-3'>
      {roles.map(role => (
        <Role role={role} key={role} handleRoleDeletion={handleRoleDeletion} />
      ))}
    </div>
  )
}

function Role({ role, handleRoleDeletion }: Role) {
  return (
    <span className='flex px-3 py-[7px] justify-center items-center gap-3 bg-white max-w-[121px]'>
      <p className='text-xs'>{role}</p>
      <button type='button' onClick={() => handleRoleDeletion(role)}>
        <img src={DeleteRole} alt="delete role button" />
      </button>
    </span>
  )
}

function SubmitButton({ handleRoleSubmission }: SubmissionButton) {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full' type='button' onClick={() => handleRoleSubmission()}>Adicionar</button>
  )
}

function SaveFormButton() {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full self-end mt-auto' type='submit'>Salvar</button>
  )
}

export default SectorForm