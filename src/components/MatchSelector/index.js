import React, { PureComponent } from 'react';
import { Game } from "../../containers/Game/index";
import { Headline } from "../Typography/index";

export class MatchSelector extends PureComponent {
  state = {
      selectedMatchId: undefined,
      selectedMatchIdIndex: -1
  }

  selectMatch = (selectedMatchId, selectedMatchIdIndex) => this.setState({selectedMatchId, selectedMatchIdIndex})

  previous = () => {
      const { selectedMatchIdIndex } = this.state;
      const { matchIds } = this.props;
      const previousSelectedMatchIdIndex = selectedMatchIdIndex - 1;
      const previousMatchId = matchIds[previousSelectedMatchIdIndex];

      if (!!previousMatchId) {
          this.selectMatch(previousMatchId, previousSelectedMatchIdIndex)
      }
  }

    next = () => {
        const { selectedMatchIdIndex } = this.state;
        const { matchIds } = this.props;
        const nextSelectedMatchIdIndex = selectedMatchIdIndex + 1;
        const nextMatchId = matchIds[nextSelectedMatchIdIndex];

        if (!!nextMatchId) {
            this.selectMatch(nextMatchId, nextSelectedMatchIdIndex)
        }
    }

    render() {
    const { matchIds } = this.props;
    const { selectedMatchId, selectedMatchIdIndex } = this.state;

    return (
      <div>
          <Headline>GAME -> {selectedMatchIdIndex}/{matchIds.length}</Headline>
          {matchIds.map((matchId, index) => <button key={matchId} onClick={() => this.selectMatch(matchId, index)} style={{ backgroundColor: index === selectedMatchIdIndex ? 'green':'white'}}>{matchId}</button>)}
          <button onClick={this.previous}>{"ANTERIOR <"}</button><button onClick={this.next}>{"SIGUIENTE >"}</button>
          <Game matchId={selectedMatchId}/>
      </div>
    );
  }
}
