import { showEventForm, alert } from '../actions';

export default function addSpeakerRequest(route, event) {
  return (dispatch) => {
    const request = new Request(route, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
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
          dispatch(alert(true, 'success'));
          dispatch(showEventForm(true));
        } else {
          dispatch(alert(true, false));
          dispatch(showEventForm(true));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
