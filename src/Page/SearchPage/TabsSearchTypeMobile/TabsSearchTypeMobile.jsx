import { Tab, Tabs } from '@mui/material';
import { memo } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import menuItemsSearch from '~/config/MenuItemsSearch';
import { omitBy, isUndefined } from 'lodash';
function TabsSearchTypeMobile({ valueInput }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOpen = (path) => {
        navigate({
            pathname: path,
            search: createSearchParams(
                omitBy(
                    {
                        query: valueInput,
                    },
                    isUndefined,
                ),
            ).toString(),
        });
    };
    return (
        <Tabs
            value={location.pathname}
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
                    onClick={() => {
                        if (location.pathname === item.path) return;
                        handleOpen(item.path);
                    }}
                    value={item.path}
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
