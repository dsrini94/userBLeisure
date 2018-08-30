import React from 'react';
import {
  Button,
  Card,
  Icon,
  Image,
  Header,
  Grid,
  Input,
  Dropdown,
  Form
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

const titleOptions = [
  {
    key: 'mr',
    text: 'Mr',
    value: 'Mr'
  }, {
    key: 'mrs',
    text: 'Mrs',
    value: 'Mrs'
  }, {
    key: 'miss',
    text: 'Miss',
    value: 'Miss'
  }, {
    key: 'ms',
    text: 'Ms',
    value: 'Ms'
  }, {
    key: 'Mstr',
    text: 'Mstr',
    value: 'Mstr'
  }, {
    key: 'capt',
    text: 'Capt',
    value: 'Capt'
  }, {
    key: 'prof',
    text: 'Prof',
    value: 'Prof'
  }, {
    key: 'Dr',
    text: 'Dr',
    value: 'Dr'
  }, {
    key: 'Lady',
    text: 'Lady',
    value: 'Lady'
  }, {
    key: 'Lord',
    text: 'Lord',
    value: 'Lord'
  }, {
    key: 'Hon',
    text: 'The Rt Hon',
    value: 'The Rt Hon'
  }, {
    key: 'rabbi',
    text: 'Rabbi',
    value: 'Rabbi'
  }, {
    key: 'rev',
    text: 'Rev',
    value: 'Rev'
  }, {
    key: 'sir',
    text: 'Sir',
    value: 'Sir'
  }, {
    key: 'bar',
    text: 'Baroness',
    value: 'Baroness'
  }, {
    key: 'baron',
    text: 'Baron',
    value: 'Baron'
  }, {
    key: 'vis',
    text: 'Viscount',
    value: 'Viscount'
  }, {
    key: 'Vis',
    text: 'Viscountess',
    value: 'Viscountess'
  }
]

export default class Test extends React.Component {
  render() {
    return (<div className="imgHeight vhsidebar">
      <Grid >
        <Grid.Row only='mobile'>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <center >
              <br/>
              <span className="RegPageCompanyName">Signup</span>
              <br/>
              <br/>
              <br/>
            </center>
            <Form>
            <Form.Field>
              <label className="subheaders" style={{color:"white"}}>Title *</label>
              <Dropdown placeholder='Title' fluid selection options={titleOptions} style={{opacity:"0.6"}}/>
            </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Name *</label>
                <input placeholder='First Name' style={{opacity:"0.6"}}/>
                <input placeholder='Last Name' style={{opacity:"0.6",marginTop:'10px'}} />
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Date of Birth *</label>
                <input placeholder='DOB' type="date" style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Country of Residence *</label>
                <input placeholder='Country' style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Preferred Language *</label>
                <input placeholder='Preferred Language' style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Phone Number</label>
                <input placeholder='Phone' style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Email</label>
                <input placeholder='Email' style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Password</label>
                <input placeholder='Password' type="password" style={{opacity:"0.6"}}/>
              </Form.Field>
              <Form.Field>
                <label className="subheaders" style={{color:"white"}}>Confirm Password</label>
                <input placeholder='Password' type="password" style={{opacity:"0.6"}}/>
              </Form.Field>
              <center>
              <Link to='/'>
              <Button type='submit' inverted >Create an Account</Button>
              </Link>
              </center>
              <br/>
            </Form>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
  }
}
