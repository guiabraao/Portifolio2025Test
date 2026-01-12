import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Home from '../Pages/Home/index'
import AboutMe from '../Pages/AboutMe/index'
import Projetos from "../Pages/Projetos";
import Contato from '../Pages/Contato'

export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} ></Route> 
                <Route path='/sobremim' element={<AboutMe />} ></Route> 
                <Route path='/projetos' element={<Projetos />} ></Route> 
                <Route path='/contato' element={<Contato />} ></Route> 
            </Routes>
        </>
    )
}