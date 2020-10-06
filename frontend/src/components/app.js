import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPage from './main/main_page';
import Footer from './footer/footer'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route path="/" component={MainPage} />  
        <Route path="/" component={Footer} />
    </div>
);

export default App;