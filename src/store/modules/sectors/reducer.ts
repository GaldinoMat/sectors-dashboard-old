import { produce } from 'immer';
import { Reducer } from "redux"
import { SectorsObj } from '../../../typings/types';

const SECTORS_INITIAL_STATE: SectorsObj = {
  sectors: []
}

const sectors: Reducer<SectorsObj> = (state = SECTORS_INITIAL_STATE, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "CREATE_AND_ADD_SECTOR":
        const { sector } = action.payload


        draft.sectors.push(sector)
        break;

      case "LOAD_SECTORS":
        const { sectors } = action.payload

        draft.sectors = sectors
        break;

      default:
        return draft;
    }
  })
}

export default sectors