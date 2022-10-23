import { legacy_createStore as createStore} from 'redux'
import { Sector } from '../typings/types'
import rootReducer from './modules/rootReducer'

export interface IStateType {
  sectors: Sector[]
  roles: IRoles
}

interface IRoles {
  roles: string[]
}


const store = createStore(rootReducer)

export default store