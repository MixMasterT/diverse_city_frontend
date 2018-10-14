import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
import { loginUser } from '../actions/userActions';
import { resolveError } from '../actions/errorActions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        password: '',
        phone: '',
      },
      errors: {}
    };
    this.logUserIn = this.logUserIn.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.updateField = this.updateField.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.resolveAlert = this.resolveAlert.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  componentWillMount() {
    if(this.props.user) {
      this.props.history.push('/browse');
    }
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

  logUserIn(e) {
    e.preventDefault();
    const user = this.state.user;
    const errors = {}
    if(this.validateUser()) {
      this.props.loginUser(user, this.props.history);
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
    let passwordAlert = '';
    let phoneAlert = '';
    let userErrorAlert = '';
    const errors = this.state.errors;
    if(errors.phone && this.state.user.phone.length < 10) {
      phoneAlert = <Alert color="danger">{errors.phone}</Alert>
    }
    if(errors.password && this.state.user.password.length < 4) {
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
        <Row>
          <Col xs="6"><Button onClick={this.logUserIn}>Login</Button></Col>
          <Col xs="6">Not yet registered? <a href="/signup">Go to Signup instead.</a></Col>
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

const mapStateToProps = state => ({
  user: state.userReducer.user,
  error: state.errorReducer,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user, history) => dispatch(loginUser(user, history)),
  resolveError: () => dispatch(resolveError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
