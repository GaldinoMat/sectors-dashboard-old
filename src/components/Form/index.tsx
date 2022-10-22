import clsx from 'clsx'
import React from 'react'
import DeleteRole from "../../assets/DeleteRole.svg"

function RoleForm() {
  return (
    <main className='bg-gray-300 p-6 flex flex-col gap-[14px] xl:min-w-[842px] xl:pr-[49px] h-screen xl:h-full'>
      <section>
        <h2 className='text-2xl uppercase'>Adicionar setor</h2>
      </section>
      <section className='flex flex-col gap-5'>
        <SectorForm />
        <RolesRow />
      </section>
      <SaveFormButton />
    </main>
  )
}

function SectorForm() {
  return (
    <form action="" className='flex flex-col items-end gap-4'>
      <div className='flex flex-col gap-3 w-full'>
        <label htmlFor="sector" className='text-sm'>Nome:</label>
        <input type="text" name="sector" id="sector" className='bg-gray-400 text-white h-12 outline-gray-900' />
      </div>
      <div className='flex gap-3 w-full items-end'>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="role" className='text-sm'>Cargo(s):</label>
          <input type="text" name="role" id="role" className='bg-gray-400 text-white h-12 outline-gray-900' />
        </div>
        <SubmitButton />
      </div>
    </form>
  )
}

function RolesRow() {
  return (
    <div className='flex gap-3'>
      <Role />
      <Role />
    </div>
  )
}

function Role() {
  return (
    <span className='flex px-3 py-[7px] justify-center items-center gap-3 bg-white max-w-[121px]'>
      <p className='text-xs'>Cargo 1</p>
      <button><img src={DeleteRole} alt="delete role button" /></button>
    </span>
  )
}

function SubmitButton() {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full' type="submit">Adicionar</button>
  )
}

function SaveFormButton() {
  return (
    <button className='bg-gray-600 text-white py-2 max-w-[132px] h-12 w-full self-end mt-auto'>Salvar</button>
  )
}

export default RoleForm