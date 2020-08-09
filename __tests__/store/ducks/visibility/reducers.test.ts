import reducer, { INITIAL_STATE } from '../../../../src/store/ducks/visibility';
import {
  showVisibility,
  hideVisibility,
  visibilityClean,
} from '../../../../src/store/ducks/visibility/actions';
import { expectedAction } from './visibility.dummy';

describe('Visibility Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, expectedAction)).toEqual(INITIAL_STATE);
  });

  it('should return the evolved state when SHOW_VISIBILITY is dispatched', () => {
    const action = showVisibility();

    const expectedState = {
      ...INITIAL_STATE,
      visibility: true,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });

  it('should return the evolved state when HIDE_VISIBILITY is dispatched', () => {
    const action = hideVisibility();

    const expectedState = {
      ...INITIAL_STATE,
      visibility: false,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });

  it('should return the evolved state when VISIBILITY_CLEAN is dispatched', () => {
    const action = visibilityClean();

    const expectedState = {
      ...INITIAL_STATE,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });
});
