import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maroon text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NSS HSS ADOOR</h3>
            <p className="text-sm">
              Empowering minds, building futures through quality education.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-cream/80 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cream/80 transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-cream/80 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cream/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm">Email: nsshssadoor@gmail.com</p>
            <p className="text-sm">Phone: +91 9037193141</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-cream/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cream/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cream/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cream/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NSS HSS Adoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;