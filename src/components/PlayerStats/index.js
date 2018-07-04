import React, { PureComponent, Fragment } from 'react';
import { Title, Caption} from "../Typography/index";
import { Grid, Column, Row } from "../Layout/index";
import { ChampionAvatar } from "../ChampionAvatar/index";
import { theme } from "../../theme";

export class PlayerStats extends PureComponent {
    render() {
        const { stats } = this.props;

        return (
            <Fragment>
                <Title>
                    {stats && stats.summonerName}
                </Title>
                <Grid columns="min-content 1fr" columnsGap="12px">
                    <ChampionAvatar name={stats && stats.championName} />
                    <Column justify="space-between">
                        <Row>
                            <Caption display="inline" color={theme.colors.orange}>{stats && stats.level}</Caption>
                        </Row>
                        <Row>
                            <Caption display="inline" color={theme.colors.green}>{stats && stats.kills}</Caption> /
                            <Caption display="inline" color={theme.colors.red}>{stats && stats.deaths}</Caption> /
                            <Caption display="inline" color={theme.colors.blue}>{stats && stats.assists}</Caption>
                        </Row>
                        <Row>
                            <Caption display="inline" color={theme.colors.gold}>{stats && stats.tg}</Caption>
                            <Caption display="inline" color={theme.colors.silver}>({stats && stats.cg})</Caption>
                        </Row>
                    </Column>
                </Grid>
            </Fragment>
        );
    }
}
