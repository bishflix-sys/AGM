
'use client';

import AppLayout from "@/components/layout/app-layout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, CheckCircle, MapPin, PlusCircle, XCircle } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useMemo } from 'react';

// Sample data for land parcels
const parcels = [
  { id: 'P-SBK-A-001', section: 'A', area: 350, status: 'affectée' as const, beneficiary: 'Moussa Diop', geom: [[14.7412, -17.1410], [14.7415, -17.1405], [14.7410, -17.1402], [14.7407, -17.1408]] },
  { id: 'P-SBK-A-002', section: 'A', area: 400, status: 'libre' as const, beneficiary: null, geom: [[14.7420, -17.1395], [14.7423, -17.1390], [14.7418, -17.1387], [14.7415, -17.1392]] },
  { id: 'P-SBK-B-015', section: 'B', area: 300, status: 'litige' as const, beneficiary: 'Famille Ndiaye', geom: [[14.7390, -17.1425], [14.7393, -17.1420], [14.7388, -17.1417], [14.7385, -17.1422]] },
  { id: 'P-SBK-C-102', section: 'C', area: 500, status: 'affectée' as const, beneficiary: 'Aminata Sow', geom: [[14.7405, -17.1380], [14.7408, -17.1375], [14.7403, -17.1372], [14.7400, -17.1377]] },
];


export default function LandPage() {
  const Map = useMemo(() => dynamic(() => import('@/components/map'), { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-muted flex items-center justify-center"><p>Chargement de la carte...</p></div>
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
           <Link href="/land/new">
            <Button><PlusCircle className="mr-2"/> Nouvelle Parcelle</Button>
          </Link>
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

        <Card className="h-[600px]">
            <CardHeader>
                <CardTitle className="font-headline">Plan Foncier de Sébikotane</CardTitle>
                <CardDescription>Cliquez sur une parcelle pour voir les détails.</CardDescription>
            </CardHeader>
            <CardContent className="h-[calc(100%-80px)]">
                 <Map parcels={parcels}/>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
