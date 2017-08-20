import { getCookie } from './cookieHelper';
import { signIn, showSignInForm } from '../actions';

export default function signInRequest(route, login, password) {
  return (dispatch) => {
    const request = new Request(route, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });
    return fetch(request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .then((json) => {
        if (json.success) {
          dispatch(signIn(getCookie('token'), getCookie('userName')));
          dispatch(showSignInForm(false));
        } else {
          dispatch(showSignInForm(true));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

