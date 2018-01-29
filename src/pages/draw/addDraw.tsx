import * as React from 'react';
import * as Datetime from 'react-datetime';
import * as moment from 'moment';
import { addDraw, DrawAction } from '../../modules/draw'
import { connect } from 'react-redux';
import { StoreState } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';

interface State {
  drawStart: number
}

interface Props {
  addDraw:(value: number) => void
}
 
class AddDraw extends React.Component<Props, State> { 

  constructor(props: Props) {
    super(props)
    this.state = {
      drawStart: 0
    }
  }

  onInputChange = (param: any) => {
    let timestamp = param.toDate()/1000
    this.setState ({
      drawStart: timestamp
    })
  }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.addDraw(this.state.drawStart)
    this.setState ({
      drawStart:0
    })
  }

  render() {
    return (
      <form onSubmit = { event => this.onFormSubmit(event)}>
        <Datetime onChange={ param => this.onInputChange(param)}/> 
        <span>
          <button type="submit">
            Submit
          </button>
        </span>
      </form>
    ) 
  }
}


const bindActionsToDispatch = (dispatch: Dispatch<StoreState>): Props => ({
  addDraw: (value: number) => {
   bindActionCreators(addDraw, dispatch)
  }
})

export default connect<{}, Props, State, StoreState>(null, bindActionsToDispatch)(AddDraw)