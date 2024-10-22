import Image from "next/image";
import ear01 from "../images/ear01.jpg";
import ear02 from "../images/ear02.png"
import ear03 from "../images/ear03.jpg"
import ear00 from "../images/ear00.png"
import Link from "next/link";

export default function Product() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="mt-5 text-4xl font-bold text-gray-800 mb-4">
          EARTHING AND GROUNDING MATERIAL
      </h1>
  
      <Image src={ear00} width={600} height={500} className="rounded-lg shadow-lg" alt="productMain" />
<br />
      {/* PRODUCTS */}
      <h2 className="text-gray-800 my-5 text-4xl font-semibold">Products Range</h2>
      <div className="flex space-x-4">
        <div className="text-center">
            <Image src={ear01} width={170} height={100} className="rounded-lg shadow-lg" alt="clamp" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Clamp</h3>
        </div>
        <div className="text-center">
            <Image src={ear02} width={200} height={200} className="rounded-lg shadow-lg" alt="base" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Base</h3>
        </div>
        <div className="text-center">
            <Image src={ear03} width={200} height={200} className="rounded-lg shadow-lg" alt="earthing rod" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Earhting Rod</h3>
        </div>
    </div>
    <Link href="/product/fire_alarm" className="bg-blue-400 rounded-lg shadow-lg my-5 py-3 px-3 text-white text-lg hover:bg-blue-900 ">Fire Alarm System</Link>
    </div>
  );
}
