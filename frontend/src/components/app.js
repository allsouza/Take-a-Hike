import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modals/modal';
import MainPage from './main/main_page';
import Footer from './footer/footer'
<<<<<<< HEAD
import DashBoard from './dashboard/dashboard_container'
import ImageUploadContainer from './image_upload/image_upload_container.jsx';
=======
import ListIndexContainer from './lists/list_index_container';
import DashBoard from './dashboard/dashboard_container'
>>>>>>> master

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path='/lists' component={ListIndexContainer} /> {/* REMOVE AFTER TESTING */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
<<<<<<< HEAD
            {/* <AuthRoute path='/dashboard' component={DashBoard}/> */}
            <Route exact path='/images' component={ImageUploadContainer} />
        </Switch>
        <Route  path='/dashboard' component={DashBoard}/>
        <Route path="/" component={MainPage} />  
=======
            <Route path="/" component={MainPage} />  
            {/* <AuthRoute path='/dashboard' component={DashBoard}/> */}
        </Switch>
        <Route path='/dashboard' component={DashBoard}/>
>>>>>>> master
        <Route path="/" component={Footer} />
        
    </div>
);

export default App;