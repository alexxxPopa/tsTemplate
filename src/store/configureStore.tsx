import { createStore, applyMiddleware, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { StoreState } from './storeState'


export default (): Store<StoreState> => {
  return (
  createStore<StoreState>(
    rootReducer,
    applyMiddleware(reduxThunk)
  ))
}
