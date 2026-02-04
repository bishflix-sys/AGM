'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileEdit } from "lucide-react";
import Link from "next/link";

export default function CivilStatusDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
            <h2 className="text-3xl font-bold tracking-tight">Détail de l'Acte: {params.id}</h2>
            <p className="text-muted-foreground">
                Consultation et modification de l'acte d'état civil.
            </p>
        </header>
        <Card className="max-w-2xl">
            <CardHeader>
                <CardTitle>Informations</CardTitle>
                <CardDescription>Les informations ci-dessous sont modifiables.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label>Nom(s)</Label>
                    <Input defaultValue="Fatou Dramé" />
                </div>
                 <div className="space-y-2">
                    <Label>Date d'enregistrement</Label>
                    <Input defaultValue="20/07/2024" />
                </div>
                 <div className="space-y-2">
                    <Label>Officier d'état civil</Label>
                    <Input defaultValue="A. Diop" />
                </div>
            </CardContent>
             <CardFooter className="flex justify-between">
                <Link href="/civil-status">
                    <Button variant="outline">Retour</Button>
                </Link>
                <Button><FileEdit className="mr-2 h-4 w-4" /> Enregistrer les modifications</Button>
            </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
