import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'



export default class MainPage extends React.Component{

render(){
    return <div>
        <Grid columns={ 2 } divided>
            <Grid.Row>
                <Grid.Column width={ 12 }>
                    HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
                </Grid.Column>
                
                <Grid.Column width={ 4 }>
                    <Segment style={ { overflow: 'auto', maxHeight: 10 } }>
                    THIS IS WHERE ED WILL MAKE A CRISPY SIDEBAR
                    </Segment> 
                </Grid.Column>
            </Grid.Row>
        </Grid>


    </div>

}


}