import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modals/modal';
import MainPage from './main/main_page';
import Footer from './footer/footer'
import DashBoard from './dashboard/dashboard_container'

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <AuthRoute path='/dashboard' component={DashBoard}/> */}
        </Switch>
        <Route  path='/dashboard' component={DashBoard}/>
        <Route path="/" component={MainPage} />  
        <Route path="/" component={Footer} />
        
    </div>
);

export default App;