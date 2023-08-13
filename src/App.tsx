import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import Login from "./Presentation/Pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Infrastructure/Utilities/Redux/Slices/Store";
import Admin from "./Presentation/Pages/Admin/Admin";
import User from "./Presentation/Pages/Home/User";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/user" element={<User />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
