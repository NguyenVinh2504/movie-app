import {
    Box,
    ListItemText,
    Typography,
    Stack,
    Divider,
    styled,
    IconButton,
    useMediaQuery,
    ListItemButton,
} from '@mui/material';
import { PlayIcon } from '~/components/Icon';

import uiConfigs from '~/config/ui.config';
import images from '~/assets/image';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function EpisodesItem({ item, dataSeason }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const ListCustoms = styled(ListItemButton)(({ theme }) => ({
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
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: '120%',
        },
        position: 'relative',
        width: '45%',
        marginRight: theme.spacing(2),
        borderRadius: '5px',
        overflow: 'hidden',
    }));
    const CustomIconButton = styled((props) => <IconButton color="secondNeutral" {...props} />)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            opacity: '1',
        },
        position: 'absolute',
        opacity: '0',
        transition: '0.3s all ease-in-out',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        svg: {
            width: '30px',
            height: '30px',
        },
    }));
    const CustomDivider = styled(Divider)(({ theme }) => ({
        borderColor: 'rgb(255,255,255,0.5)',
    }));
    const CustomImage = ({ item }) => {
        return (
            <Box sx={{ aspectRatio: '16/9' }}>
                <LazyLoadImage
                    effect="blur"
                    alt={item.name}
                    wrapperProps={{
                        style: { transitionDelay: '0.5s' },
                    }}
                    style={{ objectFit: 'cover' }}
                    src={
                        item?.still_path || dataSeason.poster_path
                            ? tmdbConfigs.posterPath(item?.still_path ?? dataSeason.poster_path)
                            : images.noImage19x6
                    }
                />
            </Box>
        );
    };
    return (
        <>
            {pointDownSm ? (
                <Box
                    component={'a'}
                    href={`https://vidsrc.to/embed/tv/${item.show_id}/${item.season_number}/${item.episode_number}`}
                >
                    <CustomDivider />
                    <ListItemButton sx={{ px: 0, py: 2 }}>
                        <ListItemText
                            primary={
                                <Stack direction={'row'} height={'100%'} alignItems={'center'}>
                                    {/* hinh anh */}
                                    <CustomBox>
                                        <CustomIconButton>
                                            <PlayIcon />
                                        </CustomIconButton>
                                        <CustomImage item={item}></CustomImage>
                                    </CustomBox>
                                    {/* hinh anh */}
                                    {/* title */}
                                    <ListItemText
                                        sx={{ width: '100%' }}
                                        primary={
                                            <Typography
                                                variant="body1"
                                                fontWeight={500}
                                                sx={{ ...uiConfigs.style.typoLines(2) }}
                                            >
                                                {item.episode_number + '. ' + item.name}
                                            </Typography>
                                        }
                                        secondary={
                                            item.runtime && (
                                                <Typography variant="body2" fontWeight={300}>
                                                    {item.runtime + ' phút'}
                                                </Typography>
                                            )
                                        }
                                    />
                                    {/* title */}
                                </Stack>
                            }
                            secondary={
                                <Typography variant="body2" mt={2}>
                                    {item.overview}
                                </Typography>
                            }
                        ></ListItemText>
                    </ListItemButton>
                </Box>
            ) : (
                <Box
                    component={'a'}
                    href={`https://vidsrc.to/embed/tv/${item.show_id}/${item.season_number}/${item.episode_number}`}
                >
                    <CustomDivider />
                    <ListCustoms sx={{ px: 0, py: 3 }}>
                        <Typography variant="h6" width={'20%'} textAlign={'center'}>
                            {item.episode_number}
                        </Typography>
                        <CustomBox>
                            <CustomIconButton>
                                <PlayIcon />
                            </CustomIconButton>
                            <CustomImage item={item}></CustomImage>
                        </CustomBox>
                        <ListItemText
                            sx={{ width: '100%' }}
                            primary={
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <Typography variant="h6" width={'80%'}>
                                        {item.name}
                                    </Typography>
                                    {item.runtime && (
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={500}
                                            width={'20%'}
                                            textAlign={'end'}
                                        >
                                            {item.runtime + ' phút'}
                                        </Typography>
                                    )}
                                </Stack>
                            }
                            secondary={
                                <Typography variant="subtitle2" mt={1} fontWeight={300}>
                                    {item.overview}
                                </Typography>
                            }
                        />
                    </ListCustoms>
                </Box>
            )}
        </>
    );
}

export default memo(EpisodesItem);
