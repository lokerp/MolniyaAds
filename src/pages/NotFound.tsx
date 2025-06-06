import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Cloud, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-navy/5 to-lightning/5">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Lightning and Cloud Animation */}
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Cloud className="h-32 w-32 text-gray-400 mx-auto mb-4" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Zap
                    className="h-16 w-16 text-lightning"
                    fill="currentColor"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold text-lightning mb-6"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            >
              Oops! This page vanished into the Telegram clouds.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-foreground text-lg mb-8 max-w-md mx-auto"
            >
              The page you're looking for seems to have been struck by
              lightning. Don't worry, let's get you back on track!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-lightning hover:bg-lightning-dark text-navy font-semibold"
                asChild
              >
                <Link to="/">
                  <Home className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/channels">Browse Channels</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 text-sm text-muted-foreground"
            >
              <p>
                Need help?{" "}
                <Link to="/support" className="text-lightning hover:underline">
                  Contact our support team
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
