import React from 'react';
import styled from 'styled-components';
import Login from './components/feature/Login';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./components/feature/Chat";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Body>
            <Sidebar/>
            <Switch>
              <Route exact={true} path="/">
                <Chat/>
              </Route>
              <Route path="/login">
                <Login /> 
              </Route> 
            </Switch>
          </Body>
      </Router>
    </div>
  );
}

export default App;
const Body = styled.div`
  height: 100vh;
  display: flex;
`;