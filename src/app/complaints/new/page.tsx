
'use client';

import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function NewComplaintPage() {
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a real app, you'd send this data to a server/database.
        toast({
            title: "Doléance soumise avec succès",
            description: "Votre demande a été enregistrée et sera traitée prochainement.",
        });
        router.push('/complaints');
    }

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight font-headline">Nouvelle Doléance</h2>
          <p className="text-muted-foreground">
            Soumettez une réclamation, une plainte ou une suggestion aux services municipaux.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Formulaire de doléance</CardTitle>
                    <CardDescription>Veuillez remplir tous les champs requis.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="citizen-name">Nom complet du citoyen</Label>
                            <Input id="citizen-name" placeholder="Ex: Mariama Diallo" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contact-info">Contact du citoyen (téléphone ou e-mail)</Label>
                            <Input id="contact-info" placeholder="Ex: 77 123 45 67 ou nom@email.com" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <Label htmlFor="complaint-type">Type de doléance</Label>
                            <Select name="complaint-type" required>
                                <SelectTrigger id="complaint-type">
                                    <SelectValue placeholder="Sélectionner un type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="voirie">Voirie (route, trottoir...)</SelectItem>
                                    <SelectItem value="eclairage">Éclairage public</SelectItem>
                                    <SelectItem value="proprete">Propreté (ordures...)</SelectItem>
                                    <SelectItem value="securite">Sécurité</SelectItem>
                                    <SelectItem value="suggestion">Suggestion / Autre</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Sujet</Label>
                            <Input id="subject" name="subject" placeholder="Ex: Nid-de-poule dangereux" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description détaillée</Label>
                        <Textarea id="description" name="description" placeholder="Veuillez décrire le problème ou votre suggestion avec le plus de détails possible, en incluant l'emplacement exact si nécessaire." rows={5} required/>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="attachment">Pièce jointe (photo, document...)</Label>
                        <Input id="attachment" name="attachment" type="file" />
                        <p className="text-xs text-muted-foreground">Optionnel. Permet de mieux comprendre la situation.</p>
                    </div>

                </CardContent>
                 <CardFooter className="flex justify-between">
                    <Link href="/complaints">
                        <Button type="button" variant="outline">Annuler</Button>
                    </Link>
                    <Button type="submit">
                        <Send className="mr-2 h-4 w-4" />
                        Soumettre la doléance
                    </Button>
                </CardFooter>
            </Card>
        </form>

      </div>
    </AppLayout>
  );
}
