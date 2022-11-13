import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import { useStateValue } from "./Provider/StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Routes>
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Sidebar />
                    <Chat />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Sidebar />
                    <Chat />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;

// <Routes>
//         <Route
//           path="/login"
//           element={
//             <>
//               <Login />
//             </>
//           }
//         />
