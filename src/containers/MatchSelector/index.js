import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MatchSelector as MatchSelectorComponent } from "../../components/MatchSelector/index";

const mapStateToProps = (state, ownProps) => {
    const matchIds = state.game.order || [];

    return {
        matchIds
    }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    );

export const MatchSelector = connect(mapStateToProps, mapDispatchToProps)(
    MatchSelectorComponent
);
