import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from './reducer/reducer'

const store = createStore(reducer, applyMiddleware(logger))
console.log(store.getState())

export default store