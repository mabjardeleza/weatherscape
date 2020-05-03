import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { usePrevious } from '../../hooks';

const UNSPLASH_REFERRAL_PARAMETERS = `utm_source=${process.env.REACT_APP_UNSPLASH_APP_NAME}&utm_medium=referral`;

const ImageBackground = ({ image }) => {
  const ref = useRef();
  const prevImageUrl = usePrevious(image.urls.full);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (image.urls.full !== prevImageUrl) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [prevImageUrl, image.urls.full]);

  const url =
    image.urls.full &&
    `${image.urls.full}?w=${size.width}&h=${size.height}&fit=crop&fm=webp`;

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(120, 202, 210, 0.8) 0%, rgba(98, 168, 172, 0.8) 51%, rgba(84, 151, 167, 0.8) 75%), url(${url})`,
      }}
      className="gradient-background"
    >
      {image.user.name && (
        <div className="photo-attributes">
          Photo by{' '}
          <a href={`${image.user.links.html}?${UNSPLASH_REFERRAL_PARAMETERS}`}>
            {image.user.name}
          </a>{' '}
          on{' '}
          <a href={`https://unsplash.com?${UNSPLASH_REFERRAL_PARAMETERS}`}>
            Unsplash
          </a>
        </div>
      )}
    </div>
  );
};

ImageBackground.propTypes = {
  image: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      links: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    urls: PropTypes.shape({
      full: PropTypes.string,
    }),
  }),
};

ImageBackground.defaultProps = {
  image: {
    user: {
      name: '',
      links: {
        html: '',
      },
    },
    urls: {
      full: '',
    },
  },
};

export default ImageBackground;
