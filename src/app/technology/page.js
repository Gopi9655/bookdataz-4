"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaCloud, FaRobot, FaDatabase, FaShieldAlt } from "react-icons/fa";

export default function TechnologyListPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. HERO SECTION */}
      

      {/* 2. OVERVIEW / WHAT'S IN OUR TECH LIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          What’s Included in Our Technology List?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-sm md:text-base leading-relaxed"
        >
          We’ve curated a comprehensive list of leading technology solutions 
          that drive digital transformation. Each entry provides key information 
          such as vendor details, core functionality, pricing tiers, and user 
          ratings—so you can easily compare and select the best fit for your 
          business needs.
        </motion.p>
      </section>

      {/* 3. TECH CATEGORIES GRID */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            Key Technology Categories
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Artificial Intelligence", icon: <FaRobot /> },
              { name: "Cloud Computing", icon: <FaCloud /> },
              { name: "Database Solutions", icon: <FaDatabase /> },
              { name: "Security & Compliance", icon: <FaShieldAlt /> },
              { name: "Hardware & IoT", icon: <FaMicrochip /> },
              { name: "Automation Tools", icon: <FaRobot /> },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow"
              >
                <div className="text-customBlue text-3xl">{tech.icon}</div>
                <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* technology lists */}

    <section className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Our Segmented Technology List Includes:</h1>
        </div>
        
        <p className="t mt-10 text-lg text-gray-400 px-32 pb-6 ">
          Our primary intent is to deliver the most authentic Technology List that is valid and well-researched. The data sources include trade exhibitions, B2B directories, yellow pages, business magazines, surveys, government records, annual reports, conferences, events, to name a few. The gathered records are then verified and validated by our data experts to eliminate inaccuracies.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">Aderant</li>
            <li className="mb-2">Adobe</li>
            <li className="mb-2">Akamai IP Application</li>
            <li className="mb-2">Alloy Navigator</li>
            <li className="mb-2">Alterian</li>
            <li className="mb-2">Amazon Web Services</li>
            <li className="mb-2">Amcom Technology</li>
            <li className="mb-2">Aspect</li>
            <li className="mb-2">Attunity Technology</li>
            <li className="mb-2">AutoDesk</li>
            <li className="mb-2">Avaya</li>
            <li className="mb-2">Backbase</li>
            <li className="mb-2">Big Data</li>
            <li className="mb-2">Blue Coat Customer</li>
            <li className="mb-2">BMC Remedy Customer</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">eRacks Technology</li>
            <li className="mb-2">Esker Technology</li>
            <li className="mb-2">eValid Technology</li>
            <li className="mb-2">Everbridge Technology</li>
            <li className="mb-2">eVSM Technology</li>
            <li className="mb-2">ExpertPDF Technology</li>
            <li className="mb-2">ExtendSim Technology</li>
            <li className="mb-2">Extensions Software</li>
            <li className="mb-2">Facility Wizard Software</li>
            <li className="mb-2">FileNet</li>
            <li className="mb-2">Flex PDE</li>
            <li className="mb-2">FME Server</li>
            <li className="mb-2">Formdocs Technology</li>
            <li className="mb-2">Garmin Technology</li>
            <li className="mb-2">Gelco Technology</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">Juniper Customer</li>
            <li className="mb-2">Lansa</li>
            <li className="mb-2">Lawson</li>
            <li className="mb-2">Lawson Software</li>
            <li className="mb-2">Linux</li>
            <li className="mb-2">Liveops</li>
            <li className="mb-2">Magento</li>
            <li className="mb-2">ManageEngine</li>
            <li className="mb-2">Marketo Customer</li>
            <li className="mb-2">Maximizer</li>
            <li className="mb-2">MegaMeeting</li>
            <li className="mb-2">Microsoft Dynamics</li>
            <li className="mb-2">Microsoft Dynamics AX</li>
            <li className="mb-2">Microsoft SharePoint</li>
            <li className="mb-2">MS Dynamics</li>
          </ul>
        </div>

      </main>
    </section>

    {/*technology section 2  */}

     <section className="bg-gray-100 min-h-screen">
      {/* Header */}
     

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">Brocade Customer</li>
            <li className="mb-2">CDC Software</li>
            <li className="mb-2">Chordiant</li>
            <li className="mb-2">CinCom</li>
            <li className="mb-2">Cisco</li>
            <li className="mb-2">Cisco Network</li>
            <li className="mb-2">Citrix</li>
            <li className="mb-2">Clarabridge</li>
            <li className="mb-2">ClickSoftware</li>
            <li className="mb-2">Comverse Network</li>
            <li className="mb-2">Consona</li>
            <li className="mb-2">Convio</li>
            <li className="mb-2">Crystal Reports</li>
            <li className="mb-2">Cubiq Technology</li>
            <li className="mb-2">DataCert Technology</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">DataCore Customer</li>
            <li className="mb-2">Datatel</li>
            <li className="mb-2">Desire2Learn</li>
            <li className="mb-2">Docudesk Technology</li>
            <li className="mb-2">dSPACE Technology</li>
            <li className="mb-2">EasyLobby Technology</li>
            <li className="mb-2">EBSuite</li>
            <li className="mb-2">eClinicalWorks Technology</li>
            <li className="mb-2">eGain Software</li>
            <li className="mb-2">EHS Technology</li>
            <li className="mb-2">Elementool</li>
            <li className="mb-2">Embedded Systems</li>
            <li className="mb-2">EMC Customer</li>
            <li className="mb-2">EMK3 Technology</li>
            <li className="mb-2">Empirisoft Technology</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">EnterpriseWizard</li>
            <li className="mb-2">EpicCare EMR</li>
            <li className="mb-2">Epicor Customer</li>
            <li className="mb-2">EPM Live Technology</li>
            <li className="mb-2">GeoCue LIDAR</li>
            <li className="mb-2">GeoTrust QuickSSL</li>
            <li className="mb-2">Gliffy Technology</li>
            <li className="mb-2">GoldenGate Technology</li>
            <li className="mb-2">Gumbo Technology</li>
            <li className="mb-2">GWOS Technology</li>
            <li className="mb-2">Hadoop</li>
            <li className="mb-2">Hadoop User</li>
            <li className="mb-2">Halogen</li>
            <li className="mb-2">Hardcat</li>
            <li className="mb-2">HelpSTAR</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">Heroix Network</li>
            <li className="mb-2">Hosted Survey Technology</li>
            <li className="mb-2">Hostway Technology</li>
            <li className="mb-2">HP Network</li>
            <li className="mb-2">I-net Technology</li>
            <li className="mb-2">IBM AS400 & iSeries</li>
            <li className="mb-2">IBM DBMS</li>
            <li className="mb-2">IBM Lotus Notes</li>
            <li className="mb-2">IBM Mainframe</li>
            <li className="mb-2">IBM Tivoli ERP</li>
            <li className="mb-2">IBM WebSphere ERP</li>
            <li className="mb-2">iCentera</li>
            <li className="mb-2">iDashboards</li>
            <li className="mb-2">IFS Technology</li>
            <li className="mb-2">InfoVista Technology</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">IntelliTrack Technology</li>
            <li className="mb-2">IssueTrak</li>
            <li className="mb-2">Java</li>
            <li className="mb-2">JD Edwards User</li>
            <li className="mb-2">Jive software</li>
            <li className="mb-2">QLogic Customer</li>
            <li className="mb-2">Quantum Customer</li>
            <li className="mb-2">Quest Software Customer</li>
            <li className="mb-2">QuickBooks</li>
            <li className="mb-2">Sage</li>
            <li className="mb-2">Salesforce</li>
            <li className="mb-2">SAP</li>
            <li className="mb-2">SAP Business One</li>
            <li className="mb-2">SAP ERP</li>
            <li className="mb-2">SAP ERP Customers</li>
          </ul>

          <ul className="bg-white p-6 rounded-lg shadow-md list-disc list-inside">
            <li className="mb-2">Siebel</li>
            <li className="mb-2">Stratasoft</li>
            <li className="mb-2">Sugar</li>
            <li className="mb-2">Sybase DBMS</li>
            <li className="mb-2">Tableau</li>
            <li className="mb-2">Talisma</li>
            <li className="mb-2">TeaLeaf</li>
            <li className="mb-2">TechExcel</li>
            <li className="mb-2">UNIX</li>
            <li className="mb-2">Veeam Customer</li>
            <li className="mb-2">Veeam ONE Customer</li>
            <li className="mb-2">VMware vSphere</li>
            <li className="mb-2">WebEx Customer</li>
          </ul>
        </div>

    
      </main>
    </section>

      {/* 5. USE CASES / CLIENT STORIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-6"
        >
          Real-World Success Stories
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2 text-base">
              AI & Automation in Manufacturing
            </h4>
            <p className="text-gray-700 text-sm md:text-base">
              A global automotive company integrated our recommended AI tools, 
              reducing production errors by 30% and speeding up assembly lines.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2 text-base">
              Cloud for Retail Analytics
            </h4>
            <p className="text-gray-700 text-sm md:text-base">
              An online retailer migrated to a serverless cloud platform, 
              boosting site reliability and cutting costs by 25%.
            </p>
          </div>
        </motion.div>
      </section>


      {/* tech stack */}

      

      {/* 6. HOW TO GET STARTED / NEXT STEPS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Ready to Transform Your Tech Stack?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-sm md:text-base leading-relaxed mb-6"
        >
          If you’re looking to modernize your operations or enhance 
          customer experiences, our Technology List is your roadmap. 
          Dive deeper into any solution above, or reach out to our 
          team for personalized recommendations.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-customBlue text-white font-semibold px-6 py-3 rounded-md hover:bg-customBlue/90 transition-colors"
        >
          Contact Us for a Custom Consultation
        </motion.button>
      </section>
    </main>
  );
}
