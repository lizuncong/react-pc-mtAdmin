import { createAction } from '../../../utils/utils';
import { CHANGE_MORE_VALUE } from './types';

export const changeMoreValue = createAction(CHANGE_MORE_VALUE, 'payload');
