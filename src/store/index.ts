import { legacy_createStore as createStore } from 'redux'
import { RolesType, Sector, SectorsObj } from '../typings/types'
import rootReducer from './modules/rootReducer'

export interface IStateType {
  sectors: SectorsObj
  roles: RolesType
}
const store = createStore(rootReducer)

export default store