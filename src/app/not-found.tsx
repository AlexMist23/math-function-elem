import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-8 text-2xl">Oops! Page not found</h2>
      <p className="max-w-md mb-8 text-lg text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/" className="flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go back home
        </Link>
      </Button>
    </div>
  );
}
