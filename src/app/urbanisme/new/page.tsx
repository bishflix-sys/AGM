'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FilePlus } from "lucide-react";
import Link from "next/link";

export default function NewUrbanismeFilePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouveau Dossier d'Urbanisme</h2>
          <p className="text-muted-foreground">
            Enregistrez une nouvelle demande de permis ou d'autorisation.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informations du dossier</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="applicant">Nom du demandeur</Label>
                    <Input id="applicant" placeholder="Ex: SCI Kër Mame" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="file-type">Type de dossier</Label>
                    <Select name="file-type" required>
                        <SelectTrigger id="file-type"><SelectValue placeholder="Sélectionner..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pc">Permis de Construire</SelectItem>
                            <SelectItem value="dt">Déclaration de Travaux</SelectItem>
                            <SelectItem value="pa">Permis d'Aménager</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="address">Adresse de la parcelle</Label>
                <Input id="address" placeholder="Ex: Lot 42, Section B, Cité Belle Vue" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description du projet</Label>
                <Textarea id="description" placeholder="Construction d'un immeuble R+3 à usage d'habitation..." rows={4}/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="attachments">Pièces jointes</Label>
                <Input id="attachments" type="file" multiple />
                <p className="text-xs text-muted-foreground">Plans, titre foncier, etc.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/urbanisme">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <FilePlus className="mr-2 h-4 w-4" />
              Créer le dossier
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
