import { Box, Divider, IconButton, Skeleton, Typography } from '@mui/material';
import ButtonSelector from './ButtonSlector';
import { memo, useCallback, useEffect, useState } from 'react';
import mediaApi from '~/api/module/media.api';
import { toast } from 'react-toastify';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';
import EpisodesList from './EpisodesList';

function Episodes({ seasons, seriesId, numberSeasonValue }) {
    const [numberSeason, setNumberSeason] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [seasonDetailValue, setSeasonDetailValue] = useState({});
    const [visible, setVisible] = useState(4);
    const [moreButton, setMoreButton] = useState(false);
    // console.log('mou tap', seasons, numberSeasonValue);

    const handleSetSeasonNumber = useCallback((number) => {
        setNumberSeason(number);
        setSeasonDetailValue({});
        setVisible(4);
        setMoreButton(false);
        setIsLoading(true);
    }, []);

    useEffect(() => {
        const getDataDetailSeason = async () => {
            const { response, err } = await mediaApi.getDetailSeason({
                series_id: seriesId,
                season_number: numberSeason ?? numberSeasonValue,
            });
            if (err) toast.error(err.message);
            if (response) {
                // console.log('set tap');
                setSeasonDetailValue({ ...response });
                setIsLoading(false);
            }
        };
        if (numberSeasonValue) getDataDetailSeason();
    }, [numberSeason, numberSeasonValue, seriesId]);

    const handleShowMoreItems = () => {
        if (visible < seasonDetailValue.episodes?.length) {
            setVisible((props) => props + 4);
        }
    };
    const handleHideMoreItems = () => {
        setVisible(4);
        setMoreButton(false);
    };
    useEffect(() => {
        if (visible >= seasonDetailValue.episodes?.length) {
            setMoreButton(true);
        }
    }, [seasonDetailValue.episodes?.length, visible]);
    return (
        <Box mt={3}>
            <Typography variant={'h5'} mb={1} fontWeight={'500'}>
                Tập phim
            </Typography>
            {seasons && <ButtonSelector seasons={seasons} onSeasonNuber={handleSetSeasonNumber} />}
            {isLoading &&
                Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <Skeleton variant={'rectangular'} key={index} height={'160px'} sx={{ my: 2 }} />
                    ))}
            {!isLoading && <EpisodesList dataSeason={seasonDetailValue} visible={visible} />}
            {/* them tap phim */}
            <Divider>
                {moreButton ? (
                    <IconButton
                        onClick={handleHideMoreItems}
                        color="secondNeutral"
                        size="large"
                        sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                    >
                        <ArrowUpIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={handleShowMoreItems}
                        color="secondNeutral"
                        size="large"
                        sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                    >
                        <ArrowDownIcon />
                    </IconButton>
                )}
            </Divider>
            {/* them tap phim */}
        </Box>
    );
}

export default memo(Episodes);
