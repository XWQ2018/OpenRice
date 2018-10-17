import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
//引入组件
import Home from './component/Home';
import Login from './component/Login';
import CreateUser from './component/createUser';
import CityFood from './component/cityFood';
import Nofound from './component/Nofound';
import CityFoodList from './component/cityFoodList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/createUser' component={CreateUser}></Route>
          <Route path='/cityFood' component={CityFood}></Route>
          <Route path='/cityFoodList' component={CityFoodList}></Route>
          <Route path='\/' component={Home} exact></Route>
          <Route path='*' component={Nofound}></Route>
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
