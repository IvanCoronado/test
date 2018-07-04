import React, { PureComponent } from 'react';
import { PlayerStats } from "../../components/PlayerStats/index";
import { Grid } from "../../components/Layout/index";
import { Title, Body } from "../Typography/index";
import { ChampionGoldFlag } from "../../containers/ChampionGoldFlag/index";

export class Game extends PureComponent {
  render() {
    const { time, playerStats, teamOne, teamTwo } = this.props;

    return (
      <div>
        <Title my="25px">Minuto: {time ? (time / 60 / 1000).toFixed(2) : '0'}</Title>
        <Grid columns="1fr 1fr 1fr">
            <Grid columns="1fr">
                <Title>Equipo 1</Title>
                <Body>Torres: {(teamOne && teamOne.towersKilled) || '0' }</Body>
                <Body>Inhibidor: {(teamOne && teamOne.inhibitorsKilled) || '0' }</Body>
                <Body>Primera sangre: {(teamOne === undefined && '-') || (teamOne.firstBlood ? 'Sí':'No')}</Body>
                <Body>Nashors: {(teamOne && teamOne.baronsKilled) || '0' }</Body>
                <Body mb="15px">Dragones: {(teamOne && teamOne.dragonsKilled) || '0' }</Body>

                <PlayerStats name="1" stats={playerStats[1]} />
                <PlayerStats name="2" stats={playerStats[2]} />
                <PlayerStats name="3" stats={playerStats[3]} />
                <PlayerStats name="4" stats={playerStats[4]} />
                <PlayerStats name="5" stats={playerStats[5]} />
            </Grid>
          <Grid columns="1fr">
              <Title>Equipo 2</Title>
              <Body>Torres: {(teamTwo && teamTwo.towersKilled) || '0' }</Body>
              <Body>Inhibidor: {(teamTwo && teamTwo.inhibitorsKilled) || '0' }</Body>
              <Body>Primera sangre: {(teamTwo === undefined && '-') || (teamTwo.firstBlood ? 'Sí':'No')}</Body>
              <Body>Nashors: {(teamTwo && teamTwo.baronsKilled) || '0' }</Body>
              <Body mb="15px">Dragones: {(teamTwo && teamTwo.dragonsKilled) || '0' }</Body>

              <PlayerStats name="6" stats={playerStats[6]} />
              <PlayerStats name="7" stats={playerStats[7]} />
              <PlayerStats name="8" stats={playerStats[8]} />
              <PlayerStats name="9" stats={playerStats[9]} />
              <PlayerStats name="10" stats={playerStats[10]} />
          </Grid>
            <Grid>
                <ChampionGoldFlag />
            </Grid>
        </Grid>
      </div>
    );
  }
}
