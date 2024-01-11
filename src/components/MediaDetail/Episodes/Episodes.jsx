import { Divider, IconButton, Paper, Skeleton, Typography, useMediaQuery } from '@mui/material';
import ButtonSelector from './ButtonSlector';
import { memo, useCallback, useEffect, useState } from 'react';
import mediaApi from '~/api/module/media.api';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';
import EpisodesList from './EpisodesList';
import { isEmpty } from 'lodash';

function Episodes({ seasons, seriesId, numberSeasonValue }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [numberSeason, setNumberSeason] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [seasonDetailValue, setSeasonDetailValue] = useState({});
    const [visible, setVisible] = useState(4);
    const [moreButton, setMoreButton] = useState(false);
    console.log('mou tap', seasons, undefined?.length !== 0);

    const handleSetSeasonNumber = useCallback((number) => {
        setNumberSeason(number);
        setSeasonDetailValue({});
        setVisible(4);
        setMoreButton(false);
        setIsLoading(true);
    }, []);
    useEffect(() => {
        if (seasons) {
            setIsLoading(false);
        }
    }, [seasons]);
    useEffect(() => {
        // console.log(isLoading);
        const getDataDetailSeason = async () => {
            setIsLoading(true);
            const { response, err } = await mediaApi.getDetailSeason({
                series_id: seriesId,
                season_number: numberSeason ?? numberSeasonValue,
            });
            if (response) {
                // console.log('set tap');
                setSeasonDetailValue({ ...response });
                setIsLoading(false);
            }
            if (err) {
                // console.log('set tap');
                setIsLoading(false);
            }
        };
        if (numberSeasonValue !== undefined) getDataDetailSeason();
    }, [numberSeason, numberSeasonValue, seriesId]);

    const handleShowMoreItems = () => {
        if (visible < seasonDetailValue?.episodes?.length) {
            setVisible(seasonDetailValue?.episodes?.length);
        }
    };
    const handleHideMoreItems = () => {
        setVisible(4);
        setMoreButton(false);
    };
    useEffect(() => {
        if (visible >= seasonDetailValue?.episodes?.length) {
            setMoreButton(true);
        }
    }, [seasonDetailValue?.episodes?.length, visible]);
    return (
        <Paper variant="outlined" sx={{ mt: 1, p: 2 }}>
            <Typography variant={pointDownSm ? 'h6' : 'h5'} mb={1} fontWeight={'500'}>
                Tập phim
            </Typography>
            {!isLoading && isEmpty(seasonDetailValue) && <Typography variant={'body1'}>Không có nội dung</Typography>}
            {!isEmpty(seasons) && <ButtonSelector seasons={seasons} onSeasonNuber={handleSetSeasonNumber} />}
            {isLoading &&
                Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <Skeleton
                            variant={'rounded'}
                            key={index}
                            sx={{ my: 2, height: { xs: '110px', sm: '160px' } }}
                        />
                    ))}
            {!isLoading && !isEmpty(seasonDetailValue) && (
                <EpisodesList dataSeason={seasonDetailValue} visible={visible} />
            )}
            {/* them tap phim */}
            {!isEmpty(seasonDetailValue) && (
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
            )}
            {/* them tap phim */}
        </Paper>
    );
}

export default memo(Episodes);
