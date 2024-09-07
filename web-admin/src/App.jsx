import React from "react";  
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Sử dụng BrowserRouter  
import Home from "./pages/Home";  
import Login from "./pages/Auth/Login";  
import PrivateRoute from './pages/Auth/PrivateRoute';  

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/login" element={<Login />} />  
        <Route path="/home/*" element={<PrivateRoute component={Home} />}/>
        <Route path="/" element={<Navigate to="/home" />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;