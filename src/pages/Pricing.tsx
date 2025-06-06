import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  Zap,
  Star,
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Headphones,
  Clock,
  Globe,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      featured: false,
      features: [
        { name: "Up to 3 campaigns per month", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Standard channel access", included: true },
        { name: "Advanced targeting", included: false },
        { name: "Priority support", included: false },
        { name: "Custom reporting", included: false },
        { name: "API access", included: false },
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Starter",
      description: "For small businesses and entrepreneurs",
      monthlyPrice: 29,
      yearlyPrice: 290,
      featured: false,
      features: [
        { name: "Up to 10 campaigns per month", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority email support", included: true },
        { name: "All channels access", included: true },
        { name: "Advanced targeting", included: true },
        { name: "A/B testing", included: true },
        { name: "Priority support", included: false },
        { name: "Custom reporting", included: false },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Pro",
      description: "For growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 990,
      featured: true,
      features: [
        { name: "Unlimited campaigns", included: true },
        { name: "Advanced analytics & insights", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Premium channels access", included: true },
        { name: "Advanced targeting", included: true },
        { name: "A/B testing", included: true },
        { name: "Custom reporting", included: true },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      featured: false,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantee", included: true },
        { name: "Advanced security", included: true },
        { name: "Custom onboarding", included: true },
        { name: "Volume discounts", included: true },
        { name: "White-label options", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the free plan work?",
      answer:
        "Our free plan allows you to create up to 3 campaigns per month with access to basic analytics and email support. It's perfect for testing our platform and small-scale campaigns.",
    },
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits to your account.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "All paid plans come with a 14-day free trial that includes full access to all features in that plan. No credit card required to start.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes! Annual billing saves you 2 months - effectively getting 12 months for the price of 10. The discount is automatically applied when you choose yearly billing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for any plan. You only pay for the features you use, and you can start immediately after signing up.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing period.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes! We provide email support for all plans, with priority support for paid plans and 24/7 support for Pro and Enterprise customers.",
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === null) return "Custom";
    if (plan.monthlyPrice === 0) return "Free";
    return isYearly
      ? `$${plan.yearlyPrice}/year`
      : `$${plan.monthlyPrice}/month`;
  };

  const getSavings = (plan: (typeof plans)[0]) => {
    if (!plan.monthlyPrice || plan.monthlyPrice === 0) return null;
    const yearlyTotal = plan.yearlyPrice;
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = monthlyTotal - yearlyTotal;
    return savings;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start free and scale as
              you grow. No hidden fees, no surprises.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Badge className="bg-lightning/20 text-lightning border-lightning/30">
                14-day free trial
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                No credit card required
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Cancel anytime
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center space-x-4 mb-12"
        >
          <Label
            htmlFor="billing-toggle"
            className={!isYearly ? "font-semibold" : ""}
          >
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label
            htmlFor="billing-toggle"
            className={isYearly ? "font-semibold" : ""}
          >
            Yearly
          </Label>
          {isYearly && (
            <Badge className="bg-lightning/10 text-lightning">Save 17%</Badge>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => {
            const savings = getSavings(plan);
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card
                  className={`h-full ${plan.featured ? "border-lightning shadow-lg shadow-lightning/20 scale-105" : "border-border"} ${plan.popular ? "ring-2 ring-lightning/50" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-lightning text-navy font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {plan.featured && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-gradient-to-r from-lightning to-lightning-light text-navy font-semibold">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {plan.description}
                    </CardDescription>
                    <div className="pt-4">
                      <div className="text-4xl font-bold">{getPrice(plan)}</div>
                      {isYearly && savings && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${savings}/year
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      className={`w-full mb-6 ${plan.featured ? "bg-lightning hover:bg-lightning-dark text-navy" : ""}`}
                      variant={plan.featured ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span
                            className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to succeed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-lightning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Get your ads live in minutes with our automated approval
                  system
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-lightning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track performance with detailed insights and real-time data
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-lightning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="font-semibold mb-2">Secure Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with payment protection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-lightning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-lightning" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get help when you need it with our expert support team
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-navy to-navy-light text-white border-none">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to supercharge your Telegram advertising?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful advertisers already using Molniya.
                Start your free trial today – no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-lightning hover:bg-lightning-dark text-navy font-semibold"
                  asChild
                >
                  <Link to="/signup">
                    Try Free – No Credit Card Needed
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy"
                  asChild
                >
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Cancel anytime • No setup fees • 14-day free trial
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
