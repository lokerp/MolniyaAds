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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "All Categories",
    "Telegram Marketing",
    "Digital Advertising",
    "Growth Strategies",
    "Industry News",
    "Case Studies",
    "Tips & Tricks",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Telegram Channel Marketing in 2024",
      slug: "complete-guide-telegram-marketing-2024",
      excerpt:
        "Learn how to leverage Telegram channels for effective marketing campaigns. Discover the latest strategies, best practices, and tips for success.",
      content: "Full article content would go here...",
      category: "Telegram Marketing",
      author: "Sarah Johnson",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["telegram", "marketing", "guide"],
    },
    {
      id: 2,
      title: "5 Proven Strategies to Increase Your Ad Engagement Rate",
      slug: "5-strategies-increase-ad-engagement",
      excerpt:
        "Discover actionable tactics that top advertisers use to boost their engagement rates on Telegram channels.",
      content: "Full article content would go here...",
      category: "Growth Strategies",
      author: "Michael Chen",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-12",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["engagement", "strategy", "advertising"],
    },
    {
      id: 3,
      title: "Case Study: How TechCorp Achieved 300% ROI with Telegram Ads",
      slug: "techcorp-300-roi-case-study",
      excerpt:
        "A detailed breakdown of how one company leveraged Molniya's platform to achieve exceptional returns on their advertising investment.",
      content: "Full article content would go here...",
      category: "Case Studies",
      author: "Lisa Wang",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-10",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["case-study", "roi", "success-story"],
    },
    {
      id: 4,
      title:
        "Understanding Telegram's Algorithm: What Advertisers Need to Know",
      slug: "telegram-algorithm-guide-advertisers",
      excerpt:
        "Get insights into how Telegram's algorithm works and how to optimize your content for maximum reach and engagement.",
      content: "Full article content would go here...",
      category: "Tips & Tricks",
      author: "David Rodriguez",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-08",
      readTime: "7 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["algorithm", "optimization", "reach"],
    },
    {
      id: 5,
      title: "The Future of Digital Advertising: Trends to Watch in 2024",
      slug: "future-digital-advertising-2024-trends",
      excerpt:
        "Explore emerging trends in digital advertising and how they're shaping the landscape of social media marketing.",
      content: "Full article content would go here...",
      category: "Industry News",
      author: "Emma Thompson",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-05",
      readTime: "9 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["trends", "future", "digital-advertising"],
    },
    {
      id: 6,
      title: "Building Your Brand Voice on Telegram: A Comprehensive Guide",
      slug: "building-brand-voice-telegram",
      excerpt:
        "Learn how to develop and maintain a consistent brand voice across your Telegram marketing campaigns.",
      content: "Full article content would go here...",
      category: "Digital Advertising",
      author: "Alex Kumar",
      authorAvatar: "/api/placeholder/40/40",
      publishedDate: "2024-01-03",
      readTime: "5 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["branding", "voice", "consistency"],
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Molniya Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, strategies, and stories from the world of Telegram
              advertising. Stay ahead with the latest trends and best practices.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Badge className="bg-lightning/20 text-lightning border-lightning/30">
                Latest insights
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Expert advice
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Case studies
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Article */}
        {featuredPost &&
          !searchQuery &&
          (!selectedCategory || selectedCategory === "All Categories") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-muted">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-lightning/10 text-lightning">
                        Featured
                      </Badge>
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 hover:text-lightning transition-colors">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(featuredPost.publishedDate)}</span>
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg hover:shadow-lightning/10 transition-all duration-300 group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-lightning transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-lightning/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-lightning">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <div>{post.author}</div>
                        <div>{formatDate(post.publishedDate)}</div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-lightning/5 to-lightning/10 border-lightning/20">
            <CardContent className="pt-8 text-center">
              <TrendingUp className="h-12 w-12 text-lightning mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest insights on Telegram marketing, advertising
                strategies, and industry trends delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-lightning hover:bg-lightning-dark text-navy">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
