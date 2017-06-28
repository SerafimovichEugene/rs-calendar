import { isFetching, recievedData, today } from './actions';

export default function fetchData(eventsURL, trainersURL) {
  return function (dispatch) {
    dispatch(isFetching(true));
    return Promise.all([fetch(eventsURL), fetch(trainersURL)])
      .then(responses =>
        Promise.all(responses.map(response => response.json())))
      .then((jsons) => {
        dispatch(recievedData(jsons[0], jsons[1]));
        dispatch(today());
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
