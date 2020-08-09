import { Reducer } from 'redux';
import { IExampleState, IExampleTypes } from './types';

const INITIAL_STATE: IExampleState = {
  example: '',
  loading: false,
  error: false,
};

const reducer: Reducer<IExampleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IExampleTypes.GET_EXAMPLE:
      return { ...state, loading: true };
    case IExampleTypes.SET_EXAMPLE:
      return {
        ...state,
        loading: false,
        error: false,
        example: action.payload.example,
      };
    case IExampleTypes.GET_EXAMPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: INITIAL_STATE.example,
      };
    case IExampleTypes.EXAMPLE_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case IExampleTypes.CLEAN_ALL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
