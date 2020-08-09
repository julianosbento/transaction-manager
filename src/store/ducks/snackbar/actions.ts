import { action } from 'typesafe-actions';
import { ISnackbarTypes, ISnackbar } from './types';

export const showSnackbar = (snackbar: ISnackbar) =>
  action(ISnackbarTypes.SHOW_SNACKBAR, { snackbar });
export const hideSnackbar = () => action(ISnackbarTypes.HIDE_SNACKBAR);
export const snackbarClean = () => action(ISnackbarTypes.SNACKBAR_CLEAN);
