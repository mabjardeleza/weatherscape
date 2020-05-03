import { useState, useEffect } from 'react';

const usePosition = (watch = false) => {
  const [position, setPosition] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChange = ({ coords: { latitude, longitude } }) => {
    setPosition({
      lat: latitude,
      lon: longitude,
    });
  };

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    let geo = null;
    setLoading(true);
    if ('geolocation' in navigator) {
      geo = navigator.geolocation;
    } else {
      setError(true);
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
