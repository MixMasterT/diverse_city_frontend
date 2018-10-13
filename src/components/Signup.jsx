import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Input } from 'reactstrap';
// import { fetchWeather } from '../actions/weatherActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username || '',
      password: '',
      passwordVerify: '',
      phone: ''
    }
    this.postUser = this.postUser.bind(this);
  }

  postUser() {
    this.props.postUser(this.state);
  }

  render() {
    return (
      <Form className="signup">
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" placeholder="Username" />
        </FormGroup>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weatherReducer.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => dispatch(fetchWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
