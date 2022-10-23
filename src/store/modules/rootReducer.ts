import { combineReducers } from "redux";
import sectors from '../modules/sectors/reducer'
import roles from '../modules/roles/reducer'


export default combineReducers({
  sectors,
  roles
})