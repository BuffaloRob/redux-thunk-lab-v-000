import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import catsReducer from './reducers/cats_reducer'

const rootReducer = combineReducers({
    cat: catsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
