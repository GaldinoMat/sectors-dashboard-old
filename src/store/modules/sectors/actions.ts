import { Sector } from './../../../typings/types';

export function createSector(sector: Sector) {
  return {
    type: "CREATE_AND_ADD_SECTOR",
    payload: {
      sector
    }
  }
}

export function postSector(sector: Sector) {
  return {
    type: "CREATE_AND_POST_SECTOR",
    request: {
      url: "sectors",
      method: 'post',
      data: sector
    }
  }
}

export function loadSectors(sectors: Sector[]) {
  return {
    type: "LOAD_SECTORS",
    payload: {
      sectors
    }
  }
}

export function fetchSectors() {
  return {
    type: "FETCH_SECTORS",
    request: {
      url: "sectors",
      method: 'get'
    },
    data: []
  }
}