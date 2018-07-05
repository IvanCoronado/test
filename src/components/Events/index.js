import React, { PureComponent, Fragment } from 'react';
import { Body } from "../Typography/index";
import { Row } from "../Layout/index";
import { Icon, eventsUrl } from "../Icon/index";



export class Events extends PureComponent {
    render() {
        const { teamId = 100, towers = 0, inhibitors = 0, barons = 0, dragons = 0, fb = false } = this.props;
        return (
            <Row>
                <Icon url={eventsUrl('turret', teamId)} /> <Body ml="4px" mr="8px">{towers}</Body>
                <Icon url={eventsUrl('inhibitor_building', teamId)} /> <Body ml="4px" mr="8px">{inhibitors}</Body>
                <Icon url={eventsUrl('baron_nashor', teamId)} /> <Body ml="4px" mr="8px">{barons}</Body>
                <Icon url={eventsUrl('dragon', teamId)} /> <Body ml="4px" mr="8px">{dragons}</Body>
                <Body ml="4px" mr="8px">{fb ? 'FB':''}</Body>
            </Row>
        );
    }
}
