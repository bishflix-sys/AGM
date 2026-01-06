
'use client';

import AppLayout from "@/components/layout/app-layout";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, CheckCircle, MapPin, MessageSquareWarning, PlusCircle, XCircle } from "lucide-react";


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
                <CardTitle className="font-headline">Plan Foncier</CardTitle>
                <CardDescription>La carte interactive sera bientôt disponible.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-16">
                <div className="text-center text-muted-foreground">
                    <MessageSquareWarning className="mx-auto h-12 w-12 mb-4" />
                    <p>La fonctionnalité de carte est en cours de développement.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
