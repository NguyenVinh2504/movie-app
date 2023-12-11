import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';

function ButtonSelector({ seasons, onSeasonNuber }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(seasons.length - 1);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index, valueNumberSeason) => {
        setSelectedIndex(index);
        onSeasonNuber(valueNumberSeason);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // console.log('re');
    return (
        <div>
            <Button
                onClick={handleClickListItem}
                variant="contained"
                color="secondary"
                endIcon={open ? <ArrowUpIcon /> : <ArrowDownIcon />}
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
                {seasons && seasons[selectedIndex]?.name}
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
                            '@media (hover: none)': {
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            },
                        },
                    },
                }}
            >
                {seasons?.map((option, index) => (
                    <MenuItem
                        id="account-menu"
                        key={option.season_number}
                        selected={index === selectedIndex}
                        disabled={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index, option.season_number)}
                        sx={{ pr: 5.5 }}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
export default React.memo(ButtonSelector);