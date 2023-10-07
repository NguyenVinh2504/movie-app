import { Toolbar } from '@mui/material';

function PageWrapper({ children }) {
    return <Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>{children}</Toolbar>;
}

export default PageWrapper;
