import React, { PureComponent, Fragment } from 'react';
import { Title, Caption} from "../Typography/index";
import { Grid, Column, Row } from "../Layout/index";
import { ChampionAvatar } from "../ChampionAvatar/index";
import { theme } from "../../theme";
import { Stats } from "../Stats/index";

export class PlayerStats extends PureComponent {
    render() {
        const { stats, time, isMvp } = this.props;

        return (
            <Fragment>
                <Title>
                    {stats && stats.summonerName} ({stats && stats.playerId})
                </Title>
                <Grid columns="min-content 1fr" columnsGap="12px" color={isMvp ? theme.colors.greyLight : undefined}>
                    <ChampionAvatar name={stats && stats.championName} />
                    <Column justify="space-between">
                        <Row>
                            <Caption display="inline" color={theme.colors.orange}>{stats && stats.level}</Caption>
                        </Row>
                        <Stats
                            kills={stats && stats.kills}
                            deaths={stats && stats.deaths}
                            assists={stats && stats.assists}
                        />
                        <Row>
                            <Caption display="inline" color={theme.colors.gold}>{stats && stats.tg}</Caption>
                            <Caption display="inline" color={theme.colors.silver}>({stats && stats.cg}) </Caption>
                            <Caption display="inline" color={theme.colors.silver}> / {stats && (stats.tg / time ).toFixed(2)}</Caption>
                        </Row>
                    </Column>
                </Grid>
            </Fragment>
        );
    }
}
