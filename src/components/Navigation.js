import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import App from "./App";
import Card from "./Cards";
import Booking from "./Booking";
import NotFound from "./NotFound";
import APItest from "./APItest";


const Navigation = ()=> {

    return (

        <div>
            <BrowserRouter>
            
            <Header />
            <APItest />
            <Switch>
            <Route path="/" component={App} exact   ></Route>
            <Route path ="/card" component= {Card} exact></Route>

            <Route  render={(props)=>{
                return   <Booking />}} >
              </Route>

            <Route component= {NotFound} exact></Route>
            </Switch>
            </BrowserRouter>
        
        </div>


    )


}

export default Navigation;