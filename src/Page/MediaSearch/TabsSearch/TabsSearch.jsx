import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { memo } from 'react';
import menuItemsSearch from '~/config/MenuItemsSearch';

function TabsSearch({ value, onListItemClick }) {
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
                    <ListItemButton selected={value === index} onClick={() => onListItemClick(index)} key={index}>
                        <Box sx={{ pr: 1 }}>{item.icon}</Box>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default memo(TabsSearch);
