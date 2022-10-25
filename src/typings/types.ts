export type SectorsObj = {
  sectors: Sector[]
}

export type Sector = {
  id: number
  sectorName: string;
  roles: string[];
}

export type RolesType = {
  roles: string[]
}

export type RolesObj = {
  roles: RolesType
}