import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              JobHunt is a leading job portal that connects talented professionals with top companies worldwide. Find your dream job today!
            </p>
            <div className="flex space-x-4 text-purple-600">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-600">
              <a href="#" className="block hover:text-purple-600">About</a>
              <a href="#" className="block hover:text-purple-600">Contact</a>
              <a href="#" className="block hover:text-purple-600">Admin</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-2 text-gray-600">
              <a href="#" className="block hover:text-purple-600">Terms of use</a>
              <a href="#" className="block hover:text-purple-600">Legal Center</a>
              <a href="#" className="block hover:text-purple-600">Privacy Policy</a>
              <a href="#" className="block hover:text-purple-600">Complaints</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="space-y-2 text-gray-600">
              <a href="#" className="block hover:text-purple-600">Facebook</a>
              <a href="#" className="block hover:text-purple-600">Instagram</a>
              <a href="#" className="block hover:text-purple-600">LinkedIn</a>
              <a href="#" className="block hover:text-purple-600">Twitter</a>
              <a href="#" className="block hover:text-purple-600">YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-600">
              <p><FaPhone className="inline mr-2 text-purple-600" /> +(30)123-0405</p>
              <p><FaMapMarkerAlt className="inline mr-2 text-purple-600" /> Washington Ave. Something, 123456</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t mt-12 pt-8 text-gray-600 space-y-4 md:space-y-0">
          <p>&copy; 2024 JobHunt. All rights reserved.</p>
          <a href="/terms" className="hover:text-gray-800 transition-colors duration-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}