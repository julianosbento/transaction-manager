import { action } from 'typesafe-actions';

import {
  showVisibility,
  hideVisibility,
  visibilityClean,
} from '../../../../src/store/ducks/visibility/actions';
import { IVisibilityTypes } from '../../../../src/store/ducks/visibility/types';

describe('Visibility Actions', () => {
  it('should create the SHOW_VISIBILITY action', () => {
    const expectedAction = action(IVisibilityTypes.SHOW_VISIBILITY);

    expect(showVisibility()).toEqual(expectedAction);
  });

  it('should create the HIDE_VISIBILITY action', () => {
    const expectedAction = action(IVisibilityTypes.HIDE_VISIBILITY);

    expect(hideVisibility()).toEqual(expectedAction);
  });

  it('should create the VISIBILITY_CLEAN action', () => {
    const expectedAction = action(IVisibilityTypes.VISIBILITY_CLEAN);

    expect(visibilityClean()).toEqual(expectedAction);
  });
});
