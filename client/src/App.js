import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Register, Login, Dashboard } from "./pages";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;
