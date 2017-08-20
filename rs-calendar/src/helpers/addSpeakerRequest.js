import { showSpeakerForm } from '../actions';

export default function addSpeakerRequest(route, name) {
  return (dispatch) => {
    const request = new Request(route, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }), //ava by default,  will add later
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
          dispatch(showSpeakerForm(false));
        } else {
          dispatch(showSpeakerForm(true));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
