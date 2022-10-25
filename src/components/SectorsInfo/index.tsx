import { useSelector } from 'react-redux'
import { IStateType } from '../../store'
import SectorInfo from './components/SectorInfo'

function SectorsInfo() {
  const { sectors } = useSelector<IStateType, IStateType>((state) => state).sectors

  return (
    <section className='bg-gray-300 p-4 flex flex-col gap-[14px] xl:min-w-[477px] xl:max-h-screen '>
      <div className='px-2'>
        <h2 className='text-2xl uppercase'>
          Setores
        </h2>
      </div>
      <div className='xl:overflow-auto flex flex-col gap-[14px]'>
        {sectors && sectors.map(sector => (
          <SectorInfo roles={sector.roles} sectorName={sector.sectorName} key={sector.id} />
        ))}
      </div>
    </section>
  )
}

export default SectorsInfo