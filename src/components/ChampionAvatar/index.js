import React, { PureComponent } from 'react';
import { Box } from "../../components/Layout/index";

export class ChampionAvatar extends PureComponent {
    render() {
        const { name, ...props } = this.props;

        return (
            <Box title={name} url={`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/${name}.png`} size="80px" backgroundSize="cover" {...props} />
        );
    }
}
