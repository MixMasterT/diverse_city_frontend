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
    this.pageText = {
      selectLanguage: 'Select Language',
      preferredLanguage: 'Your preferred language',
      filterLanguages: 'Filter Languages',
      clearFilter: 'Clear Filter',
      language: 'Language',
      success: 'Success',
      youSelected: 'You have selected',
      asPreferred: 'as your preferred language',
      moveOn: 'Move On',
      chooseDifferent: 'Choose a different language'
    };
    this.state = {
      selectedLanguage: this.props.language || null,
      filterTerm: '',
      modalIsOpen: false,
      pageText: this.pageText,
      // translation: this.props.translation
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
        <h3 className="text-center">{!state.translation ? state.pageText.selectLanguage : state.translation.selectLanguage}</h3>
        <Row>
          <Col xs="12">
            {!state.translation ? state.pageText.preferredLanguage : state.translation.preferredLanguage}: {this.state.selectedLanguage || 'none'}
          </Col>
        </Row>
        <Form>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>{!this.props.translation ? state.pageText.filterLanguages : this.props.translation.filterLanguages}</Label>
                <Input onChange={this.updateFilterTerm} />
              </FormGroup>
            </Col>
            <Col sm="6">
              <Button onClick={this.clearFilter}>{!this.props.translation ? state.pageText.clearFilter : this.props.translation.clearFilter}</Button>
            </Col>
          </Row>

        </Form>
        <Table striped hover className="text-center">
          <thead>
            <tr>
              <th xs="2">#</th>
              <th xs="10">{!this.props.translation ? state.pageText.language : this.props.translation.language}</th>
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
          props={this.props}
        >
          <ModalHeader>{!this.props.translation ? state.pageText.success : `${this.props.translation.translation.success}`}!</ModalHeader>
          <ModalBody>
            {!this.props.translation ? state.pageText.youSelected : this.props.translation.youSelected} <mark>{this.state.selectedLanguage}</mark> {!state.translation ? state.pageText.asPreferred : state.translation.asPreferred}.
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
                {!this.props.translation ? state.pageText.moveOn : this.props.translation.moveOn}
              </Button>
              <Button
                color="warning"
                onClick={() => this.closeAndClear()}
                style={{marginLeft: '2rem'}}
              >
                {!this.props.translation ? state.pageText.chooseDifferent : this.props.translation.chooseDifferent}
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
