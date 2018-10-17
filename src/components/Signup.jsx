import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalFooter } from 'reactstrap';
import { postUser } from '../actions/userActions';
import { resolveError } from '../actions/errorActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.pageText = {
      //TODO: Change these to appropriate terms to interpolate text on page.
      selectLanguage: 'Select Language',
      preferredLanguage: 'Your preferred language',
      filterLanguages: 'Filter Languages',
      clearFilter: 'Clear Filter',
      language: 'Language',
      success: 'Success',
      youSelected: 'You have selected',
      asPreferred: 'as your preferred language',
      moveOn: 'Continue',
      chooseDifferent: 'Choose a different language',
      selectedLanguage: this.props.language ? this.props.language.name : null
    };
    
    this.state = {
      user: {
        password: '',
        confirmPassword: '',
        phone: '',
      },
      errors: {}
    };
    this.postUser = this.postUser.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.updateField = this.updateField.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.resolveAlert = this.resolveAlert.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  validateUser() {
    const user = this.state.user;
    const errors = {};
    if(user.phone.length < 10) {
      errors.phone = 'Phone number must be 10 digits'
    }
    if(user.password.length < 4) {
      errors.password = 'Password must be at least 4 characters';
    }
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  postUser(e) {
    e.preventDefault();
    const user = this.state.user;
    const errors = {}
    if(this.validateUser()) {
      this.props.postUser(user, this.props.history);
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
      e.preventDefault()
      const user = this.state.user;
      user[fieldName] = e.target.value;
      this.setState({ user });
    }
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  resolveAlert() {
    this.setState({
      user: {
        password: '',
        confirmPassword: '',
        phone: '',
      },
      errors: {}
    });
    this.props.resolveError();
  }

  render() {
    const user = this.state.user
    const passwordMisMatch = user.password.length > 0 &&
                              user.confirmPassword.length > 0 &&
                              user.password !== user.confirmPassword
    let passwordAlert = '';
    let phoneAlert = '';
    let userErrorAlert = '';
    const errors = this.state.errors;
    if(errors.phone && this.state.user.phone.length < 10) {
      phoneAlert = <Alert color="danger">{errors.phone}</Alert>
    }
    if(passwordMisMatch) {
      passwordAlert = <Alert color="danger">Passwords do not match!</Alert>
    } else if(errors.password) {
      passwordAlert = <Alert color="danger">{errors.password}</Alert>
    }
    const hasApiError = this.props.error && this.props.error.apiError;
    if(hasApiError) {
      userErrorAlert = (
        <Alert color="danger">
          {hasApiError}
        </Alert>)
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
    if(this.props.user && this.props.user._id) {
      this.props.router.push('/home');
    } else {
      return (
        <Form className="signup">
          <h3 className="text-center">Sign Up</h3>
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
          <Row>
            <Col xs="6"><Button onClick={this.postUser}>Register</Button></Col>
            <Col xs="6">Already registered? <Link to="/login">Go to login instead.</Link></Col>
          </Row>
          <Modal isOpen={!!hasApiError}>
            <ModalHeader>Error!</ModalHeader>
            {userErrorAlert}
            <ModalFooter>
              <Button onClick={this.resolveAlert}>
                OK, got it.
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
  error: state.errorReducer,
});

const mapDispatchToProps = dispatch => ({
  postUser: (user, history) => dispatch(postUser(user, history)),
  resolveError: () => dispatch(resolveError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
