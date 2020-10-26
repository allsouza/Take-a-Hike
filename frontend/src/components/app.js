import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modals/modal';
import MainPage from './main/main_page';
import Footer from './footer/footer';
//import Map from './trails/map';
import ListIndexContainer from './lists/list_index_container';
import ReviewIndexContainer from './reviews/review_index_container';
import TrailsIndexContainer from './trails/trail_index_container';
import Map from './trails/map_container';
import DashBoard from './dashboard/dashboard_container'
import TrailShowContainer from './trails/trail_show_container';

const App = () => (
    <div>
        <Modal />
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />  
            <ProtectedRoute path='/dashboard' component={DashBoard}/>
            <ProtectedRoute exact path="/trails/:id" component={TrailShowContainer} />
            <ProtectedRoute exact path='/map' component={Map}/>
        </Switch>
    </div>
);

export default App;