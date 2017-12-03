import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Champion from '../../../components/Champion';

const Wrapper = styled.div`
  padding: 0;
  display: flex;
`;

const ChampionSelectorComponent = ({ championList, selectChampion }) => {
  const champions = championList.map(champion => (<Champion
    key={champion._id}
    name={champion.name}
    image={champion.thumbnail}
    onClick={() => selectChampion(champion._id)}
  />));

  return (
    <Wrapper>
      {champions}
    </Wrapper>
  );
};

ChampionSelectorComponent.propTypes = {
  championList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  selectChampion: PropTypes.func.isRequired,
};

export default ChampionSelectorComponent;
