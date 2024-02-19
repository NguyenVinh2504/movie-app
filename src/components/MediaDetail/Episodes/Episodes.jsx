import { Divider, IconButton, Skeleton, Typography } from '@mui/material';
import ButtonSelector from './ButtonSlector';
import { memo, useCallback, useEffect, useState } from 'react';
import mediaApi from '~/api/module/media.api';
import { ArrowDownIcon, ArrowUpIcon } from '~/components/Icon';
import EpisodesList from './EpisodesList';
import { isEmpty } from 'lodash';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import PropTypes from 'prop-types';
import CategoryMovieDetail from '../components/CategoryMovieDetail';

function Episodes({ seasons, seriesId, isLoading }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [visible, setVisible] = useState(4);
    const [moreButton, setMoreButton] = useState(false);
    const handleSetSeasonNumber = useCallback((number) => {
        setSelectedIndex(number);
        setVisible(4);
        setMoreButton(false);
    }, []);

    const getDataDetailSeason = async () => {
        const { response, err } = await mediaApi.getDetailSeason({
            series_id: seriesId,
            season_number: seasons[selectedIndex]?.season_number,
        });
        if (response) {
            return response;
        }
        if (err) throw err;
    };

    const {
        data: seasonDetailValue,
        isFetching,
        // isPlaceholderData,
    } = useQuery({
        queryKey: ['episodes', seasons[selectedIndex]?.season_number, seriesId],
        queryFn: getDataDetailSeason,
        enabled: !isEmpty(seasons),
        placeholderData: keepPreviousData,
    });

    // console.log('isPlaceholderData', isPlaceholderData, 'isFetching', isFetching, 'data', seasonDetailValue);
    const handleShowMoreItems = () => {
        if (visible < seasonDetailValue?.episodes?.length) {
            setVisible(seasonDetailValue?.episodes?.length < 50 ? seasonDetailValue?.episodes?.length : visible + 10);
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
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Tập Phim'} />
            {!isEmpty(seasons) && (
                <ButtonSelector
                    seasons={seasons}
                    onSeasonNumber={handleSetSeasonNumber}
                    selectedIndex={selectedIndex}
                />
            )}
            {!isLoading && !isFetching && isEmpty(seasonDetailValue) && (
                <Typography variant={'body1'}>Không có nội dung</Typography>
            )}
            {(isLoading || isFetching) &&
                Array(4)
                    .fill(0)
                    .map((item, index) => (
                        <Skeleton
                            variant={'rounded'}
                            key={index}
                            sx={{ my: 2, height: { xs: '110px', sm: '160px' } }}
                        />
                    ))}
            {!isLoading && !isFetching && !isEmpty(seasonDetailValue) && (
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
        </WrapperMovieDetail>
    );
}
Episodes.propTypes = {
    seasons: PropTypes.array.isRequired,
    seriesId: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
export default memo(Episodes);
