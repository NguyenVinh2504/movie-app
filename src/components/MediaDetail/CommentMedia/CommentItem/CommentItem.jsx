import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import AvatarUser from '~/components/Avatar/AvatarUser';
import BodyText from '~/components/BodyText';
import { timeElapsed } from '~/utils/formatDate';

function CommentItem({ user, content, createAt }) {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const date = timeElapsed(createAt);
    return (
        <Stack direction={'row'} columnGap={2} py={2}>
            <AvatarUser
                src={user.avatar || user.temporaryAvatar}
                sx={{
                    width: { xs: '40px', sm: '50px' },
                    height: { xs: '40px', sm: '50px' },
                }}
            />
            <Box overflow={'hidden'}>
                <Stack direction={'row'}>
                    <Typography
                        variant={pointDownSm ? 'subtitle2' : 'subtitle1'}
                        fontWeight={500}
                        sx={{ mb: 0.5 }}
                        component={'h5'}
                        color={'rgb(255, 255, 255, 0.5)'}
                        noWrap
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        variant={pointDownSm ? 'subtitle2' : 'subtitle1'}
                        component={'span'}
                        sx={{
                            flexShrink: 0,
                            '&::before': {
                                content: `"•"`,
                                marginLeft: '4px',
                                marginRight: '4px',
                            },
                        }}
                    >
                        {date}
                    </Typography>
                </Stack>
                <BodyText content={content} />
            </Box>
        </Stack>
    );
}

export default CommentItem;
