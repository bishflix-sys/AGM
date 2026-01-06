
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, FileText, MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const providers = [
  { id: "F-001", name: "SEN'EAU", field: "Eau & Assainissement", contracts: 2, status: "Actif" },
  { id: "F-002", name: "SENELEC", field: "Électricité", contracts: 1, status: "Actif" },
  { id: "F-003", name: "CSTP SA", field: "BTP & voirie", contracts: 5, status: "Actif" },
  { id: "F-004", name: "PAPIER PLUS", field: "Fournitures de bureau", contracts: 0, status: "Inactif" },
  { id: "F-005", name: "EVENT'S PRO", field: "Événementiel", contracts: 1, status: "En évaluation" },
];

const getStatusVariant = (status: string) => {
    if (status === 'Actif') return 'default';
    if (status === 'Inactif') return 'secondary';
    return 'outline';
}

export default function ProvidersPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Prestataires & Fournisseurs</h2>
            <p className="text-muted-foreground">
              Gestion des contrats, marchés publics et paiements.
            </p>
          </div>
           <Button><PlusCircle className="mr-2"/> Nouveau Prestataire</Button>
        </header>

        <Card>
            <CardHeader>
                <CardTitle>Rechercher un prestataire</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <Input placeholder="Nom, domaine d'activité..." className="flex-1"/>
                    <Button><Search className="mr-2"/> Rechercher</Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Liste des Prestataires</CardTitle>
                <CardDescription>Entreprises et fournisseurs référencés par la municipalité.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Identifiant</TableHead>
                            <TableHead>Nom</TableHead>
                            <TableHead>Domaine</TableHead>
                            <TableHead className="text-center">Contrats Actifs</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {providers.map((p) => (
                             <TableRow key={p.id}>
                                <TableCell className="font-mono">{p.id}</TableCell>
                                <TableCell className="font-medium">{p.name}</TableCell>
                                <TableCell>{p.field}</TableCell>
                                <TableCell className="text-center">{p.contracts}</TableCell>
                                <TableCell><Badge variant={getStatusVariant(p.status)}>{p.status}</Badge></TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><FileText className="mr-2 h-4 w-4"/> Voir la fiche</DropdownMenuItem>
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
