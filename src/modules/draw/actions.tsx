import axios from 'axios';
import { Dispatch, Action, ActionCreator } from 'redux';
import {StoreState, Draw } from '../../store';
import types from './types';
import { ThunkAction } from 'redux-thunk';

const ROOT_URL = 'http://127.0.0.1:8080'

export const getDraws: ActionCreator<ThunkAction<Promise<DrawAction>, StoreState, void>> = () => 
   async (dispatch: Dispatch<StoreState>):Promise<DrawAction> => {
    let URL = ROOT_URL + '/draws'
    try {
    const response = await axios.get(URL)
    return dispatch({
      type: types.GET_DRAWS,
      payload: response.data
    })
  }  catch(e) {
      //handle catch
      return dispatch({
        type: types.GET_DRAWS
      })
  }
}


export const addDraw: ActionCreator<ThunkAction<Promise<DrawAction>, StoreState, void>> = 
  (drawStart: number) => async (dispatch: Dispatch<StoreState>) => {
  let URL = types + '/draws/new'
  try{
  const response = await axios.post(URL, {
    DrawStart: drawStart
  })
  //handle success
  return dispatch({
    type: types.GET_DRAWS,
      payload: response.data
    })
  } catch(e) {
    //handle catch
    return dispatch({
      type: types.GET_DRAWS
      })
  }
}

export const selectDraw = (draw: Draw): DrawAction => {
  return {
    type: types.DRAW_SELECTED,
    payload: draw
  }
}


// const getDrawsResponse = (response: any): DrawAction => {
//   return {
//     type: types.GET_DRAWS,
//     payload: response.data
//   }
// }

export interface DrawAction {
  type: string,
  payload ?: any,
  error ?: boolean
}



