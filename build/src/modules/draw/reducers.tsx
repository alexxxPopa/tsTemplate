import { combineReducers, Action } from 'redux';
import * as Immutable from 'immutable';
import types from './types';
import { DrawAction } from './actions';
import { DrawState } from '../../store';

const initialState: DrawState = Immutable.fromJS({
  upcomingDraws: [],
  selectedDraw: null
})

const draw = (state = initialState, action: DrawAction) =>  {
  switch(action.type) {
    case types.GET_DRAWS: {
      return state.set('upcomingDraws', action.payload)
    }
    case types.DRAW_SELECTED: {
      return state.set('selectedDraw', action.payload)
    }
    default:
      return state  
  }
}

export default draw
