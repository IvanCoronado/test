import React, { PureComponent } from 'react';
import { Box } from "../../components/Layout/index";

export const eventsUrl = (type, teamId) => `https://matchhistory.euw.leagueoflegends.com/assets/1.0.36/images/normal/event_icons/${type}_${teamId}.png`


export class Icon extends PureComponent {
    render() {
        const { url, name, ...props } = this.props;

        return (
            <Box title={name} url={url} size="21px" backgroundSize="cover" {...props} />
        );
    }
}
