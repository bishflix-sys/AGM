
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileDown, FileText, Landmark, Users } from "lucide-react";


const reports = [
    { name: "Rapport Financier Mensuel", category: "Finance", icon: <Landmark className="h-8 w-8 text-primary"/> },
    { name: "Rapport des Ressources Humaines", category: "RH", icon: <Users className="h-8 w-8 text-primary"/> },
    { name: "Synthèse de l'État Civil", category: "État Civil", icon: <FileText className="h-8 w-8 text-primary"/> },
    { name: "Rapport d'activité des Projets", category: "Projets", icon: <FileText className="h-8 w-8 text-primary"/> },
]

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Rapports & Statistiques</h2>
          <p className="text-muted-foreground">
            Génération de rapports et consultation des statistiques globales.
          </p>
        </header>

        <Card>
            <CardHeader>
                <CardTitle>Générateur de Rapports</CardTitle>
                <CardDescription>Sélectionnez un modèle de rapport et la période souhaitée.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choisir un modèle de rapport..."/>
                        </SelectTrigger>
                        <SelectContent>
                           {reports.map(r => <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                 <div>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choisir une période..."/>
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="month">Mois dernier</SelectItem>
                           <SelectItem value="quarter">Trimestre dernier</SelectItem>
                           <SelectItem value="year">Année dernière</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Button className="w-full"><FileDown className="mr-2"/> Générer le rapport</Button>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-2">
            <h3 className="text-xl font-semibold">Modèles de rapports disponibles</h3>
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {reports.map(report => (
                    <Card key={report.name}>
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                            {report.icon}
                            <p className="mt-4 font-semibold">{report.name}</p>
                            <p className="text-sm text-muted-foreground">{report.category}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </AppLayout>
  );
}
