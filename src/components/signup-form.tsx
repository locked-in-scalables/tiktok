import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface SignupFormProps extends React.ComponentPropsWithoutRef<"div"> {
  isLogInPage?: boolean;
}

interface FormDetails {
  cardTitle: string;
  cardDescription: string;
  buttonText: string;
  footerText: React.ReactNode;
}

function getFormDetails(isLogInPage: boolean): FormDetails {
  if (isLogInPage) {
    return {
      cardTitle: "Log in to TikTok",
      cardDescription: "Enter your email below to login to your account",
      buttonText: "Login",
      footerText: (
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      ),
    };
  }

  return {
    cardTitle: "Sign up for TikTok",
    cardDescription: "Enter your email below to create your account",
    buttonText: "Sign up",
    footerText: (
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Log in
        </a>
      </div>
    ),
  };
}

export function SignupForm({
  isLogInPage = false,
  className,
  ...props
}: SignupFormProps) {
  const { cardTitle, cardDescription, buttonText, footerText } =
    getFormDetails(isLogInPage);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {isLogInPage && (
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    )}
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  {buttonText}
                </Button>
              </div>
              {footerText}
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
