export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
                
                <div className="space-y-4">
                    {/* Contact Number */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
                        <p className="text-gray-600">+92 347 355 2969</p>
                    </div>

                    {/* Email Address */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">E-mail</h2>
                        <p className="text-gray-600">
                            <a href="mailto:sjibranali1@gmail.com" className="text-blue-500 hover:underline">
                                shehrozsss@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Postal Address */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Address</h2>
                        <p className="text-gray-600">
                        Plot No-F26, Opposite Dolmen Mall,  <br />
                        Tariq Road,  <br />
                        Karachi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}