import * as Immutable from 'immutable';


export interface Draw {
  id: number,
  drawStart: Date
}

export interface DrawState extends Immutable.Map<String, any[]>{
  upcomingDraws: Array<number>,
  selectedDraw: Draw
}

export  interface StoreState {
  readonly draw : DrawState
}