import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import Home from "./home";
import RegistrationForm from "./Register";
import ListUsers from "./ListUser";
import ErrorPage from "./Error";
import AccountInfoPage from "./MyAccount";
// Routing from page to page
export default function Routed() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/Register" element={<RegistrationForm />} />
                <Route path="/List" element={<ListUsers />} />
                <Route path="/MyAccount" element={<AccountInfoPage />} />
                <Route path="/Error" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
