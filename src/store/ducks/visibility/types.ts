export enum IVisibilityTypes {
  SHOW_VISIBILITY = '@visibility/SHOW_VISIBILITY',
  HIDE_VISIBILITY = '@visibility/HIDE_VISIBILITY',
  VISIBILITY_CLEAN = '@visibility/VISIBILITY_CLEAN',
  CLEAN_ALL = '@app/CLEAN_all',
}

export interface IVisibilityState {
  readonly visibility: boolean;
}
