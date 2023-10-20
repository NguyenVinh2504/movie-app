import {
    Box,
    List,
    ListItemText,
    Typography,
    Stack,
    Divider,
    styled,
    IconButton,
    useMediaQuery,
    ListItemButton,
} from '@mui/material';
import { PlayIcon } from '../Icon';
import Image from '../Image';
import { tapPhim } from './taphim';

function EpisodesItem() {
    const typographyLine = {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitLineClamp: 2,
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
    };
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
        aspectRatio: '16/9',
        position: 'relative',
        width: '45%',
        marginRight: theme.spacing(2),
        borderRadius: 1,
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
        return <Image alt={item.name} src={`https://www.themoviedb.org/t/p/w500${item.still_path}`} />;
    };
    return (
        <List>
            {tapPhim.map((item, index) =>
                pointDownSm ? (
                    <Box key={index}>
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
                                                <Typography variant="body1" fontWeight={500} sx={{ ...typographyLine }}>
                                                    {item.episode_number + '. ' + item.name}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography variant="body2" fontWeight={300}>
                                                    {item.runtime + ' phút'}
                                                </Typography>
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
                    <Box key={index}>
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
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="subtitle1" fontWeight={500}>
                                            {item.runtime + ' phút'}
                                        </Typography>
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
                ),
            )}
        </List>
    );
}

export default EpisodesItem;
