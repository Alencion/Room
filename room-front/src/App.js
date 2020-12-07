import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './routes/Main'
import Login from './routes/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
