import { Avatar } from '@mui/material';
function AvatarUser({ sx, ...props }) {
    return (
        <Avatar
            alt="H"
            src={
                'https://yt3.ggpht.com/z1ffaD03Fms_YQF2u3xt7KuStROhsJMi_oRPiL0MHeq_uu7_YydzCd_pJ0fcCvPgYc_iBns5W6g=s88-c-k-c0x00ffffff-no-rj'
            }
            sx={{ ...sx }}
            {...props}
        />
    );
}

export default AvatarUser;
