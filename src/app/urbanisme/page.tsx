import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building } from "lucide-react";

export default function UrbanismePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Urbanisme & Habitat</h2>
          <p className="text-muted-foreground">
            Gestion des permis de construire, autorisations et lotissements.
          </p>
        </header>

        <Card className="mt-6">
            <CardHeader>
                <CardTitle>En cours de développement</CardTitle>
                <CardDescription>Cette section est en cours de construction.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-16">
                <div className="text-center text-muted-foreground">
                    <Building className="mx-auto h-12 w-12 mb-4" />
                    <p>La fonctionnalité de gestion de l'urbanisme sera bientôt disponible ici.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
