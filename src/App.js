import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {

const [{user},dispatch]=useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) 
        :(
          <>
          <Header />
         <div className="app__body">
          <Sidebar />
         <Routes>
          <Route path="/room/:roomId" element={<Chat />}/> 
            {/* <Chat /> */}
          <Route path="/" element={<h1>Welcome</h1>}/>
            {/* <h1>Welcome to slack</h1> */}
        </Routes>
      </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
