'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NewDeliberationPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
            <h2 className="text-3xl font-bold tracking-tight">Nouvelle Délibération</h2>
            <p className="text-muted-foreground">Préparer une nouvelle délibération à soumettre au conseil.</p>
        </header>
        <Card className="max-w-2xl">
            <CardHeader>
                <CardTitle>Informations de la délibération</CardTitle>
                <CardDescription>Remplissez les détails ci-dessous.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Titre</Label>
                    <Input id="title" placeholder="Ex: Adoption du compte administratif 2023" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="session-date">Date de la séance</Label>
                    <Input id="session-date" type="date" required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="details">Détails et contexte</Label>
                    <Textarea id="details" placeholder="Ordre du jour, résumé des points à discuter, contexte..." rows={6} />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href="/deliberations"><Button variant="outline">Annuler</Button></Link>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Enregistrer le brouillon</Button>
            </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
