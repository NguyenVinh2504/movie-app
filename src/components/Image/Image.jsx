import { useState, forwardRef } from 'react';
import images from '~/assets/image';
const Image = forwardRef(
    ({ src, alt, fallBack: customFallBack = images.noImage2x3, aspectRatio = 'none', sx, ...props }, ref) => {
        const [_fallBack, setFallBack] = useState('');
        return (
            <img
                loading={'lazy'}
                ref={ref}
                src={_fallBack || src}
                alt={alt}
                {...props}
                style={{ aspectRatio: aspectRatio, objectFit: 'cover', ...sx }}
                onError={() => setFallBack(customFallBack)}
            />
        );
    },
);

export default Image;
