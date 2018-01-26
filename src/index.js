import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myApp from './reducers'
import './index.css';
import App from './App';


let store = createStore(myApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

