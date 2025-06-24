import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

// https://react-leaflet.js.org/

const defaultCenter: LatLngExpression = [51.505, -0.09];

export function Map() {

    const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);

    useEffect( () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([ latitude, longitude ]);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
        }
        else {
            // default center just in case
            console.error('Not supported');
            setUserLocation(defaultCenter)
        }
    }, []);
    

    if (!userLocation) return <p>Loading map...</p>;
  return (
    <MapContainer center={userLocation} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userLocation && (
        <Marker position={userLocation}>
        <Popup>This is a note</Popup>
      </Marker>
      )}
    </MapContainer>
  );
}
