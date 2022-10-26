import { Reducer } from "redux"
import { EditRolesType } from "../../../typings/types";

const ROLES_INITIAL_STATE: EditRolesType = {
  editRoles: []
}

const editRoles: Reducer<EditRolesType> = (state = ROLES_INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_EDIT_ROLES":
      const { roles: editRoles } = action.payload;

      return {
        ...state,
        editRoles: editRoles
      }

    case "REMOVE_ROLE_FROM_EDIT_ROLES":
      const { role: removedRole } = action.payload;

      const newRoles = state.editRoles
      newRoles.splice(newRoles.indexOf(removedRole), 1)

      return {
        ...state,
        roles: newRoles
      }

    case "ADD_EDIT_ROLE":
      const { role: addedEditRole } = action.payload;

      return {
        ...state,
        editRoles: [
          ...state.editRoles,
          addedEditRole
        ]
      }

    case "CLEAR_EDIT_ROLES":

      return {
        ...state,
        editRoles: []
      }


    default:
      return state;

  }
}

export default editRoles