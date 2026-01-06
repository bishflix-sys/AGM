import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareWarning } from "lucide-react";

export default function ComplaintsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight font-headline">Doléances Citoyennes</h2>
          <p className="text-muted-foreground">
            Gestion des réclamations, plaintes et suggestions des citoyens.
          </p>
        </header>

        <Card className="mt-6">
            <CardHeader>
                <CardTitle>En cours de développement</CardTitle>
                <CardDescription>Cette section est en cours de construction.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-16">
                <div className="text-center text-muted-foreground">
                    <MessageSquareWarning className="mx-auto h-12 w-12 mb-4" />
                    <p>Le portail de gestion des doléances sera bientôt disponible ici.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
