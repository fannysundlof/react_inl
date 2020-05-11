import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import App from "./App";
import Products from './Products';
import Admin from './Admin';
import Booking from "./Booking";
import NotFound from "./NotFound";





const Navigation = ()=> {

    return (

        <div>
            <BrowserRouter>
             <Header />
                    <Switch>
                    <Route path="/" component={App} exact   ></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path ="/admin" component= {Admin} exact></Route>
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