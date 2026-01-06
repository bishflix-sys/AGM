
'use client';

import 'leaflet/dist/leaflet.css';
import AppLayout from "@/components/layout/app-layout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, CheckCircle, MapPin, PlusCircle, XCircle } from "lucide-react";
import dynamic from 'next/dynamic';

// Sample data for land parcels
const parcels = [
  {
    id: "P001",
    section: "A",
    area: 1200.50,
    status: 'affectée',
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
    status: 'libre',
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
      status: 'litige',
      beneficiary: "Fatou N'diaye",
      geom: [
          [14.7221, -17.4322],
          [14.7225, -17.4318],
          [14.7219, -17.4315],
          [14.7216, -17.4319]
      ]
  }
] as const;

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
                <CardTitle className="font-headline">Carte du Plan Foncier</CardTitle>
                <CardDescription>Cliquez sur une parcelle pour afficher ses informations.</CardDescription>
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

    