import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./views/Home";
import { Register } from "./views/Register";
import { UserArea } from "./views/UserArea";


export const MyRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />      
            <Route path="/user" element={<UserArea />} />
        </Routes>
    )
}