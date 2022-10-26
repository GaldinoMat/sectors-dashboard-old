import { Reducer } from "redux"

export type Warning = {
  warning: {
    isWarning: boolean,
    text: string
  }
}

const WARNINGS_INITIAL_STATE: Warning = {
  warning: {
    isWarning: false,
    text: ""
  }
}

const warnings: Reducer<Warning> = (state = WARNINGS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPATCH_WARNING_AND_TEXT":
      const { isWarning, text
      } = action.payload;

      return {
        ...state,
        warning: {
          isWarning,
          text
        }
      }


    default:
      return state
  }
}

export default warnings