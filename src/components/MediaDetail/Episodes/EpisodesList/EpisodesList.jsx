import { Divider, IconButton, List, ListItemText, Typography } from '@mui/material';
import EpisodesItem from './EpisodesItem';
import { memo, useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';
import { isEmpty } from 'lodash';
function EpisodesList({ dataSeason, searchNumberEp }) {
    const [visible, setVisible] = useState(4);

    // Sử dụng optional chaining để kiểm tra existence an toàn
    const episodes = dataSeason?.episodes || [];

    // Tạo searchTerm với chữ thường cho tìm kiếm không phân biệt chữ hoa chữ thường
    const searchTerm = searchNumberEp?.toLowerCase() || ''; // Trống nếu searchNumberEp không có giá trị

    // Lọc các tập phim theo điều kiện tìm kiếm
    const filteredEpisodes = episodes.filter((episode) => {
        const episodeNumberMatch = episode?.episode_number?.toString()?.toLowerCase()?.includes(searchTerm);
        const episodeNameMatch = episode?.name?.toString()?.toLowerCase()?.includes(searchTerm);
        return episodeNumberMatch || episodeNameMatch;
    });
    const handleShowMoreItems = () => {
        if (visible < filteredEpisodes?.length) {
            setVisible((prevVisible) => (filteredEpisodes?.length < 50 ? filteredEpisodes?.length : prevVisible + 10));
        } else {
            setVisible(4);
        }
    };

    // Lấy số lượng tập phim đã lọc
    const hasEpisodes = filteredEpisodes.length > 0;

    useEffect(() => {
        setVisible(4);
    }, [dataSeason]);
    // Trả về danh sách rỗng nếu không có tập phim tìm thấy
    if (!hasEpisodes) {
        return (
            <List>
                <ListItemText sx={{ px: 1, py: 3 }}>
                    <Typography variant="h6" textAlign="center">
                        Không tìm thấy tập phim
                    </Typography>
                </ListItemText>
            </List>
        );
    }
    // Trả về danh sách các tập phim được tìm thấy, giới hạn theo visible
    return (
        <>
            <List>
                {filteredEpisodes.slice(0, visible).map((item, index) => (
                    <EpisodesItem key={index} index={index} item={item} dataSeason={dataSeason} />
                ))}
            </List>
            {!isEmpty(filteredEpisodes) && filteredEpisodes?.length > 4 && (
                <Divider>
                    <IconButton
                        onClick={() => handleShowMoreItems()}
                        color="secondNeutral"
                        size="large"
                        sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                    >
                        {visible < filteredEpisodes?.length ? <ArrowDownIcon /> : <ArrowUpIcon />}
                    </IconButton>
                </Divider>
            )}
        </>
    );
}

export default memo(EpisodesList);
