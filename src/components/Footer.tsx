import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Developer Credit */}
            <div className="text-center">
              <p className="text-white/80 text-sm mb-2">
                Developed with ❤️ by
              </p>
              <h3 className="text-white font-bold text-lg">
                Yash Kavaiya
              </h3>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Yash-Kavaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
                <span className="text-sm hidden sm:inline group-hover:text-white">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/yashkavaiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
                <span className="text-sm hidden sm:inline group-hover:text-white">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://x.com/Yash_Kavaiya_"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="X (Twitter) Profile"
              >
                <Twitter className="w-6 h-6" />
                <span className="text-sm hidden sm:inline group-hover:text-white">
                  X (Twitter)
                </span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/60 text-xs">
              <span>🎮 Truth or Dare Game</span>
              <span className="hidden sm:inline">•</span>
              <span>Built with React & TypeScript</span>
              <span className="hidden sm:inline">•</span>
              <span>© {new Date().getFullYear()} All Rights Reserved</span>
            </div>

            {/* Decorative Line */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
