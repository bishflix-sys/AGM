
'use client';

import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button } from './ui/button';

// Fix for default icon issue with Webpack
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}


type Parcel = {
  id: string;
  section: string;
  area: number;
  status: 'libre' | 'affectée' | 'litige';
  beneficiary: string | null;
  geom: [number, number][];
};

interface MapProps {
  parcels: readonly Parcel[];
}

const parcelStatusColors = {
  affectée: '#0F3C68', // Bleu foncé
  libre: '#00853E', // Vert
  litige: '#BD272B',  // Rouge
};

export default function Map({ parcels }: MapProps) {
  const position: L.LatLngTuple = [14.724, -17.434]; // Centered on a sample parcel

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parcels.map((parcel) => (
        <Polygon
          key={parcel.id}
          positions={parcel.geom as L.LatLngExpression[]}
          pathOptions={{ color: parcelStatusColors[parcel.status], weight: 2, fillOpacity: 0.5 }}
        >
          <Popup>
            <div className="space-y-2 font-body text-sm">
                <h3 className="font-headline font-semibold text-base">Parcelle {parcel.id}</h3>
                <p><strong>Section:</strong> {parcel.section}</p>
                <p><strong>Superficie:</strong> {parcel.area} m²</p>
                <p><strong>Statut:</strong> <span className="font-medium" style={{color: parcelStatusColors[parcel.status]}}>{parcel.status.charAt(0).toUpperCase() + parcel.status.slice(1)}</span></p>
                {parcel.beneficiary && <p><strong>Bénéficiaire:</strong> {parcel.beneficiary}</p>}
                <Button size="sm" className="w-full mt-2">Voir la fiche foncière</Button>
            </div>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
}
