import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Admin from '../pages/admin/index'
import Purchased from '../pages/Purchased'
import LoginControl from '../pages/Login/LoginControl'
import Signup from '../pages/Login/Signup'


const Routes = ()=>{
    return (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/detail" component={Cart}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/purchased" component={Purchased}/>
        <Route path="/login-control" component={LoginControl}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
    );
}

export default Routes