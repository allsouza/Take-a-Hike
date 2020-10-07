import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modals/modal';
import MainPage from './main/main_page';
import Footer from './footer/footer'
import ListIndexContainer from './lists/list_index_container';
import DashBoard from './dashboard/dashboard_container'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path='/lists' component={ListIndexContainer} /> {/* REMOVE AFTER TESTING */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={MainPage} />  
            <ProtectedRoute path='/dashboard' component={DashBoard}/>
        </Switch>
        <Footer />
    </div>
);

export default App;