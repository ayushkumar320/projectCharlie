import { Home, User, Briefcase, FileText, Calendar, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar.jsx"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Events', url: '/events', icon: Calendar },
    { name: 'Gallery', url: '/gallery', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
