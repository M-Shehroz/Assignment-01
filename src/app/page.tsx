import Image from "next/image";
import main from "../app/images/main.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Image src={main} width={1250} height={1250} className="rounded-lg shadow-lg" alt="home picture" />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ORBIX LIGHTING
        </h1>
        <p className="text-gray-600 text-lg mb-6">
        To provide “Reliable Solution” with an edge of technology offerings to find the most effective and affordable fit that help our customers, meet their needs of having a high performing, reliable, manageable and cost-effective network.
        </p>

        <div className="space-x-4">
          <Link href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            About
          </Link>
          <Link
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}