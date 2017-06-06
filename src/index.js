import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducer from './reducers/rootReducer';

const loadUI = () => {
    let store = createStore(reducer);
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, 
        document.getElementById('root')
    );
}
document.addEventListener('loaded', loadUI);
window.addEventListener("beforeunload", ()=> {
    document.removeEventListener('loaded', loadUI);
});
