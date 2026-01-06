import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function HRPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight font-headline">Ressources Humaines</h2>
          <p className="text-muted-foreground">
            Gestion des agents municipaux, affectations et présence.
          </p>
        </header>

         <Card className="mt-6">
            <CardHeader>
                <CardTitle>En cours de développement</CardTitle>
                <CardDescription>Cette section est en cours de construction.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-16">
                <div className="text-center text-muted-foreground">
                    <Users className="mx-auto h-12 w-12 mb-4" />
                    <p>La fonctionnalité de gestion des ressources humaines sera bientôt disponible ici.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
