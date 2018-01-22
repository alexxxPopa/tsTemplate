import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import configureStore from './store';

const store = configureStore()

class App extends React.Component{
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <Switch>
               { routes.map( route => (
                <Route key = { route.path }{... route } />
              ))
              }
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
