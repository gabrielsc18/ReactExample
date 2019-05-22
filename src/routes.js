//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import App from './components/App';
import Details from './components/Details';
import Results from './components/Results';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () => 
<App>
    <Switch>     
        <Route exact path="/items" search="?search=:query" component={Results} />
        <Route exact path="/items/:id" component={Details}/>
        <Route exac path="/" component={Home}/>
        <Route component={Page404}/>
    </Switch>
</App>;

export default AppRoutes;