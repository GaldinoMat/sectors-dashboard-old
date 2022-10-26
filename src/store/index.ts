import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import { EditRolesType, RolesType, Sector, SectorsObj } from '../typings/types'
import sectors from './modules/sectors/reducer'
import roles from './modules/roles/reducer'
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios'
import axios from 'axios';
import warnings, { Warning } from './modules/warning/reducer';
import sector from './modules/editSector/resolver';
import editRoles from './modules/editRoles/resolver';

export interface IStateType {
  sectors: SectorsObj
  roles: RolesType
  warnings: Warning
  sector: {
    id: number;
    sectorName: string;
    roles: string[];
  }
  editRoles: EditRolesType
}

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios.create({
    baseURL: 'http://localhost:3333/',
  })),
});

const reducers = combineReducers({
  sectors,
  roles,
  warnings,
  sector,
  editRoles,
  requests: requestsReducer,
});


const store = createStore(reducers, applyMiddleware(...requestsMiddleware))

export default store