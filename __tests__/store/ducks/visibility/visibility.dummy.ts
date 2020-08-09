import { action } from 'typesafe-actions';

import { IVisibilityTypes } from '../../../../src/store/ducks/visibility/types';

export const expectedAction = action(IVisibilityTypes.VISIBILITY_CLEAN);
