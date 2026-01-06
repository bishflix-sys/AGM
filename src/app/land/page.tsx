
'use client';

import 'leaflet/dist/leaflet.css';
import AppLayout from "@/components/layout/app-layout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, CheckCircle, MapPin, PlusCircle, XCircle } from "lucide-react";
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import L from 'leaflet';

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

const parcelStatusColors = {
  affectée: '#0F3C68', // Bleu foncé
  libre: '#00853E', // Vert
  litige: '#BD272B',  // Rouge
};

interface MapProps {
  parcels: readonly Parcel[];
}

function Map({ parcels }: MapProps) {
  const position: L.LatLngTuple = [14.7407, -17.1391]; // Centered on Sébikotane

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
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


// Sample data for land parcels - now located around Sébikotane
const parcels = [
  {
    id: "P001",
    section: "A",
    area: 1200.50,
    status: 'affectée',
    beneficiary: "Moussa Diop",
    geom: [
      [14.7410, -17.1400],
      [14.7415, -17.1395],
      [14.7412, -17.1392],
      [14.7408, -17.1398]
    ]
  },
  {
    id: "P002",
    section: "B",
    area: 850.00,
    status: 'libre',
    beneficiary: null,
    geom: [
        [14.7420, -17.1380],
        [14.7423, -17.1377],
        [14.7417, -17.1374],
        [14.7415, -17.1378]
    ]
  },
  {
      id: "P003",
      section: "A",
      area: 2500.00,
      status: 'litige',
      beneficiary: "Fatou N'diaye",
      geom: [
          [14.7391, -17.1412],
          [14.7395, -17.1408],
          [14.7389, -17.1405],
          [14.7386, -17.1409]
      ]
  }
] as const;

export default function LandPage() {
  const MapComponent = useMemo(() => dynamic(() => Promise.resolve(Map), { 
    loading: () => <p>Chargement de la carte...</p>,
    ssr: false 
  }), []);

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Gestion Foncière</h2>
            <p className="text-muted-foreground">
              Registre des attributions foncières, parcelles et bénéficiaires.
            </p>
          </div>
          <Button><PlusCircle className="mr-2"/> Nouvelle Parcelle</Button>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Parcelles Libres</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">152</div>
                    <p className="text-xs text-muted-foreground">Disponibles pour affectation</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Parcelles Affectées</CardTitle>
                    <AreaChart className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">Total des parcelles attribuées</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dossiers en Litige</CardTitle>
                    <XCircle className="h-4 w-4 text-red-500"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">28</div>
                    <p className="text-xs text-muted-foreground">Dossiers en cours de résolution</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Superficie Totale</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">450 ha</div>
                    <p className="text-xs text-muted-foreground">Superficie cadastrée</p>
                </CardContent>
            </Card>
        </div>


        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="font-headline">Carte du Plan Foncier de Sébikotane</CardTitle>
                <CardDescription>Cliquez sur une parcelle pour afficher ses informations.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[60vh] w-full rounded-md border">
                    <MapComponent parcels={parcels} />
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
