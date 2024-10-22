export default function About() {
  return (
    <div className="min-h-screen bg-blue-200" style={{ textAlign: 'justify' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">ABOUT US</h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-4" >
        ORBIX LIGHTING has been developing as a leading Supplier and Distributor of a wide range of Miscellaneous Electrical Systems as Low Voltage Electrical Equipment including Fire Safety & Security Solution, Lighting Systems, Industrial Electrical Products, Hazardous Area Equipment’s & Services Solutions throughout the Country. ORBIX LIGHTING provides safe and efficient solutions to best meet customer’s needs and guarantee the protection and safety of people and the environment. ORBIX LIGHTING offers products that comply with the main international standards. Large variety of products and services can fulfill requirements of our customers. Skilled team remains ready to suit customer’s unconventional needs through customization in products and services. A broad, future-oriented portfolio of custom-made concepts and innovative systems make ORBIX LIGHTING one of the leading Supplier.
        </p>

        {/* Detailed Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            MISSION
          </h2>
          <p className="text-lg text-gray-700 mb-4" >
          To provide “Reliable Solution” with an edge of technology offerings to find the most effective and affordable fit that help our customers, meet their needs of having a high performing, reliable, manageable and cost-effective network.
          </p>
          <p className="text-lg text-gray-700 mb-4" >
            Our values are centered around integrity, customer satisfaction, and
            continuous improvement. We believe in building long-lasting
            relationships with our clients and delivering solutions that exceed
            expectations.
          </p>
        </div>

      </div>
    </div>
  );
}
