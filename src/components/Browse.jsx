import React from 'react';
import PropTypes from 'prop-types';


const Browse = () => (
  <div className="browse">
    <div className="text-center">
      <i className="fa fa-trophy fa-3x"></i>
    </div>
    {/* search bar? */}
    {/* goals go here? */}
  </div>
);

Browse.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};



export default Browse;
