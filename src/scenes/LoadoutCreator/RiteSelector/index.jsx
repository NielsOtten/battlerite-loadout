import React from 'react';
import PropTypes from 'prop-types';
import Rite from '../../../components/Rite';

const RiteSelectorComponent = ({ riteList }) => {
  const rites = riteList.map(rite => (
    <Rite
      key={rite._id}
      name={rite.name}
      image={rite.image}
      description={rite.description}
      type={rite.type}
    />
  ));
  return (
    <div>
      {rites}
    </div>
  );
};

RiteSelectorComponent.propTypes = {
  riteList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    champion: PropTypes.string.isRequired,
  })).isRequired,
};

export default RiteSelectorComponent;
