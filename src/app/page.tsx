import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

import { Navigation } from "~/components/navigation";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const user = await currentUser();
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Welcome to{" "}
              <span className="text-primary">T3 Fullstack App</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern full-stack application built with Next.js, TypeScript, tRPC,
              Prisma, PostgreSQL, Clerk authentication, and Shadcn UI.
            </p>

            {!user ? (
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            ) : (
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>🔐 Authentication</CardTitle>
                <CardDescription>
                  Secure authentication powered by Clerk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete authentication flow with sign-up, sign-in, and user management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🗄️ Database</CardTitle>
                <CardDescription>
                  PostgreSQL with Prisma ORM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Type-safe database operations with automatic migrations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🚀 tRPC</CardTitle>
                <CardDescription>
                  End-to-end type safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full-stack type safety from database to frontend.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* tRPC Demo */}
          <div className="text-center mb-8">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>tRPC Demo</CardTitle>
                <CardDescription>
                  Live example of tRPC in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">
                  {hello ? hello.greeting : "Loading tRPC query..."}
                </p>
              </CardContent>
            </Card>
          </div>

          <LatestPost />
        </main>
      </div>
    </HydrateClient>
  );
}
