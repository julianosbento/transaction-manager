import { action } from 'typesafe-actions';
import { IVisibilityTypes } from './types';

export const showVisibility = () => action(IVisibilityTypes.SHOW_VISIBILITY);
export const hideVisibility = () => action(IVisibilityTypes.HIDE_VISIBILITY);
export const visibilityClean = () => action(IVisibilityTypes.VISIBILITY_CLEAN);
