import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, signup } from "@/lib/auth-actions";
import Link from "next/link";
import SignInWithGoogleButton from "../../login/components/SignInWithGoogleButton";


export function SignUpForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Регистрирай се</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-4">
<div className="grid gap-2">
  <Label htmlFor="first-name">First name</Label>
  <Input
    name="first-name"
    id="first-name"
    placeholder="Max"
    required
  />
</div>
<div className="grid gap-2">
  <Label htmlFor="last-name">Last name</Label>
  <Input
    name="last-name"
    id="last-name"
    placeholder="Robinson"
    required
  />
</div>
</div>
            <Label htmlFor="email">Email</Label>
            <Input 
              name="email"
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              required 
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              name="password"
              id="password" 
              type="password" 
              required 
            />
          </div>
          <Button  type="submit" formAction={signup} className="w-full">
            Login
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <SignInWithGoogleButton />
        </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}




