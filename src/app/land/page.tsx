
'use client';

import 'leaflet/dist/leaflet.css';
import AppLayout from "@/components/layout/app-layout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Sample data for land parcels
const parcels = [
  {
    id: "P001",
    section: "A",
    area: 1200.50,
    status: "affectée",
    beneficiary: "Moussa Diop",
    geom: [
      [14.7241, -17.4342],
      [14.7245, -17.4338],
      [14.7239, -17.4335],
      [14.7236, -17.4339]
    ]
  },
  {
    id: "P002",
    section: "B",
    area: 850.00,
    status: "libre",
    beneficiary: null,
    geom: [
        [14.7250, -17.4350],
        [14.7253, -17.4347],
        [14.7247, -17.4344],
        [14.7245, -17.4348]
    ]
  },
  {
      id: "P003",
      section: "A",
      area: 2500.00,
      status: "litige",
      beneficiary: "Fatou N'diaye",
      geom: [
          [14.7221, -17.4322],
          [14.7225, -17.4318],
          [14.7219, -17.4315],
          [14.7216, -17.4319]
      ]
  }
];

const parcelStatusColors = {
  affectée: 'blue',
  libre: 'green',
  litige: 'red'
};

const Map = dynamic(() => import('@/components/map'), {
    loading: () => <p>Chargement de la carte...</p>,
    ssr: false
});


export default function LandPage() {
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
          <Button>+ Nouvelle Parcelle</Button>
        </header>

        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="font-headline">Carte des Parcelles</CardTitle>
                <CardDescription>Cliquez sur une parcelle pour voir ses informations.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[60vh] w-full rounded-md border">
                    <Map parcels={parcels} />
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
