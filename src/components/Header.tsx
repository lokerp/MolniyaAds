import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Channels", href: "/channels" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <div className="relative">
              <Zap className="h-8 w-8 text-lightning" fill="currentColor" />
              <div className="absolute inset-0 animate-pulse">
                <Zap
                  className="h-8 w-8 text-lightning/50"
                  fill="currentColor"
                />
              </div>
            </div>
            <span className="hidden font-bold text-2xl bg-gradient-to-r from-lightning to-lightning-dark bg-clip-text text-transparent sm:inline-block">
              Molniya
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "transition-colors hover:text-lightning font-medium",
                  isActive(item.href) ? "text-lightning" : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              className="flex items-center space-x-2"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <Zap className="h-6 w-6 text-lightning" fill="currentColor" />
              <span className="font-bold text-xl bg-gradient-to-r from-lightning to-lightning-dark bg-clip-text text-transparent">
                Molniya
              </span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "transition-colors hover:text-lightning font-medium",
                      isActive(item.href)
                        ? "text-lightning"
                        : "text-foreground/60",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              className="inline-flex items-center space-x-2 md:hidden"
              to="/"
            >
              <Zap className="h-6 w-6 text-lightning" fill="currentColor" />
              <span className="font-bold text-lg bg-gradient-to-r from-lightning to-lightning-dark bg-clip-text text-transparent">
                Molniya
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className="bg-lightning hover:bg-lightning-dark text-navy font-semibold"
              asChild
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
