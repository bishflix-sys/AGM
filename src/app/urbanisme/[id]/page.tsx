'use client';
import AppLayout from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";
import Link from "next/link";

export default function UrbanismeDetailPage({ params }: { params: { id: string } }) {
  const getStatusVariant = (status: string) => {
    switch (status) {
        case "Validé": return "default";
        case "En instruction": return "outline";
        case "Rejeté": return "destructive";
        default: return "secondary";
    }
  };

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
             <div>
                <h2 className="text-3xl font-bold tracking-tight">Dossier d'Urbanisme: {params.id}</h2>
                <p className="text-muted-foreground">
                    Consultez, instruisez et mettez à jour le statut du dossier.
                </p>
            </div>
            <Link href="/urbanisme">
                <Button variant="outline">Retour à la liste</Button>
            </Link>
        </header>

        <Card>
            <CardHeader>
                <CardTitle>Détails du dossier</CardTitle>
                <CardDescription>Demandeur: M. Ibrahima Diallo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium">Type: Permis de Construire</p>
                    <p className="text-sm font-medium">Date de dépôt: 15/07/2024</p>
                </div>
                <div className="flex items-end gap-4">
                    <div className="space-y-2 flex-1">
                        <label className="text-sm font-medium">Changer le statut</label>
                         <Select defaultValue="en-instruction">
                            <SelectTrigger><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en-instruction">En instruction</SelectItem>
                                <SelectItem value="valide">Validé</SelectItem>
                                <SelectItem value="rejete">Rejeté</SelectItem>
                                <SelectItem value="incomplet">Dossier incomplet</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button><Save className="mr-2 h-4 w-4" /> Mettre à jour</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
