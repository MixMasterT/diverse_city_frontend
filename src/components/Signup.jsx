import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button } from 'reactstrap';
import { postUser } from '../actions/userActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        password: '',
        confirmPassword: '',
        phone: '',
      },
      errors: {}
    }
    this.postUser = this.postUser.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  postUser(e) {
    e.preventDefault();
    const user = this.state.user;
    const errors = {}
    // Validate
    if(user.phone.length < 10) {
      errors.phone = 'Phone number must be 10 digits'
    }
    if(user.password.length < 4) {
      errors.password = 'Password must be at least 4 characters';
    }

    if(Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.setState({ error: {} }, () => {
        // Send
        this.props.postUser(user);
      });
    }
  }

  updatePhoneNumber(e) {
    e.preventDefault();
    const str = e.target.value;
    let phone = str.replace(/\D/g, '') || '';
    if(phone.length > 10) {
      phone = phone.slice(0, 10);
    }
    const user = this.state.user;
    user.phone = phone;
    this.setState({ user });
  }

  updateField(fieldName) {
    return (e) => {
      const user = this.state.user;
      user[fieldName] = e.target.value;
      this.setState({ user });
    }
  }

  render() {
    const user = this.state.user
    const passwordMisMatch = user.password.length > 0 &&
                              user.confirmPassword.length > 0 &&
                              user.password !== user.confirmPassword
    let passwordAlert = '';
    let phoneAlert = '';
    const errors = this.state.errors;
    if(errors.phone) {
      phoneAlert = <Alert color="danger">{errors.phone}</Alert>
    }
    if(passwordMisMatch) {
      passwordAlert = <Alert color="danger">Passwords do not match!</Alert>
    } else if(errors.password) {
      passwordAlert = <Alert color="danger">{errors.password}</Alert>
    }
    function formatPhone(number) {
      if(number.length < 1) {
        return ''
      } else if (number.length < 4) {
        return `(${number}`;
      } else if (number.length < 7) {
        return `(${number.slice(0,3)})${number.slice(3)}`;
      }
      return `(${number.slice(0, 3)})${number.slice(3, 6)}-${number.slice(6, 10)}`;
    }
    return (
      <Form className="signup">
        {phoneAlert}
        <FormGroup>
          <Label for="username">Phone Number</Label>
          <Input
            type="text"
            placeholder="Phone Number"
            onChange={this.updatePhoneNumber}
            value={formatPhone(this.state.user.phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            onChange={this.updateField('password')}
            value={this.state.user.password}
          />
        </FormGroup>
        {passwordAlert}
        <FormGroup>
          <Label for="confirmPassword">Verify Password</Label>
          <Input
            type="password"
            placeholder="Password"
            onChange={this.updateField('confirmPassword')}
            value={this.state.user.confirmPassword}
          />
        </FormGroup>
        <Button onClick={this.postUser}>Register</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  error: state.errorReducer.error,
});

const mapDispatchToProps = dispatch => ({
  postUser: (user) => dispatch(postUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
