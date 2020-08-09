import { Reducer } from 'redux';
import { ISnackbarState, ISnackbarTypes } from './types';

export const INITIAL_STATE: ISnackbarState = {
  snackbar: {
    duration: 7000,
    message: '',
    onDismiss: () => {},
    visible: false,
  },
};

const reducer: Reducer<ISnackbarState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ISnackbarTypes.SHOW_SNACKBAR:
      return { ...state, snackbar: action.payload.snackbar };
    case ISnackbarTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: INITIAL_STATE.snackbar,
      };
    case ISnackbarTypes.SNACKBAR_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case ISnackbarTypes.CLEAN_ALL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
