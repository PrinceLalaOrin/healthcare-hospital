import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../about/About';
import Booking from '../Booking/Booking/Booking';
import Home from '../Home/Home';
import Services from '../Home/Services/Services';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Contact from '../Contact/Contact';

import OurDr from '../OurDr/OurDr';
const RoutingList = () => {
    return (
        <div>
            <Switch>
                 
                <Route exact path = '/'> <Home></Home> </Route>
                
                <Route path = '/home'> <Home></Home> </Route>
                
                <Route path = '/about'> <About></About> </Route>
                
                <Route path = '/contact'> <Contact></Contact> </Route>

                <Route path = '/doctors'> <OurDr></OurDr> </Route>
               
                <PrivateRoute path='/booking/:serviceId'> <Booking></Booking> </PrivateRoute>

                <Route path ='/services'> <Services></Services> </Route>

                <Route path ='/login'> <Login></Login> </Route>
         
                <Route path='*'> <NotFound></NotFound> </Route>
            </Switch>
        </div>
    );
};

export default RoutingList;