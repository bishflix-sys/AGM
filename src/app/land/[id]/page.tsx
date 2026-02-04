'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";
import Link from "next/link";

export default function LandDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Fiche Foncière: {params.id}</h2>
                <p className="text-muted-foreground">
                    Détails, historique et statut de la parcelle.
                </p>
            </div>
            <Link href="/land">
                <Button variant="outline">Retour au Plan</Button>
            </Link>
        </header>
        <Card>
            <CardHeader>
                <CardTitle>Informations sur la parcelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="section">Section</Label>
                        <Input id="section" defaultValue="A" disabled/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="area">Superficie (m²)</Label>
                        <Input id="area" defaultValue="350" type="number"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select name="status" defaultValue="affectee">
                            <SelectTrigger id="status"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="libre">Libre</SelectItem>
                                <SelectItem value="affectee">Affectée</SelectItem>
                                <SelectItem value="litige">En litige</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="beneficiary">Bénéficiaire</Label>
                    <Input id="beneficiary" defaultValue="Moussa Diop" />
                </div>
                <div className="flex justify-end">
                    <Button><Save className="mr-2 h-4 w-4"/> Enregistrer</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
