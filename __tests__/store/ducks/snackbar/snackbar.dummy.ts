import { action } from 'typesafe-actions';

import { ISnackbarTypes } from '../../../../src/store/ducks/snackbar/types';

export const expectedAction = action(ISnackbarTypes.SNACKBAR_CLEAN);

export const snackbar = {
  duration: 7000,
  message: '',
  onDismiss: () => {},
  visible: false,
};
