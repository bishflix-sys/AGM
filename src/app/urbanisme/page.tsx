
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building, Eye, FilePlus, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const permits = [
    { id: "PC-2024-078", applicant: "M. Ibrahima Diallo", type: "Permis de Construire", date: "15/07/2024", status: "En instruction" },
    { id: "DT-2024-112", applicant: "SCI Kër Mame", type: "Déclaration de Travaux", date: "12/07/2024", status: "Validé" },
    { id: "PA-2024-034", applicant: "Sokhna Diop", type: "Permis d'Aménager", date: "05/07/2024", status: "Rejeté" },
    { id: "PC-2024-075", applicant: "Oumar N'Diaye", type: "Permis de Construire", date: "02/07/2024", status: "Validé" },
];

const getStatusVariant = (status: string) => {
    switch (status) {
        case "Validé": return "default";
        case "En instruction": return "outline";
        case "Rejeté": return "destructive";
        default: return "secondary";
    }
};

export default function UrbanismePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Urbanisme & Habitat</h2>
            <p className="text-muted-foreground">
              Gestion des permis de construire, autorisations et lotissements.
            </p>
          </div>
          <Link href="/urbanisme/new">
            <Button><FilePlus className="mr-2"/> Nouveau Dossier</Button>
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dossiers en Instruction</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">15</div>
                    <p className="text-xs text-muted-foreground">Délai moyen: 8 jours</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Permis Validés (Mois)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+32</div>
                    <p className="text-xs text-muted-foreground">+5% vs mois dernier</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Permis Rejetés (Mois)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">Stabilité</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Visites planifiées</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">Cette semaine</p>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Dossiers d'Urbanisme Récents</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Numéro</TableHead>
                            <TableHead>Demandeur</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Date de dépôt</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {permits.map(permit => (
                            <TableRow key={permit.id}>
                                <TableCell className="font-mono">{permit.id}</TableCell>
                                <TableCell className="font-medium">{permit.applicant}</TableCell>
                                <TableCell>{permit.type}</TableCell>
                                <TableCell>{permit.date}</TableCell>
                                <TableCell><Badge variant={getStatusVariant(permit.status)}>{permit.status}</Badge></TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <Link href={`/urbanisme/${permit.id}`}>
                                                <DropdownMenuItem><Eye className="mr-2 h-4 w-4"/> Consulter le dossier</DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
