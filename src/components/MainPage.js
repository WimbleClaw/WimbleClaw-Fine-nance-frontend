import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import ObjectiveCard from './ObjectiveCard'
import SideBar from './SideBar';


export default class MainPage extends React.Component{

render(){
    return <div>
        <Grid columns={ 2 } divided>
            <Grid.Row>
                <Grid.Column width={ 12 }>
                    HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
                </Grid.Column>

                <Grid.Column width={ 4 }>
                    <SideBar></SideBar>
                </Grid.Column>
            </Grid.Row>
        </Grid>


    </div>

}


}