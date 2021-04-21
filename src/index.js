import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch({type: '@@INIT'})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

