import { action } from 'typesafe-actions';

import {
  showSnackbar,
  hideSnackbar,
  snackbarClean,
} from '../../../../src/store/ducks/snackbar/actions';
import { ISnackbarTypes } from '../../../../src/store/ducks/snackbar/types';
import { snackbar } from './snackbar.dummy';

describe('Snackbar Actions', () => {
  it('should create the SHOW_SNACKBAR action', () => {
    const expectedAction = action(ISnackbarTypes.SHOW_SNACKBAR, { snackbar });

    expect(showSnackbar(snackbar)).toEqual(expectedAction);
  });

  it('should create the HIDE_SNACKBAR action', () => {
    const expectedAction = action(ISnackbarTypes.HIDE_SNACKBAR);

    expect(hideSnackbar()).toEqual(expectedAction);
  });

  it('should create the SNACKBAR_CLEAN action', () => {
    const expectedAction = action(ISnackbarTypes.SNACKBAR_CLEAN);

    expect(snackbarClean()).toEqual(expectedAction);
  });
});
