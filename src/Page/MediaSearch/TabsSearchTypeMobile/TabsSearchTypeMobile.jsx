import { Tab, Tabs } from '@mui/material';
import { memo } from 'react';
import menuItemsSearch from '~/config/MenuItemsSearch';

function TabsSearchTypeMobile({ value, onListItemClick }) {
    return (
        <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
            sx={{
                '& .MuiTabs-indicator': {
                    bgcolor: 'white',
                },
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            }}
        >
            {menuItemsSearch.map((item, index) => (
                <Tab
                    key={index}
                    disableRipple
                    label={item.title}
                    onClick={() => onListItemClick(index)}
                    sx={{
                        color: '#a6a4a4',
                        '&.Mui-selected': {
                            color: 'White !important',
                        },
                        '&:hover': {
                            color: '#fff',
                        },
                        '@media (hover: none)': {
                            '&:hover': {
                                color: '#a6a4a4',
                            },
                        },
                    }}
                ></Tab>
            ))}
        </Tabs>
    );
}

export default memo(TabsSearchTypeMobile);
