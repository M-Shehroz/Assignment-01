export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Left Section: Copyright */}
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} ORBIX LIGHTING. All rights reserved.
                    </p>

                    {/* Right Section: Footer Links */}
                    <div className="flex space-x-4">
                        <a href="/" className="text-sm hover:text-gray-400">HOME</a>
                        <a href="/about" className="text-sm hover:text-gray-400">ABOUT</a>
                        <a href="/contact" className="text-sm hover:text-gray-400">CONTACT US</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
