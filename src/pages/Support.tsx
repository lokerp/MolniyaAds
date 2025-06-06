import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Search,
  Book,
  Video,
  FileText,
  Zap,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Users,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Pro & Enterprise",
      action: "Start Chat",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email",
      primary: false,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Business hours (9AM-6PM EST)",
      action: "Schedule Call",
      primary: false,
    },
  ];

  const quickHelp = [
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      link: "/docs",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials",
    },
    {
      icon: FileText,
      title: "API Reference",
      description: "Complete API documentation",
      link: "/api-docs",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "/community",
    },
  ];

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create my first campaign?",
          answer:
            "Navigate to the 'Create Campaign' page from your dashboard. Follow our step-by-step wizard that will guide you through selecting channels, creating content, and setting your budget. You can also watch our video tutorial for a complete walkthrough.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are secured with 256-bit SSL encryption.",
        },
        {
          question: "How long does it take for ads to go live?",
          answer:
            "Most ads are approved and go live within 15 minutes. During peak times, it may take up to 2 hours. Premium channels may have additional review requirements that can take up to 24 hours.",
        },
      ],
    },
    {
      category: "Billing & Pricing",
      questions: [
        {
          question: "Can I change my plan at any time?",
          answer:
            "Yes! You can upgrade or downgrade your plan anytime from your account settings. Changes take effect immediately, and we'll prorate any charges or credits to your account.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for all paid plans. If your ads don't perform as expected due to platform issues, we'll work with you to resolve the problem or provide a refund.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees! Our pricing is transparent. You only pay for your chosen plan and any additional ad spend. There are no setup fees, cancellation fees, or surprise charges.",
        },
      ],
    },
    {
      category: "Campaigns & Analytics",
      questions: [
        {
          question: "How do I track my campaign performance?",
          answer:
            "Visit your dashboard to see real-time analytics including reach, engagement, clicks, and conversions. You can also export detailed reports and set up automated performance alerts.",
        },
        {
          question: "Why isn't my ad getting approved?",
          answer:
            "Common reasons include: inappropriate content, poor image quality, misleading claims, or violation of Telegram's policies. Check your email for specific feedback and review our content guidelines.",
        },
        {
          question: "Can I pause or modify a running campaign?",
          answer:
            "Yes, you can pause, resume, or modify your campaigns anytime from your dashboard. Changes to content may require re-approval, but budget and scheduling changes are immediate.",
        },
      ],
    },
    {
      category: "Channel Management",
      questions: [
        {
          question: "How do I add my channel to Molniya?",
          answer:
            "Go to your dashboard and click 'Add Channel'. You'll need to verify ownership and provide basic information about your audience. Our team will review your channel within 24-48 hours.",
        },
        {
          question: "What are the requirements for channel verification?",
          answer:
            "Channels need at least 1,000 active subscribers, consistent posting schedule, and compliance with Telegram's terms of service. Verified channels get priority placement and higher rates.",
        },
        {
          question: "How do payouts work for channel owners?",
          answer:
            "Payouts are processed weekly via PayPal, bank transfer, or cryptocurrency. You can set your preferred payment method in your account settings. Minimum payout threshold is $50.",
        },
      ],
    },
  ];

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          !searchQuery ||
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter(
      (category) =>
        !selectedCategory ||
        selectedCategory === "All Categories" ||
        category.category === selectedCategory,
    );

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
              How can we help you?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get support, find answers, and learn how to make the most of
              Molniya's advertising platform.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Badge className="bg-lightning/20 text-lightning border-lightning/30">
                <Clock className="h-3 w-3 mr-1" />
                24/7 Support
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Expert Team
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-12">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`text-center ${method.primary ? "border-lightning bg-lightning/5" : ""}`}
              >
                <CardContent className="pt-8">
                  <div
                    className={`w-16 h-16 ${method.primary ? "bg-lightning" : "bg-lightning/10"} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <method.icon
                      className={`h-8 w-8 ${method.primary ? "text-navy" : "text-lightning"}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.availability}
                  </p>
                  <Button
                    className={
                      method.primary
                        ? "bg-lightning hover:bg-lightning-dark text-navy"
                        : ""
                    }
                    variant={method.primary ? "default" : "outline"}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="pt-6 text-center">
                  <item.icon className="h-12 w-12 text-lightning mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Button variant="ghost" size="sm">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Send us a detailed message
                and we'll get back to you within 24 hours.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">
                            Technical Issue
                          </SelectItem>
                          <SelectItem value="billing">
                            Billing Question
                          </SelectItem>
                          <SelectItem value="campaign">
                            Campaign Help
                          </SelectItem>
                          <SelectItem value="channel">
                            Channel Management
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your issue or question in detail..."
                        rows={6}
                      />
                    </div>

                    <Button className="w-full bg-lightning hover:bg-lightning-dark text-navy font-semibold">
                      <Zap className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Search */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {faqs.map((category) => (
                      <SelectItem
                        key={category.category}
                        value={category.category}
                      >
                        {category.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {filteredFaqs.map(
                  (category, categoryIndex) =>
                    category.questions.length > 0 && (
                      <div key={categoryIndex}>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <HelpCircle className="h-5 w-5 mr-2 text-lightning" />
                          {category.category}
                        </h3>
                        <Accordion type="single" collapsible>
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem
                              key={faqIndex}
                              value={`item-${categoryIndex}-${faqIndex}`}
                            >
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
                    ),
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status & Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">
                      All Systems Operational
                    </h3>
                    <p className="text-sm text-green-600">
                      All services are running normally
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  View Status Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
