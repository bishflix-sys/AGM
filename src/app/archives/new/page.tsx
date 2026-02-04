'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import Link from "next/link";

export default function NewArchivePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Numériser un Document</h2>
          <p className="text-muted-foreground">
            Ajoutez un nouveau document aux archives numériques.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Détails du document</CardTitle>
            <CardDescription>Remplissez les informations pour l'indexation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="file">Fichier à numériser</Label>
                <Input id="file" type="file" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="doc-type">Type de document</Label>
                <Select name="doc-type" required>
                    <SelectTrigger id="doc-type">
                        <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="deliberation">Délibération</SelectItem>
                        <SelectItem value="permis">Permis de construire</SelectItem>
                        <SelectItem value="contrat">Contrat</SelectItem>
                        <SelectItem value="rapport">Rapport</SelectItem>
                        <SelectItem value="acte-civil">Acte d'état civil</SelectItem>
                         <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Sujet / Titre</Label>
                <Input id="subject" placeholder="Ex: Budget primitif 2024" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="keywords">Mots-clés (séparés par une virgule)</Label>
                <Input id="keywords" placeholder="Ex: budget, finance, approbation" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/archives">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Archiver le document
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
