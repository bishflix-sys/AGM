"use client";

import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getProjectGuidance, type ProjectGuidanceOutput } from "@/ai/flows/project-update-guidance";
import { Bot, ImageIcon, LoaderCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const initialState: { output: ProjectGuidanceOutput | null, error: string | null } = {
  output: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Analyse en cours...
        </>
      ) : (
        "Obtenir des conseils"
      )}
    </Button>
  );
}

export default function ProjectsPage() {
  const [state, formAction] = useFormState(async (_prevState: any, formData: FormData) => {
    try {
      const projectDescription = formData.get("projectDescription") as string;
      const projectPhoto = formData.get("projectPhoto") as File;

      let projectPhotoDataUri: string | undefined = undefined;
      if (projectPhoto && projectPhoto.size > 0) {
        const buffer = await projectPhoto.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        projectPhotoDataUri = `data:${projectPhoto.type};base64,${base64}`;
      }
      
      const result = await getProjectGuidance({ projectDescription, projectPhotoDataUri });
      return { output: result, error: null };
    } catch (e: any) {
      return { output: null, error: e.message || "Une erreur est survenue." };
    }
  }, initialState);
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };


  const projectImage = PlaceHolderImages.find(p => p.id === 'project-photo-1');

  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <header>
          <h2 className="text-3xl font-bold tracking-tight font-headline">Suivi de Projets</h2>
          <p className="text-muted-foreground">
            Surveillez l'avancement des projets et obtenez des conseils d'experts basés sur l'IA.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <form action={formAction}>
              <CardHeader>
                <CardTitle className="font-headline">Analyse de projet</CardTitle>
                <CardDescription>
                  Décrivez votre projet et ses défis pour recevoir des recommandations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Description du projet</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Ex: Construction d'un nouveau marché municipal. Nous faisons face à des retards d'approvisionnement..."
                    rows={6}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectPhoto">Photo du projet (optionnel)</Label>
                  <Input id="projectPhoto" name="projectPhoto" type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                {previewUrl && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                    <Image src={previewUrl} alt="Aperçu du projet" fill className="object-cover" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="min-h-[400px]">
              <CardHeader className="flex flex-row items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline">Conseils de l'IA</CardTitle>
              </CardHeader>
              <CardContent>
                {state?.error && (
                   <Alert variant="destructive">
                     <AlertTitle>Erreur</AlertTitle>
                     <AlertDescription>{state.error}</AlertDescription>
                   </Alert>
                )}
                {state?.output ? (
                  <div className="space-y-6 text-sm">
                    <div>
                        <h3 className="font-semibold text-primary">Points Forts</h3>
                        <ul className="list-disc space-y-1 pl-5 mt-2">
                            {state.output.strengths.map((item, i) => <li key={`s-${i}`}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-destructive">Points de Vigilance</h3>
                        <ul className="list-disc space-y-1 pl-5 mt-2">
                            {state.output.weaknesses.map((item, i) => <li key={`w-${i}`}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Recommandations Clés</h3>
                        <ul className="list-disc space-y-1 pl-5 mt-2">
                            {state.output.recommendations.map((item, i) => <li key={`r-${i}`}>{item}</li>)}
                        </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full p-8">
                     <ImageIcon className="h-12 w-12 mb-4" />
                    <p>Les conseils générés par l'IA apparaîtront ici.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
