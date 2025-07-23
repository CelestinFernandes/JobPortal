export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">JobHunt</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              JobHunt is a leading job portal that connects talented professionals with top companies worldwide. 
              Find your dream job today!</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">About</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact</a></li>
              <li><a href="#" className="hover:text-purple-600">Admin</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-purple-600">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-purple-600">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Facebook</a></li>
              <li><a href="#" className="hover:text-purple-600">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-600">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-600">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2024 JobHunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )}