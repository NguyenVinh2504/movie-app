import { useState, forwardRef } from 'react';
import images from '~/assets/image';
const Image = forwardRef(({ src, alt, fallBack: customFallBack = images.noImage2x3, ...props }, ref) => {
    const [_fallBack, setFallBack] = useState('');
    return <img ref={ref} src={_fallBack || src} alt={alt} {...props} onError={() => setFallBack(customFallBack)} />;
});

export default Image;
