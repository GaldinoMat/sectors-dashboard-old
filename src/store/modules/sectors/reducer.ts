import { Reducer } from "redux"
import { Sector, Sectors } from "../../../typings/types"

const SECTORS_INITIAL_STATE: Sectors = {
  sectors: [],
  
}

const SECTOR_INITIAL_STATE: Sector = {
  Sector: "",
  roles: []
}

const sectors: Reducer<Sectors> = () => {
  return SECTORS_INITIAL_STATE
}

export const sector: Reducer<Sector> = () => {
  return SECTOR_INITIAL_STATE
}

export default sectors