import { isFetching, signIn } from '../actions';
import { getCookie } from './cookieHelper';

const checkCookieToken = url =>
(dispatch) => {
  const token = getCookie('token');
  const userName = getCookie('userName');
  if (token === 'false' || !token) {
    dispatch(isFetching(false));
    dispatch(signIn(false, false));
  } else {
    const request = new Request(url, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
    });
    fetch(request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .then((json) => {
        if (json.verify && json.name === userName) {
          dispatch(isFetching(false));
          dispatch(signIn(token, userName));
        } else {
          dispatch(isFetching(false));
          dispatch(signIn(false, false));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
};

export default checkCookieToken;
