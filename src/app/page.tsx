
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

import AppLayout from "@/components/layout/app-layout";
import { Building, FolderKanban, Landmark, Users, FileText, PiggyBank, MessageSquareWarning, UserPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const chartData = [
  { month: "Janvier", desktop: 186, mobile: 80 },
  { month: "Février", desktop: 305, mobile: 200 },
  { month: "Mars", desktop: 237, mobile: 120 },
  { month: "Avril", desktop: 73, mobile: 190 },
  { month: "Mai", desktop: 209, mobile: 130 },
  { month: "Juin", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Recettes",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Dépenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const projectChartData = [
    { date: "01/01", value: 0 },
    { date: "01/02", value: 15 },
    { date: "01/03", value: 30 },
    { date: "01/04", value: 25 },
    { date: "01/05", value: 45 },
    { date: "01/06", value: 60 },
    { date: "01/07", value: 75 },
];

const projectChartConfig = {
  value: {
    label: "Progression",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;


const performanceChartData = [
  { name: "État Civil", "Dossiers traités": 573 },
  { name: "Urbanisme", "Dossiers traités": 124 },
  { name: "Doléances", "Dossiers traités": 94 },
  { name: "Foncier", "Dossiers traités": 78 },
  { name: "Archives", "Dossiers traités": 215 },
];
 
const performanceChartConfig = {
  "Dossiers traités": {
    label: "Dossiers traités",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const recentActivities = [
    { icon: <FileText />, text: "Nouvel acte de naissance créé pour Moussa Sarr.", time: "il y a 2 minutes", link: "/civil-status/NA-2024-1531" },
    { icon: <Building />, text: "Le permis de construire PC-2024-075 a été validé.", time: "il y a 15 minutes", link: "/urbanisme/PC-2024-075" },
    { icon: <MessageSquareWarning />, text: "Nouvelle doléance reçue de Aïssatou Gueye.", time: "il y a 1 heure", link: "/complaints" },
    { icon: <UserPlus />, text: "Nouvel agent ajouté: Awa Diouf.", time: "il y a 3 heures", link: "/hr/AG-102" },
]

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight font-headline">Tableau de bord</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Link href="/projects">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projets en cours</CardTitle>
                <FolderKanban className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/hr">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Agents actifs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">231</div>
                <p className="text-xs text-muted-foreground">+12 depuis le mois dernier</p>
              </CardContent>
            </Card>
          </Link>
           <Link href="/complaints">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doléances en attente</CardTitle>
                <MessageSquareWarning className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">17</div>
                <p className="text-xs text-muted-foreground">Dossiers non traités</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/civil-status">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Actes émis (Mois)</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+32 par rapport au mois dernier</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/finance">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Budget exécuté</CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">Budget annuel</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Aperçu Financier</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <BarChart data={chartData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                  <CardTitle className="font-headline">Performance des Services</CardTitle>
                  <CardDescription>
                      Volume de dossiers traités par les services clés ce mois-ci.
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <ChartContainer config={performanceChartConfig} className="h-[350px] w-full">
                      <BarChart data={performanceChartData} layout="vertical" margin={{ left: 30 }}>
                          <CartesianGrid horizontal={false} />
                          <XAxis type="number" dataKey="Dossiers traités" />
                          <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tickMargin={10} width={120} />
                          <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent indicator="line" />}
                          />
                          <Bar dataKey="Dossiers traités" fill="var(--color-Dossiers traités)" radius={5} />
                      </BarChart>
                  </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Activités Récentes</CardTitle>
                    <CardDescription>Les dernières actions effectuées sur la plateforme.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                                {activity.icon}
                            </div>
                            <div className="flex-1">
                                <Link href={activity.link} className="hover:underline">
                                  <p className="text-sm font-medium leading-tight">{activity.text}</p>
                                </Link>
                                <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Progression des Projets Clés</CardTitle>
                <CardDescription>Avancement moyen des projets prioritaires.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={projectChartConfig} className="h-[250px] w-full">
                  <LineChart
                    data={projectChartData}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                    accessibilityLayer
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent hideLabel />} />
                    <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={true} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

    