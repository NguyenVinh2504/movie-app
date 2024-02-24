import { Tab, Tabs } from '@mui/material';
import { memo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import menuItemsSearch from '~/config/MenuItemsSearch';
import { omitBy, isUndefined } from 'lodash';
import { useQueryConfig } from '~/Hooks';
function TabsSearchTypeMobile() {
    const navigate = useNavigate();
    const { media_type, ...queryConfig } = useQueryConfig();

    const handleOpen = (type) => {
        navigate({
            search: createSearchParams(
                omitBy(
                    {
                        ...queryConfig,
                        media_type: type,
                    },
                    isUndefined,
                ),
            ).toString(),
        });
    };
    return (
        <Tabs
            value={media_type ?? 'movie'}
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
                        if (media_type ? media_type === item.type : 'movie' === item.type) return;
                        handleOpen(item.type);
                    }}
                    value={item.type}
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
