import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header'
import UsersList from './screens/UsersList'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <UsersList />
    </Fragment>
  );
}

export default App