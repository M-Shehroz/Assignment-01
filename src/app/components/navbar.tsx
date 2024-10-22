import Image from "next/image";
import logo from "../images/logo.jpg"
import Link from "next/link";


export default function Navbar() {
    return (
        <div>
            <nav className="shadow-lg bg-white">
                        <div className="flex items-center py-3">
                        <Image src={logo} width={150} height={150} alt="logo" />
                        </div>
                    <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="py-5 px-3 font-semibold text-blue-600 hover:text-blue-900">HOME</Link>
                        <Link href="/about" className="py-5 px-3 font-semibold text-blue-600 hover:text-blue-900">ABOUT</Link>
                        <Link href="/product" className="py-5 px-3 font-semibold text-blue-600 hover:text-blue-900">PRODUCTS</Link>
                        <Link href="/product/led_lighting" className="py-5 px-3 font-semibold text-blue-600 hover:text-blue-900">FIRE ALARM</Link>
                        <Link href="/contact" className="py-5 px-3 font-semibold text-blue-600 hover:text-blue-900">CONTACT US</Link>
                    </div>
            </nav>    
        </div>
    )
}