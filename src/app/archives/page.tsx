
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Archive, File, FileText, Search, Upload } from "lucide-react";

const archivedDocuments = [
    { id: "ARCH-2023-015", type: "Délibération", date: "15/06/2023", subject: "Approbation du budget primitif 2023", keywords: "budget, finance" },
    { id: "ARCH-2022-112", type: "Permis de construire", date: "22/11/2022", subject: "PC pour M. Diallo - Parcelle B-42", keywords: "urbanisme, permis" },
    { id: "ARCH-2023-045", type: "Contrat", date: "03/04/2023", subject: "Contrat de nettoyage avec SEN'CLEAN", keywords: "prestataire, contrat" },
    { id: "ARCH-2021-201", type: "Rapport", date: "10/12/2021", subject: "Rapport annuel d'activités 2021", keywords: "rapport, annuel" },
]

export default function ArchivesPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Archives Numériques</h2>
            <p className="text-muted-foreground">
              Classement, recherche et consultation des documents archivés.
            </p>
          </div>
          <Button><Upload className="mr-2 h-4 w-4" /> Numériser un document</Button>
        </header>

         <Card>
            <CardHeader>
                <CardTitle>Recherche d'archives</CardTitle>
                <CardDescription>Utilisez les filtres pour retrouver un document.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                        <Input placeholder="Rechercher par mot-clé, sujet..." />
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Type de document" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="deliberation">Délibération</SelectItem>
                                <SelectItem value="permis">Permis de construire</SelectItem>
                                <SelectItem value="contrat">Contrat</SelectItem>
                                <SelectItem value="rapport">Rapport</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Button className="w-full"><Search className="mr-2 h-4 w-4"/>Rechercher</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Documents Récemment Archivés</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Identifiant</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Sujet</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {archivedDocuments.map((doc) => (
                            <TableRow key={doc.id}>
                                <TableCell className="font-medium">{doc.id}</TableCell>
                                <TableCell>{doc.type}</TableCell>
                                <TableCell>{doc.date}</TableCell>
                                <TableCell>{doc.subject}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Consulter
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
