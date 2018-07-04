import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Flag } from "../../components/Flag/index";

const mapStateToProps = (state, ownProps) => {
    const { matchId, championName, gold, minute } = ownProps;

    return {
        flag: true
    }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    );

export const ChampionGoldFlag = connect(mapStateToProps, mapDispatchToProps)(
    Flag
);
