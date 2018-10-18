import React from "react";
import { connect } from "react-redux";

import SelectLanguage from "../components/SelectLanguage";

const mapStateToProps = state => ({
  translation: state.translation
});

// const mapDispatchToProps = dispatch => ({
//   clearLanguage: () => dispatch()
// })

export default connect(
  mapStateToProps,
  {}
)(SelectLanguage);
