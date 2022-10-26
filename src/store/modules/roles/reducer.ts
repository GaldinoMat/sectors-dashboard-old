import { Reducer } from "redux"

interface Role {
  role: string
}

interface IRoles {
  roles: Role[]
}

const ROLES_INITIAL_STATE: IRoles = {
  roles: []
}

const roles: Reducer<IRoles> = (state = ROLES_INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ROLE_TO_ROLES":
      const { role: addedRole } = action.payload;

      return {
        ...state,
        roles: [
          ...state.roles,
          addedRole
        ]
      }

    case "REMOVE_ROLE_FROM_ROLES":
      const { role: removedRole } = action.payload;

      const newRoles = state.roles
      newRoles.splice(newRoles.indexOf(removedRole), 1)

      return {
        ...state,
        roles: newRoles
      }

    case "CLEAR_ROLES":

      return {
        ...state,
        roles: []
      }

    default:
      return state;

  }
}

export default roles