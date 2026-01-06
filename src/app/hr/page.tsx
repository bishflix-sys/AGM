
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MoreHorizontal, UserPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const agents = [
    { id: "AG-001", name: "Mamadou Fall", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a", role: "Chef de service", department: "État Civil", status: "Actif" },
    { id: "AG-102", name: "Awa Diouf", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", role: "Agent d'accueil", department: "État Civil", status: "Actif" },
    { id: "AG-205", name: "Cheikh Bamba Dieng", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", role: "Technicien", department: "Urbanisme", status: "En congé" },
    { id: "AG-015", name: "Fatou Kiné Ndiaye", avatar: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58", role: "Comptable", department: "Finances", status: "Actif" },
];

export default function HRPage() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline">Ressources Humaines</h2>
                <p className="text-muted-foreground">
                    Gestion des agents municipaux, affectations et présence.
                </p>
            </div>
            <Button><UserPlus className="mr-2"/> Nouvel Agent</Button>
        </header>

         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Effectif Total</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">245</div>
                    <p className="text-xs text-muted-foreground">Agents municipaux</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Présents Aujourd'hui</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">220</div>
                    <p className="text-xs text-muted-foreground">90% de l'effectif</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">En Congé</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">15</div>
                    <p className="text-xs text-muted-foreground">Congés maladies et annuels</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Postes à pourvoir</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">Recrutements en cours</p>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Liste des Agents</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Agent</TableHead>
                            <TableHead>Matricule</TableHead>
                            <TableHead>Rôle</TableHead>
                            <TableHead>Département</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {agents.map(agent => (
                            <TableRow key={agent.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={agent.avatar} />
                                            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium">{agent.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="font-mono">{agent.id}</TableCell>
                                <TableCell>{agent.role}</TableCell>
                                <TableCell>{agent.department}</TableCell>
                                <TableCell>
                                    <Badge variant={agent.status === 'Actif' ? 'default' : 'outline'}>{agent.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal className="h-4 w-4"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                                            <DropdownMenuItem>Gérer les absences</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

      </div>
    </AppLayout>
  );
}
