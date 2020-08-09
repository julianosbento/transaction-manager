export enum ISnackbarTypes {
  SHOW_SNACKBAR = '@snackbar/SHOW_SNACKBAR',
  HIDE_SNACKBAR = '@snackbar/HIDE_SNACKBAR',
  SNACKBAR_CLEAN = '@snackbar/SNACKBAR_CLEAN',
  CLEAN_ALL = '@app/CLEAN_all',
}

export interface ISnackbar {
  duration?: number;
  message: string;
  onDismiss?: Function;
  visible: boolean;
}

export interface ISnackbarState {
  readonly snackbar: ISnackbar;
}
