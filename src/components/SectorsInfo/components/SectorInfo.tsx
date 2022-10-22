import React, { useState } from 'react'
import Expand from "../../../assets/Expand.svg"
import clsx from "clsx"
import { OpenCard } from '../typings/types'

function SectorInfo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gray-400'>
      <div className={clsx('px-2 py-4 flex flex-col gap-5 transition-all duration-75', {
        "gap-5": isOpen,
        "gap-0": !isOpen
      })}>
        <SectorInfoCard isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

function SectorInfoCard({ isOpen, setIsOpen }: OpenCard) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-lg'>Setor 1</h3>
        </div>
        <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={clsx('px-4 overflow-hidden flex flex-col items-center gap-3 xl:px-10', {
        "max-h-full h-full": isOpen,
        "max-h-0 h-0": !isOpen
      })}>
        <div className='flex flex-wrap justify-center gap-3'>
          <RoleSpan />
          <RoleSpan />
          <RoleSpan />
          <RoleSpan />
        </div>
        <div className='flex gap-3'>
          <button className='bg-gray-300 px-3 py-2'>Editar</button>
          <button className='bg-gray-300 px-3 py-2'>Excluir</button>
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

function RoleSpan() {
  return (
    <span className='bg-gray-300 px-3 py-2'>Cargo 1</span>
  )
}

export default SectorInfo