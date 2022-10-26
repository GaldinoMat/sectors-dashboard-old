export function loadRoles(roles: string[]) {
  return {
    type: "LOAD_EDIT_ROLES",
    payload: {
      roles
    }
  }
}

export function deleteEditRole(role:string) {
  return {
    type: "REMOVE_ROLE_FROM_EDIT_ROLES",
    payload: {
      role
    }
  }
}

export function addEditRoles(role: string) {
  return {
    type: "ADD_EDIT_ROLE",
    payload: {
      role
    }
  }
}

export function clearEditRoles() {
  return {
    type: "CLEAR_EDIT_ROLES",
    payload: {}
  }
}