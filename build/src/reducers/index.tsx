import { combineReducers, Reducer } from 'redux';
import { draw } from '../modules';
import { StoreState } from '../store'; 

const rootReducer: Reducer<StoreState> = combineReducers<StoreState> ({
  draw
})

export default rootReducer