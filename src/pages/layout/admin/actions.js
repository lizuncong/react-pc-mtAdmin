import { changeMoreValue } from './creators';

export default (dispatch) => ({
  changeMoreValue: (data) => dispatch(changeMoreValue(data)),
});
