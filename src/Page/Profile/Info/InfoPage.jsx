import { Box, Divider, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function InfoPage() {
    const user = useSelector(userValue);
    // const DividerCustom = (props) => {
    //     return <Divider {...props} sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} component="li" />;
    // };
    const Item = ({ primaryText, secondaryText, ...props }) => {
        return (
            <Box p={2} {...props}>
                <ListItemText
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, overflow: 'hidden' }}
                    primary={
                        <Typography variant="subtitle1" fontWeight={'500'}>
                            {primaryText}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="subtitle1" mt={0} fontWeight={'300'}>
                            {secondaryText}
                        </Typography>
                    }
                />
            </Box>
        );
    };
    return (
        <Box
            spacing={1}
            bgcolor={'#141212'}
            borderRadius={2}
            border={'1px solid hsla(0,0%,100%,.1)'}
            overflow={'hidden'}
        >
            <Item primaryText={'Họ và tên:'} secondaryText={user?.name} />
            <Divider variant="middle" />
            <Item primaryText={'Email:'} secondaryText={user?.email} />
            <Divider variant="middle" />
            <Item primaryText={'User Name:'} secondaryText={user?.userName} />
            <Divider variant="middle" />
            <Item primaryText={'Điện thoại:'} secondaryText={user?.phone === '' ? 'Không có' : user?.phone} />
        </Box>
    );
}

export default InfoPage;
