import React from 'react'
import SectorInfo from './components/SectorInfo'

function SectorsInfo() {
  return (
    <section className='bg-gray-300 p-4 flex flex-col gap-[14px] xl:min-w-[477px] xl:max-h-screen '>
      <div className='px-2'>
        <h2 className='text-2xl uppercase'>
          Setores
        </h2>
      </div>
      <div className='xl:overflow-auto flex flex-col gap-[14px]'>
        <SectorInfo />        
      </div>
    </section>
  )
}

export default SectorsInfo