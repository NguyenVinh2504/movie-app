import { Tab, Tabs, styled, tabsClasses, Box } from '@mui/material';
// import { TabList } from '@mui/lab';
import { memo, useState } from 'react';
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
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
    '@media (hover: none)': {
        '&:hover': {
            backgroundColor: theme.button.neutralButton.solid.default,
        },
    },
    '&.Mui-selected': {
        color: theme.button.neutralButton.solid.textActive,
        fontWeight: '500',
        backgroundColor: theme.button.neutralButton.solid.active,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(13),
        // backgroundColor: 'red',
        padding: '0px 10px 0px 10px',
        minHeight: '32px',
        minWidth: '55px',
        marginRight: theme.spacing(1),
    },
}));
function TabItems({ contentItems, onCurrCategory }) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ mt: 5, mb: 2 }}>
            <Tabs
                variant="scrollable"
                // allowScrollButtonsMobile
                aria-label="styled tabs example"
                value={value}
                onChange={(event, newValue) => {
                    handleChange(event, newValue);
                    onCurrCategory(newValue);
                }}
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
                {contentItems.map((item, index) => (
                    <StyledTab disableRipple key={index} label={item.name} />
                ))}
            </Tabs>
        </Box>
    );
}

export default memo(TabItems);
