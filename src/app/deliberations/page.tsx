
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, FileText, PlusCircle, Users } from "lucide-react";

const deliberations = [
    { id: "DEL-2024-03-01", date: "15/03/2024", title: "Adoption du compte administratif 2023", status: "Adoptée", votesFor: 35, votesAgainst: 2, abstentions: 3 },
    { id: "DEL-2024-03-02", date: "15/03/2024", title: "Attribution du marché de la cantine scolaire", status: "Adoptée", votesFor: 40, votesAgainst: 0, abstentions: 0 },
    { id: "DEL-2024-02-01", date: "10/02/2024", title: "Modification du plan d'urbanisme local", status: "Reportée", votesFor: null, votesAgainst: null, abstentions: null },
    { id: "DEL-2024-02-02", date: "10/02/2024", title: "Subvention pour l'association 'Jeunesse en Action'", status: "Rejetée", votesFor: 15, votesAgainst: 22, abstentions: 3 },
];


export default function DeliberationsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Délibérations & Conseil</h2>
            <p className="text-muted-foreground">
              Gestion des séances du conseil, délibérations et décisions.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><Calendar className="mr-2"/> Planifier une séance</Button>
            <Button><PlusCircle className="mr-2"/> Nouvelle délibération</Button>
          </div>
        </header>

        <Card>
            <CardHeader>
                <CardTitle>Prochaine Séance du Conseil</CardTitle>
                <CardDescription>Lundi 28 Juillet 2024 - 10:00</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary"/>
                    <div>
                        <p className="font-semibold">12 points à l'ordre du jour</p>
                        <p className="text-sm text-muted-foreground">Dont 3 décisions majeures</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-primary"/>
                    <div>
                        <p className="font-semibold">40/41 conseillers présents</p>
                        <p className="text-sm text-muted-foreground">Quorum atteint</p>
                    </div>
                </div>
                 <div>
                    <Button className="w-full">Consulter l'ordre du jour</Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Délibérations Récentes</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Référence</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Titre</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-center">Vote (Pour/Contre/Abs)</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {deliberations.map(d => (
                            <TableRow key={d.id}>
                                <TableCell className="font-mono">{d.id}</TableCell>
                                <TableCell>{d.date}</TableCell>
                                <TableCell className="font-medium max-w-sm truncate">{d.title}</TableCell>
                                <TableCell>
                                    <Badge variant={d.status === 'Adoptée' ? 'default' : d.status === 'Rejetée' ? 'destructive' : 'secondary'}>{d.status}</Badge>
                                </TableCell>
                                <TableCell className="text-center font-mono">
                                    {d.votesFor !== null ? `${d.votesFor}/${d.votesAgainst}/${d.abstentions}` : 'N/A'}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">
                                        <FileText className="mr-2 h-4 w-4"/> Voir le PV
                                    </Button>
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
