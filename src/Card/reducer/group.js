import { GROUPS, SINGLE_GROUP } from "../action/types";
const initialState = {
  groups: [],
  group: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case SINGLE_GROUP:
      return {
        ...state,
        group: action.payload,
      };

    default:
      return state;
  }
}
