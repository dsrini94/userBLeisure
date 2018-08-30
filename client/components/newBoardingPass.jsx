import React from 'react';
import { Card, Icon, Image,Header,Grid } from 'semantic-ui-react';

export default class Test extends React.Component {
  render() {
    return (<Card style={{
        backgroundColor: "#2a2d33"
      }}>
      <Image src='./../../images/boardingpass.jpg'/>

      <Grid style={{position:"absolute",marginTop:"65px",marginLeft:"20px"}}>
        <Grid.Row>
          <Grid.Column width={5}>
          <center>
          <Header as='h2' style={{color:'white'}}>DFW</Header>
          </center>
          </Grid.Column>
          <Grid.Column width={6}>
          <center>
          <Icon name='long right arrow' size='large' style={{color:"white",marginLeft:"15px"}}/>
          </center>
          </Grid.Column>
          <Grid.Column width={5}>
          <Header as='h2' style={{color:'white'}}>PHX</Header>
          </Grid.Column>
         </Grid.Row>
         </Grid>
      <Card.Content style={{marginLeft:"25px"}}>
        <Card.Meta>
        <Header as='h6' inverted="inverted" style={{margin:"0px",color:"#ced4e0"}}>Passenger</Header>
        <Header as='h1' inverted="inverted" style={{margin:"0px"}}>Claire</Header>
        </Card.Meta>
        <br/>
        <Card.Description>
        <Header as='h6' inverted="inverted" style={{margin:"0px",color:"#ced4e0"}}>Flight</Header>
        <Header as='h1' inverted="inverted" style={{margin:"0px"}}>XX103</Header>
        <Header as='h6' floated="right" inverted="inverted" style={{marginTop:"-45px",marginRight:'75px',color:"#ced4e0"}}>Seat</Header>
        <Header as='h1' floated="right" inverted="inverted" style={{marginTop:"-35px",marginRight:'60px'}}>3D</Header>
        <Header as='h6' inverted="inverted">Flight</Header>
        </Card.Description>
      </Card.Content>
      <Card.Content extra="extra">
        <a>
          <Icon name='user'/>
          22 Friends
        </a>
      </Card.Content>
    </Card>);
  }
}
