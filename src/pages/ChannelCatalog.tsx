import { useState } from "react";
import { Search, Filter, SlidersHorizontal, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChannelCard from "@/components/ChannelCard";

const ChannelCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedAdType, setSelectedAdType] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [openToAds, setOpenToAds] = useState(false);
  const [priceRange, setPriceRange] = useState("");

  // Mock data for channels
  const channels = [
    {
      id: "1",
      name: "TechNews Daily",
      category: "Technology",
      description:
        "Latest technology news, reviews, and industry insights for tech enthusiasts and professionals.",
      avatar: "/api/placeholder/48/48",
      subscribers: 125000,
      averageReach: 85000,
      price: 450,
      isVerified: true,
      isTrending: true,
      region: "Global",
      engagement: 6.8,
    },
    {
      id: "2",
      name: "Crypto Signals Pro",
      category: "Finance",
      description:
        "Professional cryptocurrency trading signals, market analysis, and investment strategies.",
      avatar: "/api/placeholder/48/48",
      subscribers: 89000,
      averageReach: 72000,
      price: 680,
      isVerified: true,
      isTrending: false,
      region: "US & EU",
      engagement: 8.2,
    },
    {
      id: "3",
      name: "Fitness Motivation",
      category: "Health & Fitness",
      description:
        "Daily motivation, workout routines, nutrition tips, and healthy lifestyle content.",
      avatar: "/api/placeholder/48/48",
      subscribers: 156000,
      averageReach: 98000,
      price: 320,
      isVerified: false,
      isTrending: true,
      region: "Global",
      engagement: 7.1,
    },
    {
      id: "4",
      name: "Business Growth",
      category: "Business",
      description:
        "Entrepreneurship tips, business strategies, and success stories from industry leaders.",
      avatar: "/api/placeholder/48/48",
      subscribers: 78000,
      averageReach: 65000,
      price: 290,
      isVerified: true,
      isTrending: false,
      region: "North America",
      engagement: 5.9,
    },
    {
      id: "5",
      name: "Travel Adventures",
      category: "Travel",
      description:
        "Amazing travel destinations, tips, photography, and adventure stories from around the world.",
      avatar: "/api/placeholder/48/48",
      subscribers: 203000,
      averageReach: 145000,
      price: 520,
      isVerified: true,
      isTrending: true,
      region: "Global",
      engagement: 9.1,
    },
    {
      id: "6",
      name: "Gaming Universe",
      category: "Gaming",
      description:
        "Latest gaming news, reviews, tips, and community discussions for all gaming platforms.",
      avatar: "/api/placeholder/48/48",
      subscribers: 184000,
      averageReach: 132000,
      price: 380,
      isVerified: false,
      isTrending: false,
      region: "Global",
      engagement: 8.7,
    },
  ];

  const categories = [
    "All Categories",
    "Technology",
    "Finance",
    "Health & Fitness",
    "Business",
    "Travel",
    "Gaming",
    "Food & Cooking",
    "Education",
    "Entertainment",
  ];

  const regions = [
    "All Regions",
    "Global",
    "North America",
    "US & EU",
    "Europe",
    "Asia",
    "Latin America",
  ];

  const adTypes = [
    "All Types",
    "Text Post",
    "Image Post",
    "Video Post",
    "Story",
    "Pinned Message",
  ];

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "reach", label: "Reach" },
    { value: "newest", label: "Newest" },
  ];

  const filteredChannels = channels.filter((channel) => {
    const matchesSearch =
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All Categories" ||
      channel.category === selectedCategory;
    const matchesRegion =
      !selectedRegion ||
      selectedRegion === "All Regions" ||
      channel.region === selectedRegion;
    const matchesVerified = !verifiedOnly || channel.isVerified;

    return matchesSearch && matchesCategory && matchesRegion && matchesVerified;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Channel Catalog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the perfect Telegram channels for your advertising
              campaigns. Browse through thousands of verified channels across
              all categories.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Badge className="bg-lightning/20 text-lightning border-lightning/30">
                {filteredChannels.length} channels available
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Real-time data
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by channel name, topic, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filter Channels</SheetTitle>
                  <SheetDescription>
                    Refine your search to find the perfect channels
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <FiltersContent
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                    selectedAdType={selectedAdType}
                    setSelectedAdType={setSelectedAdType}
                    verifiedOnly={verifiedOnly}
                    setVerifiedOnly={setVerifiedOnly}
                    openToAds={openToAds}
                    setOpenToAds={setOpenToAds}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    categories={categories}
                    regions={regions}
                    adTypes={adTypes}
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Filters */}
          <Card className="hidden lg:block">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FiltersContent
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedAdType={selectedAdType}
                setSelectedAdType={setSelectedAdType}
                verifiedOnly={verifiedOnly}
                setVerifiedOnly={setVerifiedOnly}
                openToAds={openToAds}
                setOpenToAds={setOpenToAds}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                categories={categories}
                regions={regions}
                adTypes={adTypes}
              />
            </CardContent>
          </Card>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredChannels.map((channel) => (
            <ChannelCard key={channel.id} {...channel} />
          ))}
        </div>

        {/* Pagination would go here */}
        <div className="flex justify-center">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline" className="mr-2 bg-lightning text-navy">
            1
          </Button>
          <Button variant="outline" className="mr-2">
            2
          </Button>
          <Button variant="outline" className="mr-2">
            3
          </Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      {/* Floating Help Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-lightning hover:bg-lightning-dark text-navy shadow-lg"
        size="icon"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>

      <Footer />
    </div>
  );
};

// Filters component for reuse
const FiltersContent = ({
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedAdType,
  setSelectedAdType,
  verifiedOnly,
  setVerifiedOnly,
  openToAds,
  setOpenToAds,
  priceRange,
  setPriceRange,
  categories,
  regions,
  adTypes,
}: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category: string) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Region</label>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger>
            <SelectValue placeholder="All Regions" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region: string) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Ad Type</label>
        <Select value={selectedAdType} onValueChange={setSelectedAdType}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            {adTypes.map((type: string) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Price Range</label>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Any Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-100">$0 - $100</SelectItem>
            <SelectItem value="100-300">$100 - $300</SelectItem>
            <SelectItem value="300-500">$300 - $500</SelectItem>
            <SelectItem value="500+">$500+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="lg:col-span-2">
        <label className="text-sm font-medium mb-2 block">
          Special Filters
        </label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="verified"
              checked={verifiedOnly}
              onCheckedChange={setVerifiedOnly}
            />
            <label htmlFor="verified" className="text-sm">
              Verified channels only
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="openToAds"
              checked={openToAds}
              onCheckedChange={setOpenToAds}
            />
            <label htmlFor="openToAds" className="text-sm">
              Open to ads
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelCatalog;
