import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-lightning/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lightning/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-lightning/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Lightning bolt decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 right-20"
        >
          <Zap className="h-16 w-16 text-lightning" fill="currentColor" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 0.15, scale: 0.8 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute bottom-20 left-10"
        >
          <Zap className="h-12 w-12 text-lightning" fill="currentColor" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.08, scale: 1.2 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-1/3 left-1/4"
        >
          <Zap className="h-8 w-8 text-lightning" fill="currentColor" />
        </motion.div>
      </div>

      <div className="relative container py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-lightning/20 bg-lightning/10 px-3 py-1 text-sm font-medium text-lightning mb-4">
              <Zap className="mr-2 h-4 w-4" fill="currentColor" />
              Lightning-fast ad placement
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Lightning-fast
              </span>
              <br />
              <span className="bg-gradient-to-r from-lightning via-lightning-light to-lightning-dark bg-clip-text text-transparent">
                Telegram Ads
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-300 mb-10"
          >
            Connect with your audience instantly. The fastest way to place ads
            on top Telegram channels with precision targeting, real-time
            analytics, and lightning-quick approval.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-lightning hover:bg-lightning-dark text-navy font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link to="/create-campaign">
                Place an Ad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lightning text-lightning hover:bg-lightning hover:text-navy font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link to="/channels">
                Find Channels
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-lightning mb-2">10k+</div>
              <div className="text-gray-300">Active Channels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lightning mb-2">50M+</div>
              <div className="text-gray-300">Total Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lightning mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
