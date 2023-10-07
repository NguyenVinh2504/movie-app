import { Tab, Tabs, Box, Container, styled, tabsClasses } from '@mui/material';
import { useState } from 'react';
import { genres } from '~/config/TabGenresItems';
function TabGenres() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const StyledTab = styled(Tab)(({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        // fontSize: theme.typography.pxToRem(16),
        marginRight: theme.spacing(2),
        backgroundColor: theme.button.neutralButton.solid.default,
        borderRadius: '4px',
        color: theme.button.neutralButton.solid.text,
        ':hover': {
            backgroundColor: theme.button.neutralButton.solid.hover,
        },
        '&.Mui-selected': {
            color: theme.button.neutralButton.solid.textActive,
            fontWeight: '500',
            backgroundColor: theme.button.neutralButton.solid.active,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(12),
            // backgroundColor: 'red',
            padding: '0px 10px 0px 10px',
            minHeight: '32px',
            minWidth: '55px',
            marginRight: theme.spacing(1),
        },
    }));

    return (
        <Container maxWidth="xl" sx={{ px: '0', mt: 5 }}>
            <Tabs
                variant="scrollable"
                // allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                selectionFollowsFocus={true}
                scrollButtons="auto"
                sx={{
                    minHeight: { xs: '0px', md: '48px' },
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'transparent',
                    },
                    '& .MuiTabs-scrollableX': {
                        mx: { sm: '10px' },
                    },
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                        borderRadius: '500px',
                        width: '48px',
                        '&:hover': {
                            backgroundColor: '#4B4949',
                        },
                    },
                }}
            >
                {genres.map((item, index) => (
                    <StyledTab disableRipple key={index} label={item.name}></StyledTab>
                ))}
            </Tabs>
        </Container>
    );
}

export default TabGenres;
