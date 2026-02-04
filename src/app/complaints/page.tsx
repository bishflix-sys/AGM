
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileEdit, MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";

const complaints = [
    { id: "DOL-001", date: "20/07/2024", citizen: "Aïssatou Gueye", subject: "Nid-de-poule dangereux Rue 12", type: "Voirie", status: "En cours" },
    { id: "DOL-002", date: "18/07/2024", citizen: "Moussa Fall", subject: "Éclairage public défaillant Av. de la Gare", type: "Éclairage", status: "Nouveau" },
    { id: "DOL-003", date: "15/07/2024", citizen: "Fatima Ba", subject: "Collecte des ordures irrégulière", type: "Propreté", status: "Traité" },
    { id: "DOL-004", date: "12/07/2024", citizen: "Ousmane Sow", subject: "Suggestion : Parc pour enfants quartier Liberté", type: "Suggestion", status: "Traité" },
];

const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
        case "Nouveau": return "destructive";
        case "En cours": return "default";
        case "Traité": return "secondary";
        default: return "outline";
    }
}


export default function ComplaintsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-headline">Doléances Citoyennes</h2>
            <p className="text-muted-foreground">
              Gestion des réclamations, plaintes et suggestions des citoyens.
            </p>
          </div>
          <Link href="/complaints/new">
            <Button><PlusCircle className="mr-2"/> Nouvelle doléance</Button>
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Nouvelles Doléances</CardTitle>
                    <Badge variant="destructive">Urgent</Badge>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">À traiter en priorité</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">En Cours de Traitement</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Dossiers ouverts</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dossiers Traités</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Ce mois-ci</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Délai Moyen (jours)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3.5</div>
                    <p className="text-xs text-muted-foreground">Temps de résolution</p>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Liste des Doléances</CardTitle>
                <CardDescription>Vue d'ensemble des réclamations et suggestions reçues.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Citoyen</TableHead>
                            <TableHead>Sujet</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complaints.map(c => (
                             <TableRow key={c.id}>
                                <TableCell className="font-medium">{c.id}</TableCell>
                                <TableCell>{c.date}</TableCell>
                                <TableCell>{c.citizen}</TableCell>
                                <TableCell className="max-w-xs truncate">{c.subject}</TableCell>
                                <TableCell>{c.type}</TableCell>
                                <TableCell><Badge variant={getStatusVariant(c.status)}>{c.status}</Badge></TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Ouvrir menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem><FileEdit className="mr-2 h-4 w-4"/> Traiter le dossier</DropdownMenuItem>
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
