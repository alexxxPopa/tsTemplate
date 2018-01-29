import axios from 'axios';
import { Dispatch } from 'redux';
import {StoreState, Draw } from '../../store';
import types from './types';
import { ThunkAction } from 'redux-thunk';

const ROOT_URL = 'http://127.0.0.1:8080'

export const getDraws = () => async (dispatch: Dispatch<StoreState>) => {
  let URL = ROOT_URL + '/draws'
  const request = await axios.get(URL)
  dispatch(getDrawsResponse(request))
}

export const addDraw = (drawStart: number): ThunkAction<Promise<any>, StoreState, null> => async (dispatch: Dispatch<StoreState>) => {
  let URL = types + '/draws/new'
  const request = await axios.post(URL, {
    DrawStart: drawStart
  })

}

export const selectDraw = (draw: Draw): DrawAction => {
  return {
    type: types.DRAW_SELECTED,
    payload: draw
  }
}

const getDrawsResponse = (response: any): DrawAction => {
  return {
    type: types.GET_DRAWS,
    payload: response.data
  }
}

export interface DrawAction {
  type: string,
  payload: any
}



