import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./pages/Signin";



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path="/" element={<Signin/>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
