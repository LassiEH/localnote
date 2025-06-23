import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

// https://react-leaflet.js.org/

const center: LatLngExpression = [51.505, -0.09];

export function Map() {
  return (
    <MapContainer center={center} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>This is a note</Popup>
      </Marker>
    </MapContainer>
  );
}
