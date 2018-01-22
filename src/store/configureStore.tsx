import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { StoreState } from './storeState'


export default (): Store<any>  => {
  return (
  createStore<StoreState>(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  ))
}
