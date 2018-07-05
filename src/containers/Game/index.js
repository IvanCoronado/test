import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Game as GameComponent } from "../../components/Game/index";

const mapStateToProps = (state, ownProps) => {
    const match = state.game.byId[ownProps.matchId];
    const time = match && match.t ? (match.t / 60 / 1000).toFixed(2) : 0;
    const playerStats = (match && match.playerStats) || {};
    let mvpId = 0;
    let mvpGold = 0;
    let teamOneStats = {
        kills: 0,
        deaths: 0,
        assists: 0,
    }
    let teamTwoStats = {
        kills: 0,
        deaths: 0,
        assists: 0,
    }
    Object.values(playerStats).map(value => {
        if (value) {
            if (value.tg > mvpGold) {
                mvpGold = value.tg;
                mvpId = value.participantId;
            }
            if (value.teamId === 100) {
                teamOneStats = {
                    ...teamOneStats,
                    kills: value.kills + teamOneStats.kills,
                    deaths: value.deaths + teamOneStats.deaths,
                    assists: value.assists + teamOneStats.assists,
                }
            }
            if (value.teamId === 200) {
                teamTwoStats = {
                    ...teamTwoStats,
                    kills: value.kills + teamTwoStats.kills,
                    deaths: value.deaths + teamTwoStats.deaths,
                    assists: value.assists + teamTwoStats.assists,
                }
            }
        }
    });

    return {
        matchId: ownProps.matchId,
        time,
        playerStats,
        mvpId,
        teamOneStats,
        teamOne: (match && match.teamStats && match.teamStats[100]) || {},
        teamTwoStats,
        teamTwo: (match && match.teamStats && match.teamStats[200]) || {},
    }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    );

export const Game = connect(mapStateToProps, mapDispatchToProps)(
    GameComponent
);
