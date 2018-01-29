import * as React from 'react';
import { connect } from 'react-redux';
import { getDraws, selectDraw, DrawAction } from '../../modules/draw';
import { withRouter, RouteComponentProps } from 'react-router';
import { Draw, StoreState } from '../../store/storeState';
import { bindActionCreators, Dispatch } from 'redux';

interface DispatchProps extends RouteComponentProps<any>{
  getDraws: () => void,
  selectDraw: (draw: Draw) => void,
  draws: Array<Draw>
}

interface Props  {
  draws: Array<Draw>
}


class DrawList extends React.Component<DispatchProps> {
  
  componentDidMount() {
    this.props.getDraws()
  }

  onSelectDraw = (draw: Draw) => {
    this.props.selectDraw(draw)
    this.props.history.push('ticket/new')
  }

  renderDraws() {
    return this.props.draws.map ( (draw) => {
      return (
        <li key= { draw.id }
          onClick={ () => this.onSelectDraw(draw) }>
          Draw Starts : { draw.drawStart }
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        { this.renderDraws() }
      </ul>
    ) 
  }
}

const mapStateToProps = (state: StoreState) => {
  return { draws : state.draw.get('upcomingDraws')}
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => ({
  getDraws: () => {
   dispatch(getDraws())
  },
  selectDraw: (draw: Draw) => {
    dispatch(selectDraw(draw))
  }
})

export default withRouter(connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(DrawList))

