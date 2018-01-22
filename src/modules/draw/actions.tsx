import axios from 'axios';
import { Dispatch } from 'redux';
import {StoreState, Draw } from '../../store';
import types from './types';

const ROOT_URL = 'http://127.0.0.1:8080'

export const getDraws = () => async (dispatch: Dispatch<StoreState>) => {
  let URL = ROOT_URL + '/draws'
  const request = await axios.get(URL)
  dispatch(getDrawsResponse(request))
}

export const addDraw = (drawStart: number) => async (dispatch: Dispatch<StoreState>) => {
  let URL = types + '/draws/new'
  const request = await axios.post(URL, {
    DrawStart: drawStart
  })
  return {
    type: types.ADD_DRAW,
    payload: request
  }
}

export const selectDraw = (draw: Draw) => {
  return {
    type: types.DRAW_SELECTED,
    payload: draw
  }
}

const getDrawsResponse = (response: any) => {
  return {
    type: types.GET_DRAWS,
    payload: response.data
  }
}