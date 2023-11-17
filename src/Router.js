import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//
import Header from "./components/header";
import Footer from "./components/footer";


import Welcome from "./components/welcome";

import Login from "./components/login";
import Offer from "./components/offer";
import Paymethod from "./components/paymethod";


const Router = () => {
    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route exact path='/' element = {<Welcome/>}/>
                <Route exact path='/login' element = {<Login/>}/>
                <Route exact path='/offer' element = {<Offer/>}/>
                <Route exact path='/paymethod' element = {<Paymethod/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>


    );

}
export default Router;