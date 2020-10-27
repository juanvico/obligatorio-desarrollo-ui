import React, { useEffect } from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import { withCookies } from 'react-cookie';
import Auth from './components/Auth/Auth';
import { Typography } from '@material-ui/core';

const Routes = (props) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('authorization');
    if (!token) {
      if (props.match.pathname === '/' || props.location.pathname === '/') {
        history.push('/auth/login');
      }
    } else {
      if (
        props.match.pathname === '/auth/login' ||
        props.match.pathname === '/auth/signup' ||
        props.location.pathname === '/auth/login' ||
        props.location.pathname === '/auth/signup'
      ) {
        history.push('/');
      }
    }
  }, [history, props.match, props.location]);

  return (
    <>
      <Switch>
        {localStorage.getItem('authorization') ? (
          <>
            <Route path="/" component={Home} />
          </>
        ) : (
          <>
            <Route path="/auth" component={Auth} />
          </>
        )}
        <Route
          component={() => (
            <Typography align="center" variant="h4">
              Page not found.
            </Typography>
          )}
        />
      </Switch>
    </>
  );
};

export default withRouter(withCookies(Routes));
