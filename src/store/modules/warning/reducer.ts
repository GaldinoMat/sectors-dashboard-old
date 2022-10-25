import produce from "immer"
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
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "DISPATCH_WARNING_AND_TEXT":
        const { isWarning, text
        } = action.payload;

        draft.warning = {
          isWarning,
          text
        }

        break;

      default:
        break;
    }
  })
}

export default warnings