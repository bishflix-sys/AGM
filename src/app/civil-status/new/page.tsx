'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NewCivilStatusActPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouvel Acte d'État Civil</h2>
          <p className="text-muted-foreground">
            Créez un acte de naissance, de mariage ou de décès.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informations de l'acte</CardTitle>
            <CardDescription>Veuillez remplir tous les champs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="act-type">Type d'acte</Label>
                 <Select name="act-type" required>
                    <SelectTrigger id="act-type">
                        <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="birth">Naissance</SelectItem>
                        <SelectItem value="marriage">Mariage</SelectItem>
                        <SelectItem value="death">Décès</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="name">Nom(s) concerné(s)</Label>
                <Input id="name" placeholder="Ex: Fatou Dramé / O. Fall & A. Gueye" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="date">Date de l'événement</Label>
                <Input id="date" type="date" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="details">Détails / Mentions</Label>
                <Textarea id="details" placeholder="Ajoutez ici les informations complémentaires (parents, témoins...)" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
             <Link href="/civil-status">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Créer l'acte
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
