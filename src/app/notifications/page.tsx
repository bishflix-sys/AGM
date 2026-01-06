
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bell, Check, FileText, User, X } from "lucide-react";

const notifications = {
    all: [
        { id: 1, icon: <FileText className="h-6 w-6 text-blue-500" />, text: "Le permis de construire PC-2024-078 a été validé.", time: "il y a 5 minutes", read: false },
        { id: 2, icon: <User className="h-6 w-6 text-green-500" />, text: "Nouvel agent ajouté: Mme Aminata Sow.", time: "il y a 2 heures", read: false },
        { id: 3, icon: <FileText className="h-6 w-6 text-red-500" />, text: "La délibération DEL-2024-05-01 arrive à échéance.", time: "il y a 1 jour", read: true },
    ],
    mentions: [
        { id: 4, user: "M. le DAF", text: "Pouvez-vous vérifier le budget pour le projet #P012 ?", time: "il y a 30 minutes", read: false },
    ]
}

export default function NotificationsPage() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
                <p className="text-muted-foreground">
                    Centre de notifications pour les alertes et les mises à jour importantes.
                </p>
            </div>
            <Button variant="outline">Marquer tout comme lu</Button>
        </header>

        <Card>
            <CardContent className="p-0">
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-none rounded-t-lg">
                        <TabsTrigger value="all">Toutes les notifications</TabsTrigger>
                        <TabsTrigger value="mentions">@Mentions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="p-6">
                        <div className="space-y-4">
                            {notifications.all.map(n => (
                                <div key={n.id} className={`flex items-start gap-4 p-4 rounded-lg ${!n.read ? 'bg-accent/50' : 'bg-transparent'}`}>
                                    <div className="flex-shrink-0">{n.icon}</div>
                                    <div className="flex-1">
                                        <p className="text-sm">{n.text}</p>
                                        <p className="text-xs text-muted-foreground">{n.time}</p>
                                    </div>
                                    {!n.read && (
                                         <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8"><Check className="h-4 w-4"/></Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                     <TabsContent value="mentions" className="p-6">
                        <div className="space-y-4">
                             {notifications.mentions.map(n => (
                                <div key={n.id} className={`flex items-start gap-4 p-4 rounded-lg ${!n.read ? 'bg-accent/50' : 'bg-transparent'}`}>
                                    <Avatar className="h-10 w-10 border">
                                        <AvatarImage src={userAvatar?.imageUrl} alt="Avatar" data-ai-hint={userAvatar?.imageHint} />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm"><span className="font-semibold">{n.user}</span> vous a mentionné :</p>
                                        <blockquote className="border-l-2 pl-2 text-muted-foreground italic">"{n.text}"</blockquote>
                                        <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
