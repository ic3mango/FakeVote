import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
}
// 
// export const fetchMyPolls = (id) => async dispatch => {
//   const res = await axios.get(`/api/polls/${id}`);
//
//   dispatch({ type: FETCH_MY_POLLS, payload: res.data });
// }
//
// export const fetchAllPolls = () => async dispatch => {
//   const res = await axios.get('/api/polls');
//
//   dispatch({ type: FETCH_ALL_POLLS, payload: res.data });
// }
//
// export const createPoll = (values, history) => async dispatch => {
//   const res = await axios.post('/api/polls/add', values);
//
//   history.push(`/mypolls`);
//
//   dispatch({ type: FETCH_NEW_POLL, payload: res.data });
// }
