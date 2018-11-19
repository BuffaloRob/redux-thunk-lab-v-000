import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import catsReducer from './reducers/cats_reducer'

const store = createStore(catsReducer, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
