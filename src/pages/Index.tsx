import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Zap,
  Target,
  BarChart3,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Speed",
      description:
        "Get your ads live in minutes, not days. Our automated system ensures instant approval for quality content.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your exact audience with advanced targeting by demographics, interests, and channel categories.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track performance with detailed metrics including reach, engagement, clicks, and conversions.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Protected transactions with escrow system. Pay only when your ad goes live successfully.",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Browse Channels",
      description:
        "Explore our catalog of verified Telegram channels across various niches and audiences.",
      icon: Users,
    },
    {
      step: 2,
      title: "Select & Target",
      description:
        "Choose channels that match your target audience and budget requirements.",
      icon: Target,
    },
    {
      step: 3,
      title: "Create Campaign",
      description:
        "Upload your content, set your budget, and schedule your ad placement.",
      icon: Clock,
    },
    {
      step: 4,
      title: "Track Results",
      description:
        "Monitor performance with real-time analytics and optimize for better results.",
      icon: TrendingUp,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      content:
        "Molniya helped us reach 2M+ users in just one week. The targeting is incredibly precise.",
      avatar: "/api/placeholder/40/40",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "Founder",
      company: "CryptoNews",
      content:
        "Best ROI we've ever seen from social media advertising. The platform is intuitive and powerful.",
      avatar: "/api/placeholder/40/40",
      rating: 5,
    },
    {
      name: "Maria Petrov",
      role: "Growth Manager",
      company: "E-commerce Pro",
      content:
        "Lightning-fast setup and amazing results. Our sales increased by 300% in the first month.",
      avatar: "/api/placeholder/40/40",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lightning/10 text-lightning hover:bg-lightning/20">
              Why Choose Molniya
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Everything you need for successful Telegram advertising
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines speed, precision, and security to deliver
              the best advertising experience for Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg hover:shadow-lightning/10 transition-all duration-300 border-border/50 hover:border-lightning/30">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-lightning/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-lightning" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lightning/10 text-lightning hover:bg-lightning/20">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How Molniya Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your ads running on Telegram in just 4 simple steps. Our
              streamlined process makes advertising effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-lightning rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-lightning to-lightning/20"></div>
                  )}
                </div>
                <div className="mb-4">
                  <step.icon className="mx-auto h-8 w-8 text-lightning mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lightning/10 text-lightning hover:bg-lightning/20">
              Customer Stories
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Loved by thousands of advertisers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about their experience with Molniya's
              advertising platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg hover:shadow-lightning/10 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-lightning fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-lightning/10 rounded-full flex items-center justify-center">
                        <span className="text-lightning font-semibold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy via-navy-light to-navy">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to supercharge your Telegram advertising?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful advertisers already using Molniya
                to reach their target audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-lightning hover:bg-lightning-dark text-navy font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/create-campaign">
                    Start Your Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/channels">Browse Channels</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No setup fees • Free to start • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
