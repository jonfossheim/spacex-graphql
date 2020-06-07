import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import Frontpage from './pages/Frontpage';
import LaunchSpecific from './pages/LaunchSpecific';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: '/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact component={Frontpage} />
          <Route path="/launch/:flight_number" component={LaunchSpecific} />
        </Switch>
      </App>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
