'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NewProviderPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouveau Prestataire</h2>
          <p className="text-muted-foreground">
            Ajouter un nouveau prestataire ou fournisseur à l'annuaire.
          </p>
        </header>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informations sur l'entreprise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nom de l'entreprise</Label>
                    <Input id="name" placeholder="Ex: BTP Excellence" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="field">Domaine d'activité</Label>
                    <Input id="field" placeholder="Ex: BTP & Voirie" required />
                </div>
            </div>
             <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="contact-person">Personne à contacter</Label>
                    <Input id="contact-person" placeholder="Ex: Moussa Diop" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="contact@btp-excellence.sn" required />
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Textarea id="address" placeholder="123, Avenue de la Liberté, Dakar" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/providers">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter le prestataire
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
