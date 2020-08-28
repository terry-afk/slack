import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Chat from "./component/chat";

function App() {
  return (
      <div className="App">
          <Router>
              <Header />
              <div className="app__body">
                  <Sidebar />
                  <Switch>
                      <Route path="/room/:roomId">
                          <Chat />
                      </Route>
                      <Route path="/">
                          <h1>Welcome</h1>
                      </Route>
                  </Switch>
                  {/* React-Router -> Chat screen */}
              </div>
          </Router>
      </div>
  );
}

export default App;
