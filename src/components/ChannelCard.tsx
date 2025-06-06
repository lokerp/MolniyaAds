import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Eye,
  DollarSign,
  CheckCircle,
  TrendingUp,
  MapPin,
} from "lucide-react";

interface ChannelCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  avatar: string;
  subscribers: number;
  averageReach: number;
  price: number;
  isVerified?: boolean;
  isTrending?: boolean;
  region: string;
  engagement?: number;
}

const ChannelCard = ({
  id,
  name,
  category,
  description,
  avatar,
  subscribers,
  averageReach,
  price,
  isVerified = false,
  isTrending = false,
  region,
  engagement = 0,
}: ChannelCardProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Card className="group hover:shadow-lg hover:shadow-lightning/10 transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-lightning/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 ring-2 ring-lightning/20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-lightning/10 text-lightning font-semibold">
                {name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg group-hover:text-lightning transition-colors">
                  {name}
                </h3>
                {isVerified && (
                  <CheckCircle
                    className="h-4 w-4 text-blue-500"
                    fill="currentColor"
                  />
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {category}
                </Badge>
                {isTrending && (
                  <Badge className="bg-lightning/10 text-lightning hover:bg-lightning/20 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-lightning">${price}</div>
            <div className="text-xs text-muted-foreground">per post</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">
                {formatNumber(subscribers)}
              </div>
              <div className="text-xs text-muted-foreground">Subscribers</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">
                {formatNumber(averageReach)}
              </div>
              <div className="text-xs text-muted-foreground">Avg. Reach</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{region}</span>
          </div>
          {engagement > 0 && <div>{engagement.toFixed(1)}% engagement</div>}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex space-x-2 w-full">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/channel/${id}`}>View Details</Link>
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-lightning hover:bg-lightning-dark text-navy font-semibold"
            asChild
          >
            <Link to={`/create-campaign?channel=${id}`}>Place Ad</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChannelCard;
