import React from 'react';
import {
  Button,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider,
  Segment,
  Modal,
  Input,
  Image
} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';

const seatOptions = [
  { key: 'window', text: 'Window', value: 'Window' },
  { key: 'mid', text: 'Middle', value: 'Middle' },
  { key: 'aisle', text: 'Aisle', value: 'Aisle' },
]

const mealOptions = [
  { key: 'hvgml`', text: 'Hindu Veg Meal', value: 'Hindu Veg Meal' },
  { key: 'hnvgml', text: 'Hindu Non Veg Meal', value: 'Hindu Non Veg Meal' },
  { key: 'avgml', text: 'Asian Veg Meal', value: 'Asian Veg Meal' },
]
const styles = {
  slideContainer: {
    // padding: '0 10px',
    width:'75%'
  }
};

export default class SelectedFlightModal extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <Modal open={this.props.modalOpenState} size='small' >
        <Header style={{marginTop:'10px'}}>
        <center>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <center>
                <span className='accronym'>LAX</span>
              </center>
            </Grid.Column>
            <Grid.Column width={7}>
              <center>
                <Icon name='plane' color='red' className='journeySymbol'/>
              </center>
            </Grid.Column>
            <Grid.Column width={4}>
              <center>
                <span className='accronym'>DEN</span>
              </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </center>
        </Header>
        <Modal.Content>
        <Segment  style={{backgroundColor:'#800000'}}>
            <Dropdown placeholder='Seat Prefrences'  fluid selection options={seatOptions} />
            <br/>
            <Dropdown placeholder='Meal Prefrences'  fluid selection options={mealOptions} />
            <br/>
            <Input icon='calendar' iconPosition='left' placeholder='Journey Date' value='25 Dec 17'/>
            <Icon name='checkmark' size='large' color='green' style={{marginLeft :'10px'}}/>
            <br/>
            <br/>
            <Input fluid icon='hotel' iconPosition='left' placeholder='Select Hotel' />
            <br/>
            <SwipeableViews slideStyle={styles.slideContainer}>
                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='../../client/assets/images/hotel1.jpeg' />
                  <Card.Content>
                    <Card.Header>
                      Palazzo Hotel
                    </Card.Header>
                  </Card.Content>
                </Card>

                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='../../client/assets/images/hotel2.jpeg' />
                  <Card.Content>
                    <Card.Header>
                      Hilton Anatole
                    </Card.Header>
                  </Card.Content>
                </Card>


                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='../../client/assets/images/hotel3.jpeg' />
                  <Card.Content>
                    <Card.Header>
                      Marriott Hotel
                    </Card.Header>
                  </Card.Content>
                </Card>


                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='../../client/assets/images/hotel4.jpeg' />
                  <Card.Content>
                    <Card.Header>
                      Continental Hotel
                    </Card.Header>
                  </Card.Content>
                </Card>

            </SwipeableViews>
            <br/>
            <Input fluid icon='car' iconPosition='left' placeholder='Select Cab' />
            <br/>
            <SwipeableViews slideStyle={styles.slideContainer}>
                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image  src='https://pbs.twimg.com/media/C4E_9uYXUAQ43Sd.jpg' />
                  <Card.Content>
                    <Card.Header>
                      Hertz Cab Rental
                    </Card.Header>
                  </Card.Content>
                </Card>

                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='https://writingmachine.com/wp-content/uploads/2016/05/logo-national-featured-540x272.jpg' />
                  <Card.Content>
                    <Card.Header>
                      National Cab Rental
                    </Card.Header>
                  </Card.Content>
                </Card>


                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image style={{margin:'3px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3xEtADdYwzip_r039H67anjrRgLXNQJQlj5HlMOHISz18ySc' />
                  <Card.Content>
                    <Card.Header>
                      Budget Cab Rental
                    </Card.Header>
                  </Card.Content>
                </Card>


                <Card style={{width:'85%',boxShadow:'none',border:'none'}}>
                  <Image src='https://media.staticontent.com/media/pictures/a8199306-9c4a-4432-8983-c7415f0eb7da' />
                  <Card.Content>
                    <Card.Header>
                      Thrifty Cab Rental
                    </Card.Header>
                  </Card.Content>
                </Card>

            </SwipeableViews>
            <br/>
            <Input fluid icon='credit card alternative' iconPosition='left' placeholder='Card Details' />
            <br/>
            </Segment>

        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={()=>this.props.handleModal()} >
            <Icon name='checkmark'/>
            Confirm Booking
          </Button>
          <Button color='red'  onClick={()=>this.props.handleModal()} >
            <Icon name='remove'/>
            close the window
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
