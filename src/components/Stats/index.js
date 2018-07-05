import React, { PureComponent, Fragment } from 'react';
import { Caption} from "../Typography/index";
import { Row } from "../Layout/index";
import { theme } from "../../theme";

export class Stats extends PureComponent {
    render() {
        const { kills, deaths, assists } = this.props;

        return (
            <Row>
                <Caption display="inline" color={theme.colors.green}>{kills}</Caption> /
                <Caption display="inline" color={theme.colors.red}>{deaths}</Caption> /
                <Caption display="inline" color={theme.colors.blue}>{assists}</Caption>
            </Row>
        );
    }
}
