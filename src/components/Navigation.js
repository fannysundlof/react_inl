import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Pages/Header";
import App from "./Pages/App";
import Products from './Pages/Products';
import Admin from './AuthAdmin/Admin';
import Booking from "./Pages/Booking";
import NotFound from "./Pages/NotFound";


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