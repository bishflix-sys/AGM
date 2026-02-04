'use client';
import AppLayout from "@/components/layout/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Briefcase, Mail, Phone, Save } from "lucide-react";
import Link from "next/link";


export default function AgentProfilePage({ params }: { params: { id: string } }) {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

    return (
        <AppLayout>
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Profil de l'Agent : {params.id}</h2>
                        <p className="text-muted-foreground">
                            Consultez et modifiez les informations de l'agent.
                        </p>
                    </div>
                    <Link href="/hr">
                        <Button variant="outline">Retour à la liste</Button>
                    </Link>
                </header>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar className="h-24 w-24 border-2 border-primary">
                                <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a" />
                                <AvatarFallback>MF</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-3xl">Mamadou Fall</CardTitle>
                                <CardDescription className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4"/> Chef de service - État Civil
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nom complet</Label>
                                <Input id="name" defaultValue="Mamadou Fall" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Rôle</Label>
                                <Input id="role" defaultValue="Chef de service" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department">Département</Label>
                                <Input id="department" defaultValue="État Civil" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="matricule">Matricule</Label>
                                <Input id="matricule" defaultValue={params.id} disabled />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="mamadou.fall@municipalite.sn" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Téléphone</Label>
                                <Input id="phone" type="tel" defaultValue="77 123 45 67" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button><Save className="mr-2 h-4 w-4"/> Enregistrer</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
