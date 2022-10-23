import { Reducer } from "redux"
import produce from "immer"

interface Role {
  role: string
}

interface IRoles {
  roles: Role[]
}

const ROLES_INITIAL_STATE = {
  roles: []
}

const roles: Reducer<IRoles> = (state = ROLES_INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_ROLE_TO_ROLES":
        const { role: addedRole } = action.payload;

        draft.roles.push(addedRole)

        break;


      case "REMOVE_ROLE_FROM_ROLES":
        const { role: removedRole } = action.payload;

        const newRoles = draft.roles
        newRoles.splice(newRoles.indexOf(removedRole), 1)

        draft.roles = newRoles

        break;

      case "CLEAR_ROLES":
        draft.roles = []

        break;

      default:
        return draft;

    }
  })
}

export default roles