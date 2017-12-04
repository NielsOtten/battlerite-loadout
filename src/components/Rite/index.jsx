import React from 'react';
import PropTypes from 'prop-types';

const RiteComponent = ({
  name, image, description, type,
}) => (
  <div>
    <img src={image} alt='' />
    {name}
    {description}
    {type}
  </div>
);

RiteComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RiteComponent;
