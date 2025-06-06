import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Calendar as CalendarIcon,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Eye,
  Users,
  Zap,
  ArrowLeft,
  Image as ImageIcon,
  Video,
  FileText,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AdCampaign = () => {
  const [searchParams] = useSearchParams();
  const preselectedChannelId = searchParams.get("channel");

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(
    preselectedChannelId ? [preselectedChannelId] : [],
  );
  const [adFormat, setAdFormat] = useState("");
  const [adContent, setAdContent] = useState("");
  const [adTitle, setAdTitle] = useState("");
  const [adUrl, setAdUrl] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [budget, setBudget] = useState("");
  const [adPlacement, setAdPlacement] = useState("");

  const steps = [
    {
      id: 1,
      title: "Select Channels",
      description: "Choose where to place your ad",
    },
    { id: 2, title: "Ad Format", description: "Select your ad type" },
    { id: 3, title: "Create Content", description: "Upload and write your ad" },
    { id: 4, title: "Schedule & Budget", description: "Set dates and budget" },
    { id: 5, title: "Review & Confirm", description: "Final review" },
  ];

  // Mock channels data
  const availableChannels = [
    {
      id: "1",
      name: "TechNews Daily",
      category: "Technology",
      subscribers: 125000,
      averageReach: 85000,
      price: 450,
      isVerified: true,
      avatar: "/api/placeholder/48/48",
    },
    {
      id: "2",
      name: "Crypto Signals Pro",
      category: "Finance",
      subscribers: 89000,
      averageReach: 72000,
      price: 680,
      isVerified: true,
      avatar: "/api/placeholder/48/48",
    },
    {
      id: "3",
      name: "Fitness Motivation",
      category: "Health & Fitness",
      subscribers: 156000,
      averageReach: 98000,
      price: 320,
      isVerified: false,
      avatar: "/api/placeholder/48/48",
    },
  ];

  const adFormats = [
    {
      id: "text",
      name: "Text Post",
      description: "Simple text message with optional link",
      icon: FileText,
      price: "Base price",
    },
    {
      id: "image",
      name: "Image Post",
      description: "Image with caption and optional link",
      icon: ImageIcon,
      price: "+20%",
    },
    {
      id: "video",
      name: "Video Post",
      description: "Video content with description",
      icon: Video,
      price: "+50%",
    },
  ];

  const calculateTotalCost = () => {
    const selectedChannelData = availableChannels.filter((ch) =>
      selectedChannels.includes(ch.id),
    );
    const baseCost = selectedChannelData.reduce((sum, ch) => sum + ch.price, 0);

    let multiplier = 1;
    if (adFormat === "image") multiplier = 1.2;
    if (adFormat === "video") multiplier = 1.5;

    return Math.round(baseCost * multiplier);
  };

  const handleChannelToggle = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId],
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedChannels.length > 0;
      case 2:
        return adFormat !== "";
      case 3:
        return (
          adContent.trim() !== "" &&
          (adFormat === "text" || uploadedFiles.length > 0)
        );
      case 4:
        return startDate && budget !== "";
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-12">
        <div className="container">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/channels">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Channels
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl font-bold mb-4">Create Ad Campaign</h1>
          <p className="text-xl text-gray-300">
            Set up your Telegram ad campaign in just a few simple steps
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                        currentStep === step.id
                          ? "bg-lightning text-navy"
                          : currentStep > step.id
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-600",
                      )}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "w-full h-0.5 mx-4",
                          currentStep > step.id
                            ? "bg-green-500"
                            : "bg-gray-200",
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-muted-foreground">
                  {steps[currentStep - 1].description}
                </p>
              </div>
            </div>

            {/* Step Content */}
            <Card>
              <CardContent className="pt-6">
                {/* Step 1: Select Channels */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Choose Channels
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Select one or more channels where you want to place your
                        ad.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {availableChannels.map((channel) => (
                        <Card
                          key={channel.id}
                          className={cn(
                            "cursor-pointer transition-all hover:shadow-md",
                            selectedChannels.includes(channel.id)
                              ? "border-lightning bg-lightning/5"
                              : "border-border",
                          )}
                          onClick={() => handleChannelToggle(channel.id)}
                        >
                          <CardContent className="pt-4">
                            <div className="flex items-center space-x-4">
                              <Checkbox
                                checked={selectedChannels.includes(channel.id)}
                                onChange={() => handleChannelToggle(channel.id)}
                              />
                              <Avatar className="h-12 w-12">
                                <AvatarImage
                                  src={channel.avatar}
                                  alt={channel.name}
                                />
                                <AvatarFallback>
                                  {channel.name.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold">
                                    {channel.name}
                                  </h4>
                                  {channel.isVerified && (
                                    <CheckCircle
                                      className="h-4 w-4 text-blue-500"
                                      fill="currentColor"
                                    />
                                  )}
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {channel.subscribers.toLocaleString()}
                                  </span>
                                  <span className="flex items-center">
                                    <Eye className="h-4 w-4 mr-1" />
                                    {channel.averageReach.toLocaleString()}
                                  </span>
                                  <Badge variant="secondary">
                                    {channel.category}
                                  </Badge>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold text-lightning">
                                  ${channel.price}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  per post
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Ad Format */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Select Ad Format
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Choose the type of ad you want to create.
                      </p>
                    </div>

                    <RadioGroup value={adFormat} onValueChange={setAdFormat}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {adFormats.map((format) => (
                          <div key={format.id}>
                            <RadioGroupItem
                              value={format.id}
                              id={format.id}
                              className="sr-only"
                            />
                            <Label
                              htmlFor={format.id}
                              className={cn(
                                "flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all hover:bg-muted/50",
                                adFormat === format.id
                                  ? "border-lightning bg-lightning/5"
                                  : "border-border",
                              )}
                            >
                              <format.icon className="h-12 w-12 mb-4 text-lightning" />
                              <h4 className="font-semibold mb-2">
                                {format.name}
                              </h4>
                              <p className="text-sm text-muted-foreground text-center mb-2">
                                {format.description}
                              </p>
                              <Badge variant="outline">{format.price}</Badge>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Step 3: Create Content */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Create Your Ad Content
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Write your ad copy and upload any media files.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Ad Title (Optional)</Label>
                        <Input
                          id="title"
                          placeholder="Enter a catchy title..."
                          value={adTitle}
                          onChange={(e) => setAdTitle(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="content">Ad Content *</Label>
                        <Textarea
                          id="content"
                          placeholder="Write your ad message here..."
                          value={adContent}
                          onChange={(e) => setAdContent(e.target.value)}
                          rows={6}
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          {adContent.length}/500 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="url">
                          Call-to-Action URL (Optional)
                        </Label>
                        <Input
                          id="url"
                          placeholder="https://your-website.com"
                          value={adUrl}
                          onChange={(e) => setAdUrl(e.target.value)}
                        />
                      </div>

                      {(adFormat === "image" || adFormat === "video") && (
                        <div>
                          <Label>Upload Media *</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-muted-foreground mb-4">
                              Drag and drop your{" "}
                              {adFormat === "image" ? "images" : "video"} here,
                              or click to browse
                            </p>
                            <input
                              type="file"
                              accept={
                                adFormat === "image" ? "image/*" : "video/*"
                              }
                              multiple={adFormat === "image"}
                              onChange={handleFileUpload}
                              className="hidden"
                              id="file-upload"
                            />
                            <Button variant="outline" asChild>
                              <label
                                htmlFor="file-upload"
                                className="cursor-pointer"
                              >
                                Choose Files
                              </label>
                            </Button>
                          </div>

                          {uploadedFiles.length > 0 && (
                            <div className="mt-4">
                              <h4 className="font-medium mb-2">
                                Uploaded Files:
                              </h4>
                              <div className="space-y-2">
                                {uploadedFiles.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-muted rounded"
                                  >
                                    <span className="text-sm">{file.name}</span>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeFile(index)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Schedule & Budget */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Schedule & Budget
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Set when your ad should run and confirm your budget.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Start Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !startDate && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {startDate
                                ? format(startDate, "PPP")
                                : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={setStartDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label>End Date (Optional)</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !endDate && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {endDate ? format(endDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={setEndDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <Label>Ad Placement</Label>
                      <Select
                        value={adPlacement}
                        onValueChange={setAdPlacement}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose placement timing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">
                            As soon as possible
                          </SelectItem>
                          <SelectItem value="peak">
                            During peak hours
                          </SelectItem>
                          <SelectItem value="specific">
                            Specific time slot
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Confirm */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Review Your Campaign
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Please review all details before submitting your
                        campaign.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            Selected Channels
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {availableChannels
                            .filter((ch) => selectedChannels.includes(ch.id))
                            .map((channel) => (
                              <div
                                key={channel.id}
                                className="flex items-center justify-between"
                              >
                                <span>{channel.name}</span>
                                <span className="font-semibold">
                                  ${channel.price}
                                </span>
                              </div>
                            ))}
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            Ad Content
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div>
                              <strong>Format:</strong>{" "}
                              {adFormats.find((f) => f.id === adFormat)?.name}
                            </div>
                            {adTitle && (
                              <div>
                                <strong>Title:</strong> {adTitle}
                              </div>
                            )}
                            <div>
                              <strong>Content:</strong> {adContent}
                            </div>
                            {adUrl && (
                              <div>
                                <strong>URL:</strong> {adUrl}
                              </div>
                            )}
                            {uploadedFiles.length > 0 && (
                              <div>
                                <strong>Files:</strong> {uploadedFiles.length}{" "}
                                file(s) uploaded
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div>
                              <strong>Start:</strong>{" "}
                              {startDate ? format(startDate, "PPP") : "Not set"}
                            </div>
                            {endDate && (
                              <div>
                                <strong>End:</strong> {format(endDate, "PPP")}
                              </div>
                            )}
                            <div>
                              <strong>Placement:</strong>{" "}
                              {adPlacement || "Not specified"}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="bg-lightning hover:bg-lightning-dark text-navy"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-lightning hover:bg-lightning-dark text-navy">
                  <Zap className="h-4 w-4 mr-2" />
                  Submit Campaign
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-lightning" />
                  <span>Campaign Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Selected Channels</h4>
                  {selectedChannels.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No channels selected
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {availableChannels
                        .filter((ch) => selectedChannels.includes(ch.id))
                        .map((channel) => (
                          <div
                            key={channel.id}
                            className="text-sm flex justify-between"
                          >
                            <span>{channel.name}</span>
                            <span>${channel.price}</span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {adFormat && (
                  <div>
                    <h4 className="font-semibold mb-2">Ad Format</h4>
                    <p className="text-sm">
                      {adFormats.find((f) => f.id === adFormat)?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {adFormats.find((f) => f.id === adFormat)?.price} pricing
                    </p>
                  </div>
                )}

                {startDate && (
                  <div>
                    <h4 className="font-semibold mb-2">Schedule</h4>
                    <p className="text-sm">Start: {format(startDate, "PPP")}</p>
                    {endDate && (
                      <p className="text-sm">End: {format(endDate, "PPP")}</p>
                    )}
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Cost:</span>
                    <span className="text-2xl font-bold text-lightning">
                      ${selectedChannels.length > 0 ? calculateTotalCost() : 0}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Includes all fees and format pricing
                  </p>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-medium">Payment Protection</p>
                      <p className="text-muted-foreground">
                        Payment held in escrow until ad goes live
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdCampaign;
