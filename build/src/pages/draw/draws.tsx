import * as React from 'react';
import { connect } from 'react-redux';
import { getDraws, selectDraw } from '../../modules/draw';
import { withRouter, RouteComponentProps } from 'react-router';
import { Draw, StoreState } from '../../store/storeState';
import { bindActionCreators, Dispatch } from 'redux';

interface Props extends RouteComponentProps<any> {
  getDraws(): void,
  selectDraw(draw: Draw): void,
  draws: Array<Draw>,
}

class DrawList extends React.Component<Props, {}> {
  
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

const bindActionsToDispatch = (dispatch: Dispatch<StoreState>) => ({
  getDraws: () => {
    bindActionCreators(getDraws, dispatch)
  },
  selectDraw: () => {
    bindActionCreators(selectDraw, dispatch)
  }
})

export default withRouter(connect<{}, {}, Props>(mapStateToProps, bindActionsToDispatch)(DrawList))

