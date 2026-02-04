'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save } from "lucide-react";
import Link from "next/link";

const contracts = [
    { id: "C-001", subject: "Nettoyage des voiries", amount: "25,000,000 FCFA", status: "Actif" },
    { id: "C-002", subject: "Entretien des espaces verts", amount: "12,000,000 FCFA", status: "Actif" },
]

export default function ProviderDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Fiche Prestataire: {params.id}</h2>
                <p className="text-muted-foreground">
                    Détails, contrats et historique du prestataire.
                </p>
            </div>
            <Link href="/providers">
                <Button variant="outline">Retour à la liste</Button>
            </Link>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Informations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nom</Label>
                            <Input id="name" defaultValue="SEN'EAU" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="field">Domaine</Label>
                            <Input id="field" defaultValue="Eau & Assainissement" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="contact">Contact</Label>
                            <Input id="contact" defaultValue="contact@seneau.sn" />
                        </div>
                         <div className="flex justify-end">
                            <Button><Save className="mr-2 h-4 w-4"/> Enregistrer</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Contrats</CardTitle>
                        <CardDescription>Liste des contrats actifs et passés.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead># Contrat</TableHead>
                                    <TableHead>Objet</TableHead>
                                    <TableHead>Montant</TableHead>
                                    <TableHead>Statut</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contracts.map(c => (
                                    <TableRow key={c.id}>
                                        <TableCell>{c.id}</TableCell>
                                        <TableCell>{c.subject}</TableCell>
                                        <TableCell>{c.amount}</TableCell>
                                        <TableCell>{c.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </AppLayout>
  );
}
