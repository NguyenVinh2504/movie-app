import { Avatar } from '@mui/material';
function AvatarUser({ sx, src, alt, ...props }) {
    return <Avatar alt={alt} src={src} sx={{ ...sx }} {...props} />;
}

export default AvatarUser;
