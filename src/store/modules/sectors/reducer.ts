import { produce } from 'immer';
import { Reducer } from "redux"
import { Sectors } from "../../../typings/types"

const SECTORS_INITIAL_STATE: Sectors = {
  sectors: [],
}

export const sectors: Reducer<Sectors> = (state = SECTORS_INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "CREATE_AND_ADD_SECTOR":
        const { sector } = action.payload

        draft.sectors.push(sector)
        break;

      default:
        return draft;
    }
  })
}

export default sectors