'use client';
import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Document Archivé: {params.id}</h2>
                <p className="text-muted-foreground">
                    Détails et contenu du document.
                </p>
            </div>
             <Link href="/archives">
                <Button variant="outline">Retour à la liste</Button>
            </Link>
        </header>
        <Card>
            <CardHeader className="flex flex-row justify-between items-start">
                <div>
                    <CardTitle>Contenu du document</CardTitle>
                    <CardDescription>Visionneuse du document numérisé.</CardDescription>
                </div>
                <Button><Download className="mr-2 h-4 w-4" /> Télécharger</Button>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-96 border-2 border-dashed rounded-lg bg-muted/50">
                    <FileText className="h-16 w-16 mb-4" />
                    <p>Aperçu du document indisponible.</p>
                    <p className="text-sm">Le contenu du fichier PDF/Image s'afficherait ici.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
