import { Sector } from './../../../typings/types';

export function createSector(sector: Sector) {
  return {
    type: "CREATE_AND_ADD_SECTOR",
    payload: {
      sector
    }
  }
}