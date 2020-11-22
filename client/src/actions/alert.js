import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT} from './types';

export const setAlert = (msg, alertType) => dispacth => {
  const id = uuid.v4();
  // call set alert
  dispacth({
    type: SET_ALERT,
    payload: {msg, alertType, id}
  });

  // tambahkan set time
  // setTimeout(() => dispacth({ type: REMOVE_ALERT, payload: id }), 5000);

};