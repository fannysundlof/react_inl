import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header";
import App from "./App";
import Card from "./Cards";
import Booking from "./Booking";
import NotFound from "./NotFound";
import Apitest from "./APItest";


const Navigation = ()=> {

    return (

        <div>
            <BrowserRouter>
            <Header />
            <Apitest />
            <Route path="/" component={App} exact   ></Route>
            <Route path ="/card" component= {Card} exact></Route>

            <Route  render={(props)=>{
                return   <Booking />}} >
              </Route>



            <Route path="/*"  component= {NotFound} exact></Route>
            
            </BrowserRouter>
        
        </div>


    )


}

export default Navigation;