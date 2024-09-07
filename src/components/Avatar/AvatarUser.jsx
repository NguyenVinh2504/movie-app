import { Avatar } from '@mui/material';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { userValue } from '~/redux/selectors';
function AvatarUser({ sx, src, alt, ...props }) {
    const user = useSelector(userValue);

    return (
        <Avatar
            alt={alt}
            src={src ? src : user?.avatar ?? user?.temporaryAvatar}
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            {...props}
            loading="lazy"
        />
    );
}

export default memo(AvatarUser);
