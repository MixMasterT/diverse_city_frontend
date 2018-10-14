import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';
import gcpLanguages from '../static_assets/gcp_languages.json';
import { receiveLanguage } from '../actions/languageActions';

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: this.props.language || null,
      filterTerm: '',
    };
    this.updateFilterTerm = this.updateFilterTerm.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
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
    this.setState({ selectedLanguage: language.name });
    this.props.selectLanguage(language);
  }

  render() {
    const term = this.state.filterTerm;
    const filteredLanguages = gcpLanguages.filter(l => (
      -1 < l.name.toLowerCase().indexOf(term.toLowerCase())
    ));
    return (
      <div>
        <Row>
          <Col xs="12">
            Your selected language: {this.state.selectedLanguage || 'none'}
          </Col>
        </Row>
        <Form>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>Filter Languages</Label>
                <Input onChange={this.updateFilterTerm} />
              </FormGroup>
            </Col>
            <Col sm="6">
              <Button onClick={this.clearFilter}>Clear Filter</Button>
            </Col>
          </Row>

        </Form>
        <Table striped hover className="text-center">
          <thead>
            <tr>
              <th xs="2">#</th>
              <th xs="10">Language</th>
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
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectLanguage: (language) => dispatch(receiveLanguage(language)),
});

export default connect(null, mapDispatchToProps)(SelectLanguage);
