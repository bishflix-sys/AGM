'use client';
import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function DeliberationDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Détail de la Délibération: {params.id}</h2>
            <Link href="/deliberations">
                <Button variant="outline">Retour à la liste</Button>
            </Link>
        </header>
        <Card>
            <CardHeader>
                <CardTitle>Procès-Verbal: Adoption du compte administratif 2023</CardTitle>
                <CardDescription>Séance du 15/03/2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-end">
                    <Button><Download className="mr-2 h-4 w-4"/> Télécharger le PV</Button>
                </div>
                <div className="prose max-w-none">
                    <p>Le conseil municipal s'est réuni en séance ordinaire pour délibérer sur l'adoption du compte administratif de l'exercice 2023.</p>
                    <p>Après présentation par le service financier et débat entre les conseillers, le vote a donné les résultats suivants :</p>
                    <ul>
                        <li><strong>Pour :</strong> 35</li>
                        <li><strong>Contre :</strong> 2</li>
                        <li><strong>Abstentions :</strong> 3</li>
                    </ul>
                    <p>La délibération est donc adoptée à la majorité.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
