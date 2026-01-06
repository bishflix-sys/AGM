import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, Search, Settings, User, LogOut } from "lucide-react"
import Link from "next/link"
import SidebarNavContent from "./sidebar-nav-content"
import { AgmLogo } from "../icons"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Header() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0">
            <div className="p-4 border-b">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <AgmLogo className="h-6 w-6" />
                <span className="font-headline text-lg">AGM</span>
              </Link>
            </div>
            <SidebarNavContent />
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar className="h-8 w-8">
               <AvatarImage src={userAvatar?.imageUrl} alt="Avatar" data-ai-hint={userAvatar?.imageHint} />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>M. le Maire</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/settings">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Paramètres</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href="/login">
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Déconnexion</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
