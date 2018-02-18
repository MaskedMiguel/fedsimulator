import React from 'react';
import PropTypes from 'prop-types';

const ComponentLoader = ({ isLoading = true, error = null, pastDelay = null }) => {
  if (isLoading) {
    return pastDelay ? <div>Loading...</div> : null;
  } else if (error) {
    return <div>Error! Component failed to load</div>;
  }

  return null;
};

ComponentLoader.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.any, // eslint-disable-line
  pastDelay: PropTypes.bool,
};

export default ComponentLoader;
