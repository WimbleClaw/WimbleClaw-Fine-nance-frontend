import React from "react";
import {Route, Switch} from 'react-router-dom'
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";

import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import SpendingPage from "./SpendingPage";
import HomePage from "./HomePage";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
          <Switch>
        {/* userLoggedin is false? 
        
    
    
    
           otherwise    */}
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/Signup' component={ Signup } />
            
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={12}>
              <SpendingPage />
            </Grid.Column>
            <Grid.Column width={4}>
              <SideBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        </Switch>
      </div>
    );
  }
}
