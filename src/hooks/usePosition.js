import { useState, useEffect } from 'react';

const usePosition = (watch = false) => {
  const [position, setPosition] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const onChange = ({ coords: { latitude, longitude } }) => {
    setPosition({
      lat: latitude,
      lon: longitude,
    });
  };

  const onError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    let geo = null;
    setLoading(true);
    if ('geolocation' in navigator) {
      geo = navigator.geolocation;
    } else {
      setError('Geolocation not supported by browser.');
      setLoading(false);
      return null;
    }

    let watcher = null;

    if (watch) {
      watcher = geo.watchPosition(onChange, onError);
    } else {
      geo.getCurrentPosition(onChange, onError);
    }

    const clearWatch = () => watcher && geo.clearWatch(watcher);
    setLoading(false);
    return clearWatch;
  }, [watch]);

  return { ...position, loading, error };
};

export default usePosition;
