import React from 'react'
import {Input,Grid,Button,Icon,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class NewLogin extends React.Component
{
  render()
  {
    return(
      <div className="vhsidebar" style={{background:"url('./../../images/blur.jpg')",overflow:"hidden"}}>
      <div >
        <Grid >
          <Grid.Row only='mobile'>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <center >
                <br/>
                <br/>
                <br/>
                <br/>
                <span className="LoginPageCompanyName">Airlines</span>
                <br/>
                <br/>
                <Header as='h3' className="UserLogin" inverted style={{
                    marginTop:"30%"
                  }}>User Login</Header>
                <br/>
                <Input fluid  icon='user' iconPosition='left'  placeholder='User id' style={{opacity:"0.6"}}/>
                <br/>
                <Input fluid type='password' icon='lock' iconPosition='left' placeholder='password' style={{opacity:"0.6"}}/>
                <br/>
                <br/>
                <Link to='/homepage'><Button inverted circular icon='arrow right'/></Link>
                <br/>
                <br/>
                <Link to='/register'>
                  <span className="newUserSpan">New User</span>
                </Link>
                <span className="dividerSpan" style={{
                    color: 'white',
                    marginLeft: '7px',
                    marginRight: '5px'
                  }}>|</span>
                <span className="passwordSpan" style={{
                    color: 'white',
                    marginLeft: '5px'
                  }}>Forgot password?</span>
              </center>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div>
        <Grid>
          <Grid.Row only='mobile'>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={10}>
              <center>
                <Segment style={{padding:"0.5px"}}></Segment>
                <Button circular color='facebook' icon='facebook' style={{
                    marginRight: '10px'
                  }}/>
                <Button circular color='twitter' icon='twitter' style={{
                    marginRight: '10px'
                  }}/>
                <Button circular color='google plus' icon='google plus'/>
              </center>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </div>
    )
  }
}
