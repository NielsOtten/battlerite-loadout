import React, { Component } from 'react';
import fetch from 'fetch-everywhere';
import RiteSelector from './RiteSelector';
import ChampionSelector from './ChampionSelector';

class LoadoutCreatorScene extends Component {
  state = {
    championList: [],
    riteList: [],
    champion: null,
    // rite: [],
  };


  componentDidMount() {
    this.getChampions();
  }

  async getRites(championId) {
    const response = await fetch(`/api/champion/${championId}/rites/`);
    const riteList = await response.json();
    this.setState({ riteList });
  }

  async getChampions() {
    const response = await fetch('/api/champion/list');
    const championList = await response.json();
    this.setState({ championList });
  }

  selectChampion = (id) => {
    const champion = this.state.championList.filter(obj => obj._id === id)[0];
    this.getRites(champion._id);
    this.setState({ champion });
  };

  render() {
    return (
      <div>
        {this.state.championList.length > 0 &&
        this.state.champion === null &&
        <ChampionSelector
          championList={this.state.championList}
          selectChampion={this.selectChampion}
        />}
        {this.state.champion &&
        this.state.riteList.length > 0 &&
        <RiteSelector
          riteList={this.state.riteList}
        />}
      </div>
    );
  }
}

export default LoadoutCreatorScene;
