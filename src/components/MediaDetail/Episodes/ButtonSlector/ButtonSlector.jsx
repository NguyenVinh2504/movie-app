import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';
import uiConfig from '~/config/ui.config';
function ButtonSelector({ seasons, selectedIndex, onSeasonNumber }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index) => {
        onSeasonNumber(index);
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
                    display: 'flex',
                }}
            >
                <span style={{ ...uiConfig.style.typoLines(1), textAlign: 'start' }}>
                    {' '}
                    {seasons && seasons[selectedIndex]?.name}
                </span>
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '.MuiPaper-root': {
                        borderColor: '#2d2c2c',
                        mt: 2,
                        bgcolor: '#2D2C2C',
                        color: 'white',
                        '.Mui-selected': {
                            background: 'rgba(255, 255, 255, 0.2)!important',
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
                        onClick={() => handleMenuItemClick(index)}
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
