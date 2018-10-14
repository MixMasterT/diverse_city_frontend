import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';
import gcpLanguages from '../static_assets/gcp_languages.json';
import { receiveLanguage, clearLanguage } from '../actions/languageActions';
import { fetchTranslation } from '../actions/translationActions';

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.pageText = [
      'Select Language',
      'Your preferred language',
      'Filter Languages',
      'Clear Filter',
      'Language',
      'Success',
      'You have selected',
      'as your preferred language',
      'Move On',
      'Choose a different language'
    ];
    this.state = {
      selectedLanguage: this.props.language || null,
      filterTerm: '',
      modalIsOpen: false,
      pageText: this.pageText,
    };
    this.updateFilterTerm = this.updateFilterTerm.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  updateFilterTerm(e) {
    e.preventDefault();
    this.setState({ filterTerm: e.target.value });
  }

  clearFilter(e) {
    e.preventDefault();
    this.setState({ filterTerm: '' });
  }

  handleSelect(language) {
    this.setState({
      selectedLanguage: language.name,
      modalIsOpen: true,
    });
    this.props.selectLanguage(language);
    this.props.fetchTranslation(this.pageText, language, 'selectLanguage')
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  closeAndClear() {
    this.setState({ modalIsOpen: false, selectedLanguage: null });
    this.props.clearLanguage();
  }

  render() {
    const term = this.state.filterTerm;
    const filteredLanguages = gcpLanguages.filter(l => (
      -1 < l.name.toLowerCase().indexOf(term.toLowerCase())
    ));
    const state = this.state;
    return (
      <div>
        <h3 className="text-center">{state.pageText[0]}</h3>
        <Row>
          <Col xs="12">
            {state.pageText[1]}: {this.state.selectedLanguage || 'none'}
          </Col>
        </Row>
        <Form>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>{state.pageText[2]}</Label>
                <Input onChange={this.updateFilterTerm} />
              </FormGroup>
            </Col>
            <Col sm="6">
              <Button onClick={this.clearFilter}>{state.pageText[3]}</Button>
            </Col>
          </Row>

        </Form>
        <Table striped hover className="text-center">
          <thead>
            <tr>
              <th xs="2">#</th>
              <th xs="10">{state.pageText[4]}</th>
            </tr>
          </thead>
          <tbody>
            {filteredLanguages.map((language, idx) => (
              <tr
                key={idx}
                className="clickable"
                onClick={() => this.handleSelect(language)}
              >
                <th scope="row" xs="2">{idx}</th>
                <td xs="10">{language.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          color="success"
          isOpen={this.state.modalIsOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader>{state.pageText[5]}!</ModalHeader>
          <ModalBody>
            {state.pageText[6]} <mark>{this.state.selectedLanguage}</mark> {state.pageText[7]}.
          </ModalBody>
          <ModalFooter>
            <Row
              className="d-flex justify-content-between align-items-center"
              style={{marginRight: '2rem'}}
            >
              <Button
                color="primary"
                onClick={() => this.props.history.push('/login')}
              >
                {state.pageText[8]}
              </Button>
              <Button
                color="warning"
                onClick={() => this.closeAndClear()}
                style={{marginLeft: '2rem'}}
              >
                {state.pageText[9]}
              </Button>
            </Row>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectLanguage: (language) => dispatch(receiveLanguage(language)),
  clearLanguage: () => dispatch(clearLanguage()),
  fetchTranslation: (textArray, targetLanguage, key) => dispatch(fetchTranslation(textArray, targetLanguage, key)),
});

export default connect(null, mapDispatchToProps)(withRouter(SelectLanguage));
