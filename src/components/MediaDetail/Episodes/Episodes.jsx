import { Box, Skeleton, Stack, Tooltip, Typography } from '@mui/material';
import ButtonSelector from './ButtonSlector';
import { memo, useCallback, useState } from 'react';
import mediaApi from '~/api/module/media.api';
import EpisodesList from './EpisodesList';
import { isEmpty } from 'lodash';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import WrapperMovieDetail from '../components/WrapperMovieDetail';
import PropTypes from 'prop-types';
import CategoryMovieDetail from '../components/CategoryMovieDetail';
import Input from '~/components/Input';

function Episodes({ seasons, seriesId, isLoading }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchNumberEp, setSearchNumberEp] = useState('');
    const handleSetSeasonNumber = useCallback((number) => {
        setSelectedIndex(number);
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
    return (
        <WrapperMovieDetail>
            <CategoryMovieDetail valueTitle={'Tập Phim'} />
            <Stack direction={'row'} justifyContent={'space-between'} gap={1} flexWrap={'wrap'}>
                {!isEmpty(seasons) && (
                    <ButtonSelector
                        seasons={seasons}
                        onSeasonNumber={handleSetSeasonNumber}
                        selectedIndex={selectedIndex}
                    />
                )}
                <Tooltip title={`${seasonDetailValue?.episodes?.length} tập`} placement="bottom-start">
                    <Box
                        sx={{
                            width: { xs: '25%', sm: '25%', md: '20%' },
                        }}
                    >
                        <Input
                            placeholder={'Tìm tập'}
                            // type={'number'}
                            value={searchNumberEp}
                            inputEvent={{
                                onChange: (e) => {
                                    setSearchNumberEp(e.target.value);
                                },
                            }}
                        />
                    </Box>
                </Tooltip>
            </Stack>
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
                <EpisodesList dataSeason={seasonDetailValue} searchNumberEp={searchNumberEp} />
            )}
        </WrapperMovieDetail>
    );
}
Episodes.propTypes = {
    seasons: PropTypes.array.isRequired,
    seriesId: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
export default memo(Episodes);
