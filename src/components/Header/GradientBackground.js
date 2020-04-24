import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useDebouncedResizeObserver } from '../../hooks';
import { imageActions } from '../../actions';

const GradientBackground = ({ image }) => {
  const dispatch = useDispatch();
  const { ref } = useDebouncedResizeObserver((sizes) => {
    dispatch(imageActions.resize(sizes));
  }, 2000);
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(120, 202, 210, 0.8) 0%, rgba(98, 168, 172, 0.8) 51%, rgba(84, 151, 167, 0.8) 75%), url(${image.urls.full})`,
      }}
      className="gradient-background"
    >
      {image.user.name && (
        <div className="photo-attributes">
          Photo by{' '}
          <a
            href={`${image.user.links.html}?utm_source=Weather_App&utm_medium=referral`}
          >
            {image.user.name}
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com?utm_source=Weather_App&utm_medium=referral">
            Unsplash
          </a>
        </div>
      )}
    </div>
  );
};

GradientBackground.propTypes = {
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

GradientBackground.defaultProps = {
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

export default GradientBackground;
