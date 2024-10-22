import Image from "next/image";
import fas01 from "../../images/fas01.jpg";
import fas02 from "../../images/fas02.jpg"
import fas03 from "../../images/fas03.jpg"
import fas00 from "../../images/fas00.jpg"
import Link from "next/link";

export default function FireAlarm() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="mt-5 text-4xl font-bold text-gray-800 mb-4">
          Fire Alarm System
      </h1>
  
      <Image src={fas00} width={1300} height={900} className="rounded-lg shadow-lg" alt="productMain" />
<br />
      {/* PRODUCTS */}
      <h2 className="text-gray-800 my-5 text-4xl font-semibold">Products Range</h2>
      <div className="flex space-x-4">
        <div className="text-center">
            <Image src={fas01} width={200} height={200} className="rounded-lg shadow-lg" alt="smoke detector" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Smoke Detector</h3>
        </div>
        <div className="text-center">
            <Image src={fas02} width={200} height={200} className="rounded-lg shadow-lg" alt="manual call point" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Manual Call Point</h3>
        </div>
        <div className="text-center">
            <Image src={fas03} width={195} height={200} className="rounded-lg shadow-lg" alt="sounder" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Sounder with Flasher</h3>
        </div>
    </div>
    <Link href="/product" className="bg-blue-400 rounded-lg shadow-lg my-5 py-3 px-3 text-white text-lg hover:bg-blue-900 ">Earthing System</Link>
    </div>
  );
}