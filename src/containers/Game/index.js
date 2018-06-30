import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Game as GameComponent } from "../../components/Game/index";

const mapStateToProps = (state, ownProps) => {
    const match = state.game.byId[ownProps.matchId];

    return {
        time: (match && match.t) || undefined,
        playerStats: (match && match.playerStats) || {},
        teamOne: (match && match.teamStats && match.teamStats[100]) || {},
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
