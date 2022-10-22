import RoleForm from './components/Form'
import Header from './components/Header'
import SectorsInfo from './components/SectorsInfo'

function App() {
  return (
    <div className="p-4 md:max-w-xl xl:max-w-7xl xl:max-h-screen xl:px-0 flex flex-col mx-auto gap-5">
      <Header />
      <body className='flex flex-col xl:flex-row gap-[18px] xl:h-screen'>
        <SectorsInfo />
        <RoleForm />
      </body>
    </div>
  )
}

export default App
