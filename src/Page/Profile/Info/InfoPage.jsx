import { Box, Divider, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
import PaperProfile from '../components/PaperProfile';
import { formatDate } from '~/utils/formatDate';

const Item = ({ primaryText, secondaryText, ...props }) => {
    return (
        <Box p={2} {...props}>
            <ListItemText
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    overflow: 'hidden',
                }}
                primary={
                    <Typography
                        variant="subtitle1"
                        fontWeight={'500'}
                        component={'h2'}
                        flexShrink={0}
                    >
                        {primaryText}
                    </Typography>
                }
                secondary={
                    <Typography
                        variant="subtitle1"
                        mt={0}
                        fontWeight={'300'}
                        component={'p'}
                    >
                        {secondaryText}
                    </Typography>
                }
            />
        </Box>
    );
};
function InfoPage() {
    const user = useSelector(userValue);
    // const DividerCustom = (props) => {
    // return <Divider {...props} sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} component="li" />;
    // };
    const dateUser = formatDate(user?.createdAt, 'vi-VN');
    return (
        <PaperProfile>
            <Item primaryText={'Họ và tên:'} secondaryText={user?.name} />
            <Divider variant="middle" />
            <Item primaryText={'Email:'} secondaryText={user?.email} />
            <Divider variant="middle" />
            <Item primaryText={'User Name:'} secondaryText={user?.userName} />
            <Divider variant="middle" />
            <Item
                primaryText={'Điện thoại:'}
                secondaryText={user?.phone || 'Không có'}
            />
            <Divider variant="middle" />
            <Item primaryText={'Ngày tham gia:'} secondaryText={dateUser} />
        </PaperProfile>
    );
}

export default InfoPage;
