import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
