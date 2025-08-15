import PortfolioNavigation from './components/PortfolioNavigation';
import PortfolioHero from './components/PortfolioHero';
import PortfolioAbout from './components/PortfolioAbout';
import PortfolioServices from './components/PortfolioServices';
import PortfolioProjects from './components/PortfolioProjects';
import PortfolioContact from './components/PortfolioContact';
import './styles/globals.css'

export default function App() {
  return (
    <div className="min-h-screen">
      <PortfolioNavigation />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioServices />
        <PortfolioProjects />
        <PortfolioContact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-xl">DevPortfolio</span>
              </div>
              <p className="text-gray-400 text-sm">
                Creating exceptional WordPress experiences that drive results and exceed expectations.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-primary transition-colors">WordPress Development</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">WooCommerce</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Custom Plugins</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@devportfolio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Available Worldwide</li>
                <li>Remote Work</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 DevPortfolio. All rights reserved. Built with ❤️ and WordPress.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}