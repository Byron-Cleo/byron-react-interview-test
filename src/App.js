import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutOne from './components/LayoutOne';
import HomeScreen from './screens/HomeScreen';
import MostViewedListScreen from './screens/MostViewedListScreen';
import MostViewedDetailScreen from './screens/MostViewedDetailScreen';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path={['/most-viewed/:id/details', '/most-viewed-articles', '/']}
          >
            <LayoutOne>
              <Switch>
                <Route
                  path="/most-viewed/:id/details"
                  component={MostViewedDetailScreen}
                />
                <Route
                  path="/most-viewed-articles"
                  component={MostViewedListScreen}
                />
                <Route path="/" component={HomeScreen} />
              </Switch>
            </LayoutOne>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
