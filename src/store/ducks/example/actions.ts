import { action } from 'typesafe-actions';
import { IExampleTypes } from './types';

export const getExample = () => action(IExampleTypes.GET_EXAMPLE);

export const getExampleFailure = () =>
  action(IExampleTypes.GET_EXAMPLE_FAILURE);

export const setExample = (example: string) =>
  action(IExampleTypes.SET_EXAMPLE, { example });

export const exampleClean = () => action(IExampleTypes.EXAMPLE_CLEAN);
