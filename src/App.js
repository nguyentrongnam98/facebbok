import React from "react"
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/SIdebar'
import Feed from '../src/components/Feed/Feed'
import Widget from "./components/Widget/Widget";
import Login from './components/Login/Login';
function App() {
  const user = 0
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
