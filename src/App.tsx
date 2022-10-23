import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import SectorForm from './components/Form'
import Header from './components/Header'
import SectorsInfo from './components/SectorsInfo'
import api from './services/api'
import store from './store'
import { Sector } from './typings/types'

function App() {
  const [sectors, setSectors] = useState<Sector[]>([])

  // const getSectors = async () => {
  //   try {
  //     await api.get("/sectors").then(resp => setSectors(resp.data))
  //   } catch (error) {
  //     console.log(error);      
  //   }
  // }

  // useEffect(() => {
  //   getSectors()
  // }, [])

  return (
    <Provider store={store}>
      <div className="p-4 md:max-w-xl xl:max-w-7xl xl:max-h-screen xl:px-0 flex flex-col mx-auto gap-5">
        <Header />
        <main className='flex flex-col xl:flex-row gap-[18px] xl:h-screen'>
          <SectorsInfo />
          <SectorForm />
        </main>
      </div>
    </Provider>
  )
}

export default App
