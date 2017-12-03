import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Champion = styled.div`
  display: block;
  cursor: pointer;
  flex: 1;
  width: 33%;
`;

const ChampionComponent = ({ name, image, onClick }) => (
  <Champion onClick={onClick}>
    <figure>
      <img src={image} alt={name} />
      {/* <figcaption>{name}</figcaption> */}
    </figure>
  </Champion>
);

ChampionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChampionComponent;
