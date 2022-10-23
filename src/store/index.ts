import { legacy_createStore as createStore} from 'redux'
import rootReducer from './modules/rootReducer'
import sectors from './modules/sectors/reducer'


const store = createStore(rootReducer)

export default store