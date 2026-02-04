
"use client"
import AppLayout from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ArrowDown, ArrowUp, Banknote, Landmark, MoreVertical, PlusCircle } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "@/components/ui/chart"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const chartData = [
  { month: "Jan", recettes: 186, depenses: 80 },
  { month: "Fev", recettes: 305, depenses: 200 },
  { month: "Mar", recettes: 237, depenses: 120 },
  { month: "Avr", recettes: 250, depenses: 190 },
  { month: "Mai", recettes: 209, depenses: 130 },
  { month: "Juin", recettes: 214, depenses: 140 },
]

const chartConfig = {
  recettes: {
    label: "Recettes",
    color: "hsl(var(--chart-1))",
  },
  depenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const recentTransactions = [
    {id: "T-00123", date: "20/07/2024", description: "Paiement facture SENELEC", amount: -1500000, type: "Dépense"},
    {id: "T-00124", date: "19/07/2024", description: "Collecte taxes marché central", amount: 2500000, type: "Recette"},
    {id: "T-00125", date: "18/07/2024", description: "Achat fournitures de bureau", amount: -350000, type: "Dépense"},
    {id: "T-00126", date: "17/07/2024", description: "Paiement prestation CSTP SA", amount: -5000000, type: "Dépense"},
]

export default function FinancePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold tracking-tight font-headline">Gestion Financière</h2>
                <p className="text-muted-foreground">
                    Suivi du budget, des recettes et des dépenses de la municipalité.
                </p>
            </div>
            <Link href="/finance/new">
                <Button><PlusCircle className="mr-2"/> Nouvelle Transaction</Button>
            </Link>
        </header>

         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Solde Actuel</CardTitle>
                    <Landmark className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1.250.345.000 FCFA</div>
                    <p className="text-xs text-muted-foreground">+2.5% vs mois dernier</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Recettes (Mois)</CardTitle>
                    <ArrowUp className="h-4 w-4 text-green-500"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">150.000.000 FCFA</div>
                    <p className="text-xs text-muted-foreground">Objectif: 140M</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dépenses (Mois)</CardTitle>
                    <ArrowDown className="h-4 w-4 text-red-500"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">95.000.000 FCFA</div>
                     <p className="text-xs text-muted-foreground">Plafond: 110M</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Taux d'exécution Budget</CardTitle>
                    <Banknote className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">65%</div>
                     <p className="text-xs text-muted-foreground">Budget annuel 2024</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Aperçu semestriel</CardTitle>
                    <CardDescription>Recettes vs Dépenses pour les 6 derniers mois.</CardDescription>
                </CardHeader>
                <CardContent>
                     <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <BarChart data={chartData} accessibilityLayer>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis tickFormatter={(value) => `${value}M`}/>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="recettes" fill="var(--color-recettes)" radius={4} />
                        <Bar dataKey="depenses" fill="var(--color-depenses)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
             <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                    <CardTitle>Transactions Récentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Description</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Montant (FCFA)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentTransactions.map(t => (
                                <TableRow key={t.id}>
                                    <TableCell className="font-medium max-w-[150px] truncate">{t.description}</TableCell>
                                    <TableCell><Badge variant={t.type === 'Recette' ? 'default' : 'destructive'}>{t.type}</Badge></TableCell>
                                    <TableCell className={`text-right font-mono ${t.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>{t.amount.toLocaleString('fr-SN')}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </AppLayout>
  );
}
