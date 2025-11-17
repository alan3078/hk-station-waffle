export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HKS</h3>
            <p className="text-gray-400">Authentic Hong Kong Egg Waffles & Premium Gelato</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#home" className="hover:text-white">Home</a></li>
              <li><a href="/#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/#blog" className="hover:text-white">Blog</a></li>
              <li><a href="/#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="sr-only">Email</span>
                <a href="mailto:hkstationwaffle@gmail.com" className="hover:text-white">hkstationwaffle@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HKS. All rights reserved. | New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
