//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contacts';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () => 
<App>
    <Switch>
        <Route exac path="/about" component={About}/>
        <Route exac path="/contact" component={Contact}/>
        <Route exac path="/" component={Home}/>
        <Route component={Page404}/>
    </Switch>
</App>;

export default AppRoutes;