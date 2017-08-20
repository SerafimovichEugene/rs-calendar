import fetchDataFromAPI from '../helpers/fetchDataFromAPI';
import config from '../config';

export default function deleteRequest(route, id) {
  return (dispatch) => {
    const request = new Request(route, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    return fetch(request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        if (json.success) {
          dispatch(fetchDataFromAPI(config.eventsRoute, config.speakersRoute));
        }
      })
      .catch((err) => {
        console.log("client catch -->");
        alert(err.message);
      });
  };
}
