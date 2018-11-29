import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import ObjectiveCard from './ObjectiveCard'
import SideBar from './SideBar';
import Login from './Login'
import Signup from './Signup'
import PieChart from 'react-minimal-pie-chart'


export default class MainPage extends React.Component{

render(){
    return <div>
        
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */}
        <Grid columns={ 2 } divided>
            <Grid.Row>
                <Grid.Column width={ 12 }>
                    HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
                    
           <PieChart lineWidth='10' size='small' ratio="1" style={ { "height": "300px" } }
                        data={ [
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ] }
                    />
               
                    Library to use for graphs later: <a href='https://reactjsexample.com/lightweight-but-versatile-svg-pie-doughnut-charts-for-react/'> here </a>
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