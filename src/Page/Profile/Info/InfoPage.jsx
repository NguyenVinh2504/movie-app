import { Box, Grid, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function InfoPage() {
    const user = useSelector(userValue);
    // const DividerCustom = (props) => {
    //     return <Divider {...props} sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} component="li" />;
    // };
    const Item = ({ primaryText, secondaryText, ...props }) => {
        return (
            <Box bgcolor={'#141212'} borderRadius={2} p={2} {...props}>
                <ListItemText
                    primary={
                        <Typography variant="h6" fontWeight={'500'}>
                            {primaryText}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="subtitle1" mt={1} fontWeight={'300'}>
                            {secondaryText}
                        </Typography>
                    }
                />
            </Box>
            // <ListItemText
            //     {...props}
            //     primary={
            //         <Typography variant="h6" fontWeight={'500'}>
            //             {primaryText}
            //         </Typography>
            //     }
            //     secondary={
            //         <Typography variant="subtitle1" mt={1}>
            //             {secondaryText}
            //         </Typography>
            //     }
            // />
        );
    };
    return (
        // <List sx={{ bgcolor: '#141212', borderRadius: 2 }}>
        //     {/* <Box sx={{ bgcolor: '#141212', p: 3, display: 'flex' }}>
        //         <Typography variant="h5">Ho ten</Typography>
        //         <Typography variant="subtitle1">{user?.name}</Typography>
        //     </Box> */}
        //     <ListItem>
        //         <ListItemsText primaryText={'Họ và tên'} secondaryText={user?.name} />
        //     </ListItem>
        //     <DividerCustom />
        //     <ListItem>
        //         <ListItemsText primaryText={'Email'} secondaryText={user?.email} />
        //     </ListItem>
        //     <DividerCustom />
        //     <ListItem>
        //         <ListItemsText primaryText={'User name'} secondaryText={user?.userName} />
        //     </ListItem>
        //     <DividerCustom />
        //     <ListItem>
        //         <ListItemsText primaryText={'Điện thoại'} secondaryText={user?.phone ?? 'Chưa thêm số điện thoại'} />
        //     </ListItem>
        // </List>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Item primaryText={'Họ và tên'} secondaryText={user?.name} />
            </Grid>
            <Grid item xs={12}>
                <Item primaryText={'Email'} secondaryText={user?.email} />
            </Grid>
            <Grid item xs={12}>
                <Item primaryText={'User Name'} secondaryText={user?.userName} />
            </Grid>
            <Grid item xs={12}>
                <Item primaryText={'Điện thoại'} secondaryText={user?.phone === '' ? 'Không có' : user?.phone} />
            </Grid>
        </Grid>
    );
}

export default InfoPage;
