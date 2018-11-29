import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import ObjectiveCard from './ObjectiveCard'
import SideBar from './SideBar';
import Login from './Login'
import Signup from './Signup'

export default class MainPage extends React.Component{

render(){
    return <div>
        <Grid columns={ 2 } divided>
            <Grid.Row>
                <Grid.Column width={ 12 }>
                    HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
                    <br/><br/>
                    Here's a few components ready for use (ignore the distance, it is deliberate):
                    <Signup></Signup>
                    <Login></Login>
                </Grid.Column>

                <Grid.Column width={ 4 }>
                    <SideBar></SideBar>
                </Grid.Column>
            </Grid.Row>
        </Grid>


    </div>

}


}