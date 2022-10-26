export type Sector = {
  id: number
  sectorName: string;
  roles: string[]
}

export type InfoCard = Sector & OpenCard

export type OpenCard = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export type RoleType = {
  role: string
}