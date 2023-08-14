import React from "react";

import "./Assets/Fonts/poppins/stylesheet.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import Login from "./Presentation/Pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Infrastructure/Utilities/Redux/Slices/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
