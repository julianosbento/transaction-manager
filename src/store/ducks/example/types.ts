export enum IExampleTypes {
  GET_EXAMPLE = '@example/GET_EXAMPLE',
  SET_EXAMPLE = '@example/SET_EXAMPLE',
  GET_EXAMPLE_FAILURE = '@example/GET_EXAMPLE_FAILURE',
  EXAMPLE_CLEAN = '@example/EXAMPLE_CLEAN',
  CLEAN_ALL = '@app/CLEAN_all',
}

export interface IExampleState {
  readonly example: string;
  readonly error: boolean;
  readonly loading: boolean;
}
