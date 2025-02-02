import {
    Box,
    Typography,
    Stack,
    styled,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import { PlayIcon } from '~/components/Icon';

import uiConfigs from '~/config/ui.config';
import images from '~/assets/image';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import Image from '~/components/Image';
import { useGoWatchMovie } from '~/Hooks';
function EpisodesItem({ item, dataSeason }) {
    console.log({ item });
    const { handleOpen } = useGoWatchMovie();
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const CustomBox = styled(Box)(({ theme }) => ({
        position: 'relative',
        marginRight: theme.spacing(2),
        borderRadius: '5px',
        overflow: 'hidden',
        gridArea: '1 / 2 / 3 / 3',
        [theme.breakpoints.down('sm')]: {
            gridArea: '1 / 1 / 2 / 2',
        },
    }));
    const CustomIconButton = styled((props) => (
        <IconButton color="secondNeutral" {...props} />
    ))(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            opacity: '1',
        },
        position: 'absolute',
        opacity: '0',
        zIndex: '1',
        transition: '0.3s all ease-in-out',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        svg: {
            width: '30px',
            height: '30px',
        },
    }));
    const CustomImage = ({ item }) => {
        return (
            <Box sx={{ pt: 'calc(9/16*100%)', position: 'relative' }}>
                <Box sx={{ ...uiConfigs.style.positionFullSize }}>
                    <Image
                        alt={item.name}
                        src={
                            item?.still_path || dataSeason.poster_path
                                ? tmdbConfigs.posterPath(
                                      item?.still_path ??
                                          dataSeason.poster_path,
                                  )
                                : images.noImage19x6
                        }
                    />
                </Box>
            </Box>
        );
    };

    return (
        <Box>
            {/* <CustomDivider /> */}
            <Box
                sx={{
                    borderColor: 'rgb(255,255,255,0.5)',
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    px: 1,
                    py: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        sm: '0.2fr 0.45fr 1fr',
                        xs: '1.2fr 1fr',
                    },
                    gridTemplateRows: 'repeat(2, auto)',
                    alignItems: 'center',
                    '&:hover': {
                        '.MuiIconButton-root': {
                            opacity: 1,
                        },
                    },
                    '@media (hover: none)': {
                        '&:hover': {
                            '.MuiIconButton-root': {
                                opacity: 0,
                            },
                        },
                    },
                }}
            >
                <Typography
                    variant="h5"
                    component={'h5'}
                    textAlign={'center'}
                    sx={{
                        gridArea: '1 / 1 / 3 / 2',
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    {item.episode_number || 'N/A'}
                </Typography>
                <CustomBox>
                    <CustomIconButton
                        onClick={() =>
                            handleOpen({
                                id: item.show_id,
                                mediaType: 'tv',
                                episodeId: item.id,
                                seasonNumber: item.season_number,
                                episodeNumber: item.episode_number,
                            })
                        }
                    >
                        <PlayIcon />
                    </CustomIconButton>
                    <CustomImage item={item}></CustomImage>
                </CustomBox>
                <Stack
                    sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', msm: 'center' },
                    }}
                    justifyContent={'space-between'}
                >
                    <Typography
                        variant={pointDownSm ? 'subtitle1' : 'h6'}
                        sx={{
                            mr: { sm: 2, xs: 0 },
                            mb: { sm: 0, xs: 1 },
                        }}
                        fontWeight={500}
                        component={'h5'}
                    >
                        {`${pointDownSm ? `${item.episode_number}. ` : ''}${
                            item?.name || 'N/A'
                        }`}
                    </Typography>

                    {item.runtime && (
                        <Typography
                            whiteSpace={'nowrap'}
                            variant={pointDownSm ? 'subtitle2' : 'body1'}
                            fontWeight={400}
                            sx={{
                                textAlign: { sm: 'end', xs: 'start' },
                            }}
                        >
                            {`${item.runtime || 'N/A'} ${
                                !item.runtime ? '' : 'minutes'
                            }`}
                        </Typography>
                    )}
                </Stack>
                <Typography
                    variant={pointDownSm ? 'body2' : 'body1'}
                    mt={1}
                    fontWeight={400}
                    sx={{
                        gridArea: { sm: '2 / 3 / 3 / 4', xs: '2 / 1 / 3 / 3' },
                    }}
                >
                    {item.overview || 'N/A'}
                </Typography>
            </Box>
        </Box>
    );
}

export default memo(EpisodesItem);
