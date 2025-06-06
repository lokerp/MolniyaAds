import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Eye,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  BarChart3,
  MessageSquare,
  Share2,
  ArrowLeft,
  Zap,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChannelProfile = () => {
  const { id } = useParams();

  // Mock data for the channel
  const channel = {
    id: "1",
    name: "TechNews Daily",
    category: "Technology",
    description:
      "Latest technology news, reviews, and industry insights for tech enthusiasts and professionals. We cover everything from startups to enterprise solutions, emerging technologies, and industry trends that matter to your business.",
    fullDescription: `TechNews Daily is the premier destination for technology professionals, entrepreneurs, and enthusiasts who want to stay ahead of the curve. Our team of expert journalists and industry analysts brings you the most important tech news, in-depth reviews, and exclusive insights from Silicon Valley and beyond.

Our content covers:
• Breaking tech news and industry analysis
• Product reviews and comparisons
• Startup spotlights and funding news
• Enterprise technology trends
• Emerging technologies like AI, blockchain, and IoT
• Career advice for tech professionals

Founded in 2019, we've grown to become one of the most trusted sources for technology news on Telegram, with a highly engaged community of professionals from top tech companies worldwide.`,
    avatar: "/api/placeholder/100/100",
    coverImage: "/api/placeholder/800/300",
    subscribers: 125000,
    averageReach: 85000,
    price: 450,
    isVerified: true,
    isTrending: true,
    region: "Global",
    engagement: 6.8,
    frequency: "3-4 posts/day",
    languages: ["English"],
    tags: ["Technology", "News", "Startups", "Innovation", "AI", "SaaS"],
    joinedDate: "2019-03-15",
    averageViews: 92000,
    peakViews: 250000,
    demographics: {
      age: {
        "18-24": 15,
        "25-34": 45,
        "35-44": 25,
        "45-54": 12,
        "55+": 3,
      },
      gender: {
        male: 72,
        female: 28,
      },
      countries: {
        "United States": 35,
        "United Kingdom": 15,
        Germany: 12,
        Canada: 8,
        Australia: 6,
        Others: 24,
      },
    },
  };

  // Mock data for reach over time
  const reachData = [
    { month: "Jan", reach: 75000, engagement: 5.2 },
    { month: "Feb", reach: 78000, engagement: 5.8 },
    { month: "Mar", reach: 82000, engagement: 6.1 },
    { month: "Apr", reach: 85000, engagement: 6.4 },
    { month: "May", reach: 88000, engagement: 6.8 },
    { month: "Jun", reach: 85000, engagement: 6.8 },
  ];

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      advertiser: "TechCorp Inc.",
      rating: 5,
      comment:
        "Excellent reach and engagement! Our product launch was very successful.",
      date: "2024-01-15",
      campaign: "Product Launch",
    },
    {
      id: 2,
      advertiser: "StartupX",
      rating: 5,
      comment: "Professional service and great results. Highly recommend!",
      date: "2024-01-08",
      campaign: "Brand Awareness",
    },
    {
      id: 3,
      advertiser: "SaaS Solutions",
      rating: 4,
      comment: "Good audience targeting and reasonable pricing.",
      date: "2023-12-20",
      campaign: "Lead Generation",
    },
  ];

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-navy to-navy-light">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4">
          <Button variant="secondary" size="sm" asChild>
            <Link to="/channels">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Channels
            </Link>
          </Button>
        </div>
      </div>

      <div className="container py-8">
        {/* Channel Header */}
        <div className="relative -mt-16 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <Avatar className="w-24 h-24 ring-4 ring-lightning/20 mx-auto lg:mx-0">
                  <AvatarImage src={channel.avatar} alt={channel.name} />
                  <AvatarFallback className="bg-lightning/10 text-lightning font-bold text-2xl">
                    {channel.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                        <h1 className="text-3xl font-bold">{channel.name}</h1>
                        {channel.isVerified && (
                          <CheckCircle
                            className="h-6 w-6 text-blue-500"
                            fill="currentColor"
                          />
                        )}
                        {channel.isTrending && (
                          <Badge className="bg-lightning/10 text-lightning">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                        <Badge variant="secondary">{channel.category}</Badge>
                        <Badge variant="outline" className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {channel.region}
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Active since 2019
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-bold text-lightning">
                        ${channel.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per post
                      </div>
                      <Button
                        className="mt-2 bg-lightning hover:bg-lightning-dark text-navy font-semibold"
                        asChild
                      >
                        <Link to={`/create-campaign?channel=${channel.id}`}>
                          <Zap className="h-4 w-4 mr-2" />
                          Place Ad
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">
                    {channel.subscribers.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Subscribers
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">
                    {channel.averageReach.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Reach
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">
                    {channel.engagement}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Engagement
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rating ({reviews.length} reviews)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Channel</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {channel.fullDescription}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {channel.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Channel Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Posts {channel.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Languages: {channel.languages.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Share2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Peak views: {channel.peakViews.toLocaleString()}
                      </span>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Ad Performance</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Click-through rate</span>
                          <span>2.3%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Conversion rate</span>
                          <span>0.8%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Avg. cost per click</span>
                          <span>$0.45</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reach Over Time</CardTitle>
                  <CardDescription>
                    Monthly reach and engagement trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={reachData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="reach"
                        stroke="#FFD700"
                        fill="#FFD700"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Rate</CardTitle>
                  <CardDescription>
                    Engagement percentage over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={reachData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="engagement"
                        stroke="#FFD700"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rating Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-lightning mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(averageRating) ? "text-lightning fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Based on {reviews.length} reviews
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const count = reviews.filter(
                        (r) => r.rating === stars,
                      ).length;
                      const percentage = (count / reviews.length) * 100;
                      return (
                        <div
                          key={stars}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <span>{stars} stars</span>
                          <Progress value={percentage} className="flex-1" />
                          <span>{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="lg:col-span-2 space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold">
                            {review.advertiser}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {review.campaign}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-lightning fill-current"
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(channel.demographics.age).map(
                      ([age, percentage]) => (
                        <div
                          key={age}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{age}</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={percentage} className="w-20" />
                            <span className="text-sm text-muted-foreground w-10">
                              {percentage}%
                            </span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gender Split</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Male</span>
                      <div className="flex items-center space-x-2">
                        <Progress
                          value={channel.demographics.gender.male}
                          className="w-20"
                        />
                        <span className="text-sm text-muted-foreground w-10">
                          {channel.demographics.gender.male}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Female</span>
                      <div className="flex items-center space-x-2">
                        <Progress
                          value={channel.demographics.gender.female}
                          className="w-20"
                        />
                        <span className="text-sm text-muted-foreground w-10">
                          {channel.demographics.gender.female}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(channel.demographics.countries).map(
                      ([country, percentage]) => (
                        <div
                          key={country}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{country}</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={percentage} className="w-20" />
                            <span className="text-sm text-muted-foreground w-10">
                              {percentage}%
                            </span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ChannelProfile;
