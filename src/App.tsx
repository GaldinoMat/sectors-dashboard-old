import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SectorForm from './components/Form'
import Header from './components/Header'
import SectorsInfo from './components/SectorsInfo'
import { fetchSectors, loadSectors } from './store/modules/sectors/actions'
import { Sector } from './typings/types'

function App() {
  const [sectors, setSectors] = useState<Sector[]>([])

  const dispatch = useDispatch()

  const getBooks = async () => {
    const { data } = await dispatch(fetchSectors())
    dispatch(loadSectors(data))
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="p-4 md:max-w-xl xl:max-w-7xl xl:max-h-screen xl:px-0 flex flex-col mx-auto gap-5">
      <Header />
      <main className='flex flex-col xl:flex-row gap-[18px] xl:h-screen'>
        <SectorsInfo />
        <SectorForm />
      </main>
    </div>
  )
}

export default App
