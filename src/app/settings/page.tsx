
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bell, Key, Shield, User } from "lucide-react";

export default function SettingsPage() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">Paramètres</h2>
          <p className="text-muted-foreground">
            Gérez les paramètres de l'application et de votre compte.
          </p>
        </header>

         <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
                <TabsTrigger value="profile"><User className="mr-2"/> Profil</TabsTrigger>
                <TabsTrigger value="security"><Key className="mr-2"/> Sécurité</TabsTrigger>
                <TabsTrigger value="notifications"><Bell className="mr-2"/> Notifications</TabsTrigger>
                <TabsTrigger value="system"><Shield className="mr-2"/> Système</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
                <Card>
                    <CardHeader>
                        <CardTitle>Profil</CardTitle>
                        <CardDescription>Mettez à jour les informations de votre profil.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={userAvatar?.imageUrl} alt="Avatar"/>
                                <AvatarFallback>MM</AvatarFallback>
                            </Avatar>
                            <Button variant="outline">Changer la photo</Button>
                        </div>
                         <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nom complet</Label>
                                <Input id="name" defaultValue="M. le Maire"/>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Adresse e-mail</Label>
                                <Input id="email" type="email" defaultValue="maire@municipalite.sn" disabled/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            
            <TabsContent value="security">
                <Card>
                    <CardHeader>
                        <CardTitle>Sécurité</CardTitle>
                        <CardDescription>Gérez vos paramètres de sécurité.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Mot de passe actuel</Label>
                            <Input id="current-password" type="password"/>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                                <Input id="new-password" type="password"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                                <Input id="confirm-password" type="password"/>
                            </div>
                        </div>
                         <Separator/>
                        <div>
                            <h3 className="text-lg font-medium">Authentification à deux facteurs</h3>
                            <p className="text-sm text-muted-foreground">Ajoutez une couche de sécurité supplémentaire à votre compte.</p>
                             <Button className="mt-4">Activer l'A2F</Button>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="notifications">
                 <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Choisissez comment vous souhaitez être notifié.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base">Notifications par e-mail</Label>
                                <p className="text-sm text-muted-foreground">Recevoir des notifications par e-mail pour les alertes importantes.</p>
                            </div>
                            <Switch defaultChecked/>
                        </div>
                         <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base">Notifications push</Label>
                                <p className="text-sm text-muted-foreground">Recevoir des notifications push sur vos appareils connectés.</p>
                            </div>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

             <TabsContent value="system">
                <Card>
                    <CardHeader>
                        <CardTitle>Système</CardTitle>
                        <CardDescription>Paramètres généraux de l'application.</CardDescription>
                    </CardHeader>
                     <CardContent className="space-y-6">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base">Mode sombre</Label>
                                <p className="text-sm text-muted-foreground">Activer le thème sombre pour l'application.</p>
                            </div>
                            <Switch/>
                        </div>
                     </CardContent>
                </Card>
            </TabsContent>
         </Tabs>
         <div className="flex justify-end">
            <Button>Enregistrer les modifications</Button>
         </div>
      </div>
    </AppLayout>
  );
}
