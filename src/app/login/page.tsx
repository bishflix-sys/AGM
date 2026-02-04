'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AgmLogo } from "@/components/icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// These roles are a simplified representation based on the organizational chart for simulation purposes.
const ROLES = {
  MAIRE: { value: 'maire', label: 'Maire' },
  SECRETAIRE_MUNICIPAL: { value: 'secretaire_municipal', label: 'Secrétaire Municipal' },
  AGENT_ADMIN_FINANCES: { value: 'agent_admin_finances', label: 'Agent (Admin & Finances)' },
  AGENT_ETAT_CIVIL: { value: 'agent_etat_civil', label: 'Agent (État Civil)' },
  AGENT_TECHNIQUE: { value: 'agent_technique', label: 'Agent (Services Techniques)' },
  AGENT_PLANIFICATION: { value: 'agent_planification', label: 'Agent (Planification)' },
};


export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(ROLES.AGENT_ETAT_CIVIL.value);

  const handleLogin = () => {
    // In a real app, you'd handle authentication here.
    // We pass the selected role as a URL parameter to simulate role-based access.
    router.push(`/?role=${selectedRole}`);
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/40">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="text-center">
            <div className="inline-block mx-auto mb-4">
                <AgmLogo className="h-12 w-12 text-primary" />
            </div>
          <CardTitle className="text-2xl font-headline">Connexion - AGM</CardTitle>
          <CardDescription>
            Entrez vos identifiants pour accéder à votre tableau de bord
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="agent@municipalite.sn"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Mot de passe oublié?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>

            <div className="grid gap-2 pt-2">
                <Label htmlFor="role">Simuler une connexion en tant que :</Label>
                 <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger id="role">
                        <SelectValue placeholder="Choisir un rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(ROLES).map(role => (
                        <SelectItem key={role.value} value={role.value}>{role.label}</SelectItem>
                      ))}
                    </SelectContent>
                </Select>
                 <p className="text-xs text-muted-foreground">Ceci est une simulation pour tester les permissions.</p>
            </div>
            
            <Button type="button" className="w-full" onClick={handleLogin}>
              Se connecter
            </Button>
            
            <Button variant="outline" className="w-full">
              S'inscrire en tant que citoyen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
