import { combineReducers } from 'redux';
import { draw } from '../modules';
import { StoreState } from '../store'; 

const rootReducer = combineReducers<StoreState> ({
  draw
})

export default rootReducer