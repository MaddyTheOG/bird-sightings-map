import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

function Home() {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      const globe = Globe()(globeRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundColor('#000')
        .pointOfView({ lat: 20, lng: 0, altitude: 2 });
    }
  }, []);

  return (
    <div ref={globeRef} style={{ width: '100vw', height: '100vh' }} />
  );
}

export default Home;
