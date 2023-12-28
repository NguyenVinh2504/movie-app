import * as React from 'react';
import { styled } from '@mui/material/styles';
const TestComponentRoot = styled('div', {
    name: 'MuiTestComponent',
    slot: 'root',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: theme.spacing(3, 4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    letterSpacing: '-0.025em',
    fontWeight: 600,
  }));;

const TestComponent = React.forwardRef(function Stat(props, ref) {
    const { value, unit, ...other } = props;

    return (
        <TestComponentRoot ref={ref} {...other}>
            {value}
        </TestComponentRoot>
    );
});

export default TestComponent;
