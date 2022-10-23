export type SectorsForm = {
  setSectors: (sectors: Sector[]) => void
  sectors: Sector[]
}

export type Sectors = {
  sectors: Sector[]
}

export type Sector = {
  Sector: string;
  roles: string[];
}

export type RoleFormType = {
  setRoles: (roles: string[]) => void
  roles: string[]
}

export type SubmissionButton = {
  handleRoleSubmission: () => void
}

export type Roles = {
  roles: string[]
  handleRoleDeletion: (role: string) => void
}

export type RoleType = {
  role: string
  handleRoleDeletion: (role: string) => void
}