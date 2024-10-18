import {
  Home,
  Users,
  Database,
  Settings,
  Book,
  Calendar,
  Ruler,
  GraduationCap,
} from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "Teachers",
    href: "/teachers",
  },
  {
    label: "Frequency",
    href: "/frequency",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const adminNavLinks = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: Users,
    label: "Users",
    href: "/admin/users",
  },
  {
    icon: GraduationCap,
    label: "Teachers",
    href: "/admin/teachers",
  },
  {
    icon: Calendar,
    label: "Schedules",
    href: "/admin/schedules",
  },
  {
    icon: Book,
    label: "Books",
    href: "/admin/books",
  },
  {
    icon: Ruler,
    label: "Subjects",
    href: "/admin/subjects",
  },
  {
    icon: Database,
    label: "Database",
    href: "/admin/database",
  },
  {
    icon: Database,
    label: "Database Status",
    href: "/admin/database-status",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/admin/",
  },
];
