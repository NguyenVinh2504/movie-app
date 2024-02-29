import { List, ListItemText, Typography } from '@mui/material';
import EpisodesItem from './EpisodesItem';
import { memo } from 'react';
function EpisodesList({ visible, dataSeason, searchNumberEp }) {
    const { episodes = [] } = dataSeason;
    const episodesList = episodes?.filter((episodeItem) => {
        return (
            episodeItem?.episode_number?.toString()?.includes(searchNumberEp) ||
            episodeItem?.name?.toString()?.toLowerCase()?.includes(searchNumberEp?.toLowerCase())
        );
    });
    return Boolean(episodesList.length) ? (
        <List>
            {episodesList?.slice(0, visible)?.map((item, index) => (
                <EpisodesItem key={index} index={index} item={item} dataSeason={dataSeason} />
            ))}
        </List>
    ) : (
        <List>
            <ListItemText sx={{ px: 1, py: 3 }}>
                <Typography variant="h6" textAlign={'center'}>
                    Không tìm thấy tập phim
                </Typography>
            </ListItemText>
        </List>
    );
}

export default memo(EpisodesList);
