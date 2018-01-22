import types from './types';
import * as Immutable from 'immutable';
import {Action as ReduxAction} from 'redux';
import { DrawState } from '../../store';

const initialState: DrawState = Immutable.fromJS({
  upcomingDraws: [],
  selectedDraw: null
})

interface Action {
  type: string,
  payload: any
}

const draws = (state = initialState, action: Action) =>  {
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

export default draws;