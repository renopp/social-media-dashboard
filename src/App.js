import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import UsersList from './screens/UsersList'
import UserProfile from './screens/UserProfile'

function App() {
  return (
    <div style={{display: 'flex',flexDirection: 'column'}}>
      <CssBaseline />
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/users" component={UsersList} />
            <Route path="/user/:id/:page" component={UserProfile} />
            <Route path="/user/:id" component={UserProfile} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App