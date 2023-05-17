import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

//thunk allows us to perform asynchronous actions in redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

//connects our react application to the index.html file
ReactDOM.render(
    <Provider store={store}>
        < App/>
    </Provider>, 
    document.getElementById('root')
)