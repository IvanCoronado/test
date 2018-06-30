import React, { PureComponent, Fragment } from 'react';
import { Title, Caption} from "../Typography/index";
import { theme } from "../../theme";

export class PlayerStats extends PureComponent {
    render() {
        const { stats } = this.props;

        return (
            <Fragment>
                <Title>
                    {stats && stats.summonerName}: {stats && stats.championName} - LvL: <Title display="inline" color={theme.colors.orange}>{stats && stats.level}</Title> (<Title display="inline" color={theme.colors.green}>{stats && stats.kills}</Title> / <Title display="inline" color={theme.colors.red}>{stats && stats.deaths}</Title> / <Title display="inline" color={theme.colors.blue}>{stats && stats.assists}</Title>)
                </Title>
                <Caption>Total gold: {stats && stats.tg}</Caption>
                <Caption>Current gold: {stats && stats.cg}</Caption>
            </Fragment>
        );
    }
}
