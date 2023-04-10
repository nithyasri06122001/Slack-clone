import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Thread from "./components/Menu/Thread";
import BasicModal from "./components/Backdrop";
import Slidebar from "./components/Slidebar";

function App(props) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__body">
              <Slidebar />
              <Routes>
                <Route path="/Threads" element={<Thread />} />
                <Route path="/room/:roomId" element={<Chat />} />
                {/* <Chat /> */}
                <Route path="/" element={<h1>Welcome</h1>} />
                <Route path="/addChannel" element={<BasicModal />} />

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
