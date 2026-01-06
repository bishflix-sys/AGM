import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Rapports & Statistiques</h2>
          <p className="text-muted-foreground">
            Génération de rapports et consultation des statistiques globales.
          </p>
        </header>

        <Card className="mt-6">
            <CardHeader>
                <CardTitle>En cours de développement</CardTitle>
                <CardDescription>Cette section est en cours de construction.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-16">
                <div className="text-center text-muted-foreground">
                    <PieChart className="mx-auto h-12 w-12 mb-4" />
                    <p>La fonctionnalité de génération de rapports sera bientôt disponible ici.</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
