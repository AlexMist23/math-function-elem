import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Lock, Palette, Code } from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="mb-8 text-4xl font-bold">Welcome to Your Next.js App</h1>
      <p className="max-w-2xl mb-12 text-xl text-center">
        This template is set up with Next.js, shadcn UI, Vercel Postgres, and
        Auth.js (v5). Start building your amazing application!
      </p>

      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
        <FeatureCard
          icon={<Code className="w-8 h-8 mb-2" />}
          title="Built with Next.js"
          description="Server-side rendering, routing, and more."
          href="https://nextjs.org/"
        />
        <FeatureCard
          icon={<Palette className="w-8 h-8 mb-2" />}
          title="Styled with shadcn"
          description="Beautiful, customizable UI components."
          href="https://ui.shadcn.com/"
        />
        <FeatureCard
          icon={<Database className="w-8 h-8 mb-2" />}
          title="Vercel Postgres"
          description="Scalable, serverless SQL database."
          href="https://vercel.com/storage/postgres"
        />
        <FeatureCard
          icon={<Lock className="w-8 h-8 mb-2" />}
          title="Auth.js Integration"
          description="Secure, easy-to-implement authentication."
          href="https://authjs.dev/"
        />
      </div>

      <div className="mt-12">
        <Badge variant="outline" className="text-sm">
          Next.js + shadcn + Vercel Postgres + Auth.js
        </Badge>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
