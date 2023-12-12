import { useState, forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import images from '~/assets/image';
const Image = forwardRef(
    ({ src, alt, fallBack: customFallBack = images.noImage2x3, aspectRatio = 'none', sx, ...props }, ref) => {
        const [_fallBack, setFallBack] = useState('');
        return (
            <LazyLoadImage
                ref={ref}
                src={_fallBack || src}
                alt={alt}
                {...props}
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: '0.5s' },
                }}
                width={'100%'}
                height={'100%'}
                style={{ aspectRatio: aspectRatio, objectFit: 'cover', ...sx }}
                onError={() => setFallBack(customFallBack)}
            />
        );
    },
);

export default Image;
