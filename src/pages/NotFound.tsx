import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex-1 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-white animate-bounce">404</h1>
        <p className="text-3xl text-white/90 mb-2">Oops! Page not found</p>
        <p className="text-xl text-white/70 mb-8">
          Looks like you've wandered off the game board!
        </p>
        <Button
          asChild
          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md"
        >
          <a href="/" className="inline-flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
