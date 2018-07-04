import React, { PureComponent } from 'react';
import { Box } from "../../components/Layout/index";
import { theme } from "../../theme";

export class Flag extends PureComponent {
    render() {
        const { flag } = this.props;

        return (
            <Box size="50px" color={flag ? theme.colors.green:theme.colors.red} />
        );
    }
}
