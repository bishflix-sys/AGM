'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NewLandPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouvelle Parcelle</h2>
          <p className="text-muted-foreground">
            Ajouter une nouvelle parcelle au cadastre municipal.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informations de la parcelle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="section">Section</Label>
                    <Input id="section" placeholder="Ex: A" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="parcel-number">Numéro de parcelle</Label>
                    <Input id="parcel-number" placeholder="Ex: 125" required />
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="area">Superficie (m²)</Label>
                <Input id="area" type="number" placeholder="400" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="coordinates">Coordonnées GPS (Polygone)</Label>
                <Textarea id="coordinates" placeholder="[[lat, lng], [lat, lng], ...]" rows={4}/>
                <p className="text-xs text-muted-foreground">Utilisez l'outil de dessin sur la carte pour générer ceci automatiquement.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/land">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter la parcelle
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
