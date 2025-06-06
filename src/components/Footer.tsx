import { Link } from "react-router-dom";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link className="flex items-center space-x-2 mb-4" to="/">
              <Zap className="h-8 w-8 text-lightning" fill="currentColor" />
              <span className="font-bold text-2xl bg-gradient-to-r from-lightning to-lightning-light bg-clip-text text-transparent">
                Molniya
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Lightning-fast Telegram ad marketplace connecting advertisers with
              channel owners.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-lightning hover:bg-white/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-lightning hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-lightning hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lightning mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/channels"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Browse Channels
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/create-campaign"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Create Campaign
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lightning mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lightning mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-lightning transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium text-white mb-2">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@molniya.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Molniya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
