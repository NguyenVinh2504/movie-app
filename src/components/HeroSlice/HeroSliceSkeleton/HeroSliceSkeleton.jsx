import { Grid, Skeleton, Stack } from '@mui/material';

function HeroSliceSkeleton() {
    return (
        <Grid
            container
            sx={{
                aspectRatio: {
                    sm: '100/43',
                    xs: '2/3',
                },
                width: '100%',
                height: '100%',
                backgroundColor: '#121212',
                position: 'relative',
                alignItems: { xs: 'flex-end', sm: 'center' },
                justifyContent: { sm: 'flex-start' },
                paddingLeft: { lg: '80px', sm: '60px', xs: '30px' },
                paddingRight: '15px',
            }}
        >
            <Grid item lg={6} md={6} sm={8} xs={12}>
                <Stack
                    sx={{ gap: { xs: 1, md: 2 } }}
                    alignItems={{ sm: 'flex-start' }}
                    textAlign={{ sm: 'left' }}
                    marginBottom={{ xs: '50px', sm: '0' }}
                >
                    <Skeleton
                        variant="rounded"
                        sx={{ height: { xs: '50px', sm: '60px', md: '100px' }, width: '100%' }}
                    />
                    <Skeleton variant="rounded" sx={{ height: { xs: '35px', sm: '40px', md: '72px' }, width: '80%' }} />
                    <Stack flexDirection={'row'} sx={{ gap: { lg: 2, xs: 0, sm: 1 } }}>
                        <Skeleton
                            variant="rounded"
                            sx={{
                                height: { xs: '38px', md: '44px', lg: '50px' },
                                width: { xs: '107px', md: '130px', lg: '180px' },
                            }}
                        />
                        <Skeleton
                            variant="rounded"
                            sx={{
                                display: { sm: 'inline-flex', xs: 'none' },
                                height: { xs: '38px', md: '44px', lg: '50px' },
                                width: { xs: '107px', md: '130px', lg: '180px' },
                            }}
                        />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default HeroSliceSkeleton;
