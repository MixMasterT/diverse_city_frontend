import React from "react";
import { connect } from "react-redux";

import SelectLanguage from "../components/SelectLanguage";

const mapStateToProps = state => ({
  translation: state.translation
});

export default connect(
  mapStateToProps,
  {}
)(SelectLanguage);
