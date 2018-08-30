import React from 'react';
import {
  Card,
  Button,
  Image,
  Grid,
  Icon,
  Segment,
  Divider
} from 'semantic-ui-react'
export default class UpcommingTravelCard extends React.Component {
  render() {
    return (<div>
      <Segment style={{
          boxShadow: 'none',
          border: 'none'
        }}>
        <Card fluid color='red'>
          <Card.Content>
            <Card.Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <span style={{color:'#800000'}}>Thursday,Dec 14 2017</span>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{margin:'0px'}}>
                  <Grid.Column width={3}>
                    <center>
                      <span className='accronym' style={{fontSize:'15px'}}>BOS</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <center>
                      <Icon name='plane' color='red' size='large' />
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <center>
                      <span className='accronym' style={{fontSize:'15px'}}>LGA</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={7}>
                      <span className='accronym' style={{color:'#800000',float:'right'}}>$ 600</span>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row style={{
                    marginTop: '-20px'
                  }} >
                  <Grid.Column width={3}>
                    <center>
                      <span style={{fontSize:'12px'}}>10.55 AM</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <center>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <center>
                      <span style={{fontSize:'12px'}}>18.00 PM</span>
                    </center>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Header>

            <Card.Description>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Segment inverted style={{
              padding: '1px',
              marginTop: '-12px'
            }}></Segment>
            <Grid >
            <Grid.Row>
              <Grid.Column width={3}>
                <center>
                <Icon className='metaData' name='building' size='big' />
                <span className='metaData'style={{fontSize:'12px'}} >Continental</span>
                </center>
              </Grid.Column>
              <Grid.Column width={9}>
                <center>
                <span className='metaData' style={{fontSize:'12px'}}>12 Dec - 13 Dec</span><br/>
                <span className='metaData' style={{fontSize:'12px'}}>
                  Polito Ave, Lyndhurst</span>
                </center>
              </Grid.Column>
              <Grid.Column width={4}>
                <center>
                  <span className='accronym' style={{color:'#800000'}}>$ 600</span>
                </center>
              </Grid.Column>
            </Grid.Row>
            </Grid>
            <Segment inverted style={{
                padding: '1px',
                margin: '10px'
              }}></Segment>
              <Grid >
                <Grid.Row style={{
                    margin: '0px'
                  }}>
                  <Grid.Column width={3}>
                    <center>
                    <Icon className='metaData' name='taxi' size='big' />
                    <span className='metaData' >Hertz</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <center>
                    <span className='metaData' style={{
                        marginTop: '10px',fontSize:'12px'
                      }}>Pick-up   </span>
                    <span className='metaData' style={{
                        marginBottom: '5px',fontSize:'12px'
                      }}>14.00-12/22/17</span>
                    <br/>
                    <span className='metaData' style={{
                        marginBottom: '5px',fontSize:'12px'
                      }}>Drop  </span>
                    <span className='metaData' style={{fontSize:'12px'}}>14.00-13/22/17</span>
                    <br/>
                    <span className='metaData' style={{fontSize:'12px'}}>
                      Polito Ave, Lyndhurst</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={4}>
                      <span className='accronym' style={{color:'#800000',float:'right',textDecoration:'bold'}}>$ 600</span>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            <Button inverted fluid style={{
                marginTop: '3%',
                float: 'right',
                backgroundColor: '#800000'
              }}>1 Click Book</Button>
          </Card.Content>
        </Card>
      </Segment>
    </div>
  );
  }
}
