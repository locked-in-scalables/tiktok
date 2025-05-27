import { cn } from "~/lib/utils";

export function NavBar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between border-b p-4 text-xl font-semibold",
        className,
      )}
      {...props}
    >
      <div>TikTok</div>
      {/* TODO: Update to link to sign up page */}
      <div>Sign Up</div>
    </nav>
  );
}
