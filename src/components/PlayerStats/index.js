import React, { PureComponent, Fragment } from 'react';
import { Title, Caption} from "../Typography/index";
import { Grid, Column, Row, Absolute } from "../Layout/index";
import { ChampionAvatar } from "../ChampionAvatar/index";
import { theme } from "../../theme";
import { Stats } from "../Stats/index";
import { Items } from "../Items/index";

export class PlayerStats extends PureComponent {
    render() {
        const { stats = {}, time, isMvp } = this.props;

        return (
                <Grid columns="min-content 164px 1fr" columnsGap="12px" my="6px" color={isMvp ? theme.colors.greyLight : undefined}>
                    <ChampionAvatar name={stats && stats.championName} />
                    <Absolute width="20px" height="20px" color="black"><Caption width="100%"  align="center" color="white">{stats && stats.level}</Caption></Absolute>
                    <Items itemIds={stats.items} />
                    <Column justify="space-between">
                        <Title>
                            {stats && stats.summonerName} ({stats && stats.playerId})
                        </Title>
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
        );
    }
}
