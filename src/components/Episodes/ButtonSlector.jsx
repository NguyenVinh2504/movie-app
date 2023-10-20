import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { ArrowDownIcon } from '../Icon';
import { seasons } from './season';

function ButtonSelector() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                onClick={handleClickListItem}
                variant="contained"
                color="secondary"
                endIcon={<ArrowDownIcon />}
                size="medium"
                sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    '.MuiButton-endIcon': {
                        ml: 2,
                        mt: '-2px',
                    },
                    svg: {
                        width: '18px',
                        height: '18px',
                    },
                }}
            >
                {seasons[selectedIndex].name}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '.MuiPaper-root': {
                        borderColor: '#A6A4A4',
                        mt: 2,
                        bgcolor: '#2D2C2C',
                        color: 'white',
                        '.Mui-selected': {
                            background: 'rgba(255, 255, 255, 0.10)!important',
                        },
                        '.MuiMenuItem-root': {
                            ':hover': {
                                background: 'rgba(255, 255, 255, 0.2)',
                            },
                        },
                    },
                }}
            >
                {seasons.map((option, index) => (
                    <MenuItem
                        id="account-menu"
                        key={index}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ pr: 5.5 }}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
export default ButtonSelector;
