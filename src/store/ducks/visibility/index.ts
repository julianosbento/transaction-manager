import { Reducer } from 'redux';
import { IVisibilityState, IVisibilityTypes } from './types';

export const INITIAL_STATE: IVisibilityState = {
  visibility: true,
};

const reducer: Reducer<IVisibilityState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IVisibilityTypes.SHOW_VISIBILITY:
      return { ...state, visibility: true };
    case IVisibilityTypes.HIDE_VISIBILITY:
      return {
        ...state,
        visibility: false,
      };
    case IVisibilityTypes.VISIBILITY_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case IVisibilityTypes.CLEAN_ALL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
