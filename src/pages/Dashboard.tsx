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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Bell,
  Settings,
  Plus,
  Edit,
  Pause,
  Play,
  MoreHorizontal,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Zap,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const campaignData = [
    { month: "Jan", spend: 2400, reach: 45000, clicks: 1200 },
    { month: "Feb", spend: 1800, reach: 38000, clicks: 980 },
    { month: "Mar", spend: 3200, reach: 62000, clicks: 1650 },
    { month: "Apr", spend: 2800, reach: 55000, clicks: 1400 },
    { month: "May", spend: 3600, reach: 72000, clicks: 1890 },
    { month: "Jun", spend: 4200, reach: 85000, clicks: 2200 },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Spring Sale Campaign",
      status: "active",
      channel: "TechNews Daily",
      reach: 45000,
      clicks: 1200,
      spend: 450,
      budget: 500,
      startDate: "2024-01-15",
      endDate: "2024-01-30",
    },
    {
      id: 2,
      name: "Product Launch",
      status: "completed",
      channel: "Crypto Signals Pro",
      reach: 72000,
      clicks: 1890,
      spend: 680,
      budget: 680,
      startDate: "2024-01-08",
      endDate: "2024-01-14",
    },
    {
      id: 3,
      name: "Brand Awareness",
      status: "pending",
      channel: "Fitness Motivation",
      reach: 0,
      clicks: 0,
      spend: 0,
      budget: 320,
      startDate: "2024-02-01",
      endDate: "2024-02-07",
    },
  ];

  const myChannels = [
    {
      id: 1,
      name: "StartupHub",
      subscribers: 25000,
      growth: 12,
      revenue: 1250,
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "AI Today",
      subscribers: 18000,
      growth: 8,
      revenue: 890,
      avatar: "/api/placeholder/40/40",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Your ad on TechNews Daily is now live!",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "info",
      message: "Campaign 'Product Launch' has ended",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Budget limit reached for Spring Sale Campaign",
      time: "2 days ago",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/20">
            Active
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20">
            Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20">
            Pending
          </Badge>
        );
      case "paused":
        return <Badge variant="secondary">Paused</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "paused":
        return <Pause className="h-4 w-4 text-gray-600" />;
      default:
        return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-12">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
              <p className="text-xl text-gray-300">
                Manage your campaigns and track performance
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="secondary" asChild>
                <Link to="/channels">
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">My Campaigns</TabsTrigger>
            <TabsTrigger value="channels">My Channels</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-2xl font-bold">$12,450</div>
                      <div className="text-sm text-muted-foreground">
                        Total Spent
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600">+12%</span>
                    <span className="text-muted-foreground ml-1">
                      vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-2xl font-bold">357K</div>
                      <div className="text-sm text-muted-foreground">
                        Total Reach
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600">+8%</span>
                    <span className="text-muted-foreground ml-1">
                      vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-2xl font-bold">9,320</div>
                      <div className="text-sm text-muted-foreground">
                        Total Clicks
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600">+15%</span>
                    <span className="text-muted-foreground ml-1">
                      vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-lightning" />
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-muted-foreground">
                        Active Campaigns
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-muted-foreground">
                      2 pending approval
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Over Time</CardTitle>
                  <CardDescription>
                    Monthly advertising spend and reach
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={campaignData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="spend"
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
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Clicks and reach by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={campaignData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="clicks" fill="#FFD700" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>Your latest campaign activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div
                      key={campaign.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(campaign.status)}
                        <div>
                          <h4 className="font-semibold">{campaign.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {campaign.channel}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold">
                            {campaign.reach.toLocaleString()}
                          </div>
                          <div className="text-muted-foreground">Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">${campaign.spend}</div>
                          <div className="text-muted-foreground">Spent</div>
                        </div>
                        {getStatusBadge(campaign.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Campaigns</h2>
              <Button
                className="bg-lightning hover:bg-lightning-dark text-navy"
                asChild
              >
                <Link to="/create-campaign">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Campaign
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {campaign.name}
                        </h3>
                        <p className="text-muted-foreground">
                          Channel: {campaign.channel}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(campaign.status)}
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Reach
                        </div>
                        <div className="text-lg font-semibold">
                          {campaign.reach.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Clicks
                        </div>
                        <div className="text-lg font-semibold">
                          {campaign.clicks.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Spent
                        </div>
                        <div className="text-lg font-semibold">
                          ${campaign.spend}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Budget
                        </div>
                        <div className="text-lg font-semibold">
                          ${campaign.budget}
                        </div>
                      </div>
                    </div>

                    {campaign.status === "active" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Budget Used</span>
                          <span>
                            {Math.round(
                              (campaign.spend / campaign.budget) * 100,
                            )}
                            %
                          </span>
                        </div>
                        <Progress
                          value={(campaign.spend / campaign.budget) * 100}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {campaign.startDate} - {campaign.endDate}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        {campaign.status === "active" ? (
                          <Button variant="outline" size="sm">
                            <Pause className="h-4 w-4 mr-1" />
                            Pause
                          </Button>
                        ) : campaign.status === "paused" ? (
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-1" />
                            Resume
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Channels</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Channel
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myChannels.map((channel) => (
                <Card key={channel.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={channel.avatar} alt={channel.name} />
                        <AvatarFallback>
                          {channel.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{channel.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {channel.subscribers.toLocaleString()} subscribers
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Growth
                        </div>
                        <div className="flex items-center">
                          <span className="text-lg font-semibold text-green-600">
                            +{channel.growth}%
                          </span>
                          <TrendingUp className="h-4 w-4 text-green-600 ml-1" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Revenue
                        </div>
                        <div className="text-lg font-semibold text-lightning">
                          ${channel.revenue}
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Analytics
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Manage Ads
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Communication with advertisers and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    No messages yet
                  </h3>
                  <p className="text-muted-foreground">
                    Messages from advertisers and support will appear here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Recent activity and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start space-x-3 p-3 rounded-lg border"
                    >
                      <Bell className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
