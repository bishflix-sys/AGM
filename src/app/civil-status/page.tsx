
'use client';
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, FileEdit, Heart, PlusCircle, Search, Skull } from "lucide-react";
import Link from "next/link";


const recentActs = {
    birth: [
        { id: "NA-2024-1532", name: "Fatou Dramé", date: "20/07/2024", officer: "A. Diop" },
        { id: "NA-2024-1531", name: "Moussa Sarr", date: "19/07/2024", officer: "F. Ndiaye" },
    ],
    marriage: [
        { id: "MA-2024-312", spouses: "O. Fall & A. Gueye", date: "18/07/2024", officer: "A. Diop" },
    ],
    death: [
         { id: "DE-2024-188", name: "El Hadj Sy", date: "17/07/2024", officer: "F. Ndiaye" },
    ]
}

export default function CivilStatusPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-headline">Gestion de l'État Civil</h2>
            <p className="text-muted-foreground">
              Gestion des naissances, mariages et décès.
            </p>
          </div>
          <Link href="/civil-status/new">
            <Button><PlusCircle className="mr-2"/> Nouvel Acte</Button>
          </Link>
        </header>

        <Card>
            <CardHeader>
                <CardTitle>Rechercher un acte</CardTitle>
                <CardDescription>Recherchez par nom, prénom ou numéro d'acte.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <Input placeholder="Rechercher..."/>
                    <Button><Search className="mr-2"/> Rechercher</Button>
                </div>
            </CardContent>
        </Card>

        <Tabs defaultValue="births">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="births"><Baby className="mr-2"/> Naissances</TabsTrigger>
                <TabsTrigger value="marriages"><Heart className="mr-2"/> Mariages</TabsTrigger>
                <TabsTrigger value="deaths"><Skull className="mr-2"/> Décès</TabsTrigger>
            </TabsList>
            <TabsContent value="births">
                <Card>
                    <CardHeader>
                        <CardTitle>Actes de Naissance Récents</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Numéro d'acte</TableHead>
                                    <TableHead>Nom & Prénom(s)</TableHead>
                                    <TableHead>Date d'enregistrement</TableHead>
                                    <TableHead>Officier</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentActs.birth.map(act => (
                                    <TableRow key={act.id}>
                                        <TableCell className="font-mono">{act.id}</TableCell>
                                        <TableCell className="font-medium">{act.name}</TableCell>
                                        <TableCell>{act.date}</TableCell>
                                        <TableCell>{act.officer}</TableCell>
                                        <TableCell className="text-right">
                                            <Link href={`/civil-status/${act.id}`}>
                                                <Button variant="outline" size="sm"><FileEdit className="mr-2 h-4 w-4"/> Modifier</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="marriages">
                 <Card>
                    <CardHeader>
                        <CardTitle>Actes de Mariage Récents</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Numéro d'acte</TableHead>
                                    <TableHead>Époux/Épouse</TableHead>
                                    <TableHead>Date d'enregistrement</TableHead>
                                    <TableHead>Officier</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentActs.marriage.map(act => (
                                    <TableRow key={act.id}>
                                        <TableCell className="font-mono">{act.id}</TableCell>
                                        <TableCell className="font-medium">{act.spouses}</TableCell>
                                        <TableCell>{act.date}</TableCell>
                                        <TableCell>{act.officer}</TableCell>
                                        <TableCell className="text-right">
                                            <Link href={`/civil-status/${act.id}`}>
                                                <Button variant="outline" size="sm"><FileEdit className="mr-2 h-4 w-4"/> Modifier</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="deaths">
                 <Card>
                    <CardHeader>
                        <CardTitle>Actes de Décès Récents</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Numéro d'acte</TableHead>
                                    <TableHead>Nom du défunt</TableHead>
                                    <TableHead>Date d'enregistrement</TableHead>
                                    <TableHead>Officier</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentActs.death.map(act => (
                                    <TableRow key={act.id}>
                                        <TableCell className="font-mono">{act.id}</TableCell>
                                        <TableCell className="font-medium">{act.name}</TableCell>
                                        <TableCell>{act.date}</TableCell>
                                        <TableCell>{act.officer}</TableCell>
                                        <TableCell className="text-right">
                                            <Link href={`/civil-status/${act.id}`}>
                                                <Button variant="outline" size="sm"><FileEdit className="mr-2 h-4 w-4"/> Modifier</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>

      </div>
    </AppLayout>
  );
}
