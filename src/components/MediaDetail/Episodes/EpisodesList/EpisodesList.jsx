import { List } from '@mui/material';
import EpisodesItem from './EpisodesItem';
import { memo } from 'react';

function EpisodesList({ visible, dataSeason }) {
    const { episodes } = dataSeason;
    return (
        <List>
            {episodes?.slice(0, visible)?.map((item, index) => (
                <EpisodesItem key={index} index={index} item={item} dataSeason={dataSeason} />
            ))}
        </List>
    );
}

export default memo(EpisodesList);
