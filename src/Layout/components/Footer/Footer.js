import styled from '@emotion/styled';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { Box, Container, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '~/components/Logo';
import { menuItems } from '~/config/MenuItemsConfig';

function Footer() {
    const CustomStack = styled((props) => (
        <Stack direction={'row'} justifyContent={'center'} py={1.5} flexWrap={'wrap'} {...props} />
    ))(({ theme }) => ({}));
    return (
        <footer>
            <Toolbar
                sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    py: 2,
                    flexWrap: 'wrap',
                    bgcolor: '#141212',
                }}
            >
                <Box width={'100%'}>
                    <CustomStack>
                        <Box sx={{ img: { height: '30px' } }}>
                            {' '}
                            <Logo />
                        </Box>
                    </CustomStack>
                    <CustomStack spacing={5}>
                        <Facebook />
                        <GitHub />
                        <Google />
                    </CustomStack>
                    <Container maxWidth="auto" sx={{ maxWidth: '700px' }}>
                        <Grid container fontSize={'16px'} spacing={2}>
                            {menuItems.map((item, index) => (
                                <Grid item key={index} xs={12} md textAlign={'center'}>
                                    <NavLink
                                        // className={(nav) => cx({ active: nav.isActive }, 'menu')}
                                        to={item.path}
                                        end
                                    >
                                        {item.title}
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <CustomStack sx={{ fontSize: '16px' }} spacing={3}></CustomStack>
                </Box>
            </Toolbar>
            <CustomStack>
                <Typography variant="subtitle2" fontWeight={'300'} textAlign={'left'}>
                    Powered by Nguyen Vinh
                </Typography>
            </CustomStack>
        </footer>
    );
}

export default memo(Footer);
