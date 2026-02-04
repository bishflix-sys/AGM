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

export default function NewTransactionPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouvelle Transaction</h2>
          <p className="text-muted-foreground">
            Enregistrez une nouvelle recette ou dépense.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Détails de la transaction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="type">Type de transaction</Label>
                    <Select name="type" required>
                        <SelectTrigger id="type">
                            <SelectValue placeholder="Sélectionner un type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recette">Recette</SelectItem>
                            <SelectItem value="depense">Dépense</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="amount">Montant (FCFA)</Label>
                    <Input id="amount" type="number" placeholder="500000" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Ex: Paiement facture SENELEC - Juillet 2024" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="date">Date de la transaction</Label>
                <Input id="date" type="date" required />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/finance">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Enregistrer
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
