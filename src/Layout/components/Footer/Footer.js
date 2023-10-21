import styled from '@emotion/styled';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { Box, Stack, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '~/components/Logo';
import { menuItems } from '~/config/MenuItemsConfig';

function Footer() {
    const CustomStack = styled((props) => <Stack direction={'row'} justifyContent={'center'} py={1.5} {...props} />)(
        ({ theme }) => ({}),
    );
    return (
        <footer>
            <Toolbar
                sx={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    pt: 3,
                    flexWrap: 'wrap',
                    bgcolor: 'rgba(255,255,255,0.09)',
                }}
            >
                <Box width={'100%'}>
                    <CustomStack>
                        <Logo />
                    </CustomStack>
                    <CustomStack spacing={5}>
                        <Facebook />
                        <GitHub />
                        <Google />
                    </CustomStack>
                    <CustomStack sx={{ fontSize: '16px' }} spacing={3}>
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                // className={(nav) => cx({ active: nav.isActive }, 'menu')}
                                to={item.path}
                                end
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </CustomStack>
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

export default Footer;