import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { memo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import menuItemsSearch from '~/config/MenuItemsSearch';
import { omitBy, isUndefined } from 'lodash';
import { useQueryConfig } from '~/Hooks';

function TabsSearch() {
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
        <Box
            sx={{
                backgroundColor: '#141212',
                borderRadius: 2,
                border: '1px solid hsla(0,0%,100%,.1)',
            }}
        >
            <Typography variant="h5" fontWeight={'500'} p={2} borderBottom={'1px solid hsla(0,0%,100%,.1)'}>
                Kết quả
            </Typography>
            <List component="nav" aria-label="main mailbox folders" sx={{ py: 2 }}>
                {menuItemsSearch.map((item, index) => (
                    <ListItemButton
                        selected={media_type ? media_type === item.type : 'movie' === item.type}
                        key={index}
                        onClick={() => {
                            if (media_type ? media_type === item.type : 'movie' === item.type) return;
                            handleOpen(item.type);
                        }}
                    >
                        <Box sx={{ pr: 1 }}>{item.icon}</Box>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default memo(TabsSearch);
