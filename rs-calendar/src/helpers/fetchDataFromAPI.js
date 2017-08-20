import { isFetching, recievedData, today } from '../actions';

export default (eventsURL, trainersURL) =>
  function fetchData(dispatch) {
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
