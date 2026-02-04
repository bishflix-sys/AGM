'use client';
import AppLayout from "@/components/layout/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function NewAgentPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Nouvel Agent</h2>
          <p className="text-muted-foreground">
            Ajouter un nouvel employé aux ressources humaines de la municipalité.
          </p>
        </header>
        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle>Formulaire d'embauche</CardTitle>
            <CardDescription>Remplissez les informations du nouvel agent.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                    <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <Input id="photo" type="file" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" placeholder="Ex: Aïssatou" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" placeholder="Ex: Diallo" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Ex: a.diallo@municipalite.sn" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="Ex: 77 123 45 67" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="department">Département</Label>
                     <Select name="department" required>
                        <SelectTrigger id="department"><SelectValue placeholder="Choisir un département" /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="etat-civil">État Civil</SelectItem>
                           <SelectItem value="finances">Finances</SelectItem>
                           <SelectItem value="urbanisme">Urbanisme</SelectItem>
                           <SelectItem value="technique">Services Techniques</SelectItem>
                           <SelectItem value="rh">Ressources Humaines</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Rôle / Poste</Label>
                    <Input id="role" placeholder="Ex: Agent d'accueil" required />
                </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/hr">
                <Button variant="outline">Annuler</Button>
            </Link>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Ajouter l'agent
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
}
