"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop2, BadgeCheck, Server, Cloud } from "lucide-react";

const technologies = [
  "Aderant", "Adobe", "Akamai IP Application", "Alloy Navigator", "Alterian",
  "Amazon Web Services", "Amcom Technology", "Aspect", "Attunity Technology",
  "AutoDesk", "Avaya", "Backbase", "Big Data", "Blue Coat Customer",
  "BMC Remedy Customer", "eRacks Technology", "Esker Technology",
  "eValid Technology", "Everbridge Technology", "eVSM Technology",
  "ExpertPDF Technology", "ExtendSim Technology", "Extensions Software",
  "Facility Wizard Software", "FileNet", "Flex PDE", "FME Server",
  "Formdocs Technology", "Garmin Technology", "Gelco Technology",
  "Juniper Customer", "Lansa", "Lawson", "Lawson Software", "Linux",
  "Liveops", "Magento", "ManageEngine", "Marketo Customer", "Maximizer",
  "MegaMeeting", "Microsoft Dynamics", "Microsoft Dynamics AX",
  "Microsoft SharePoint", "MS Dynamics", "Brocade Customer",
  "CDC Software", "Chordiant", "CinCom", "Cisco", "Cisco Network",
  "Citrix", "Clarabridge", "ClickSoftware", "Comverse Network", "Consona",
  "Convio", "Crystal Reports", "Cubiq Technology", "DataCert Technology",
  "DataCore Customer", "Datatel", "Desire2Learn", "Docudesk Technology",
  "dSPACE Technology", "EasyLobby Technology", "EBSuite",
  "eClinicalWorks Technology", "eGain Software", "EHS Technology",
  "Elementool", "Embedded Systems", "EMC Customer", "EMK3 Technology",
  "Empirisoft Technology", "EnterpriseWizard", "EpicCare EMR",
  "Epicor Customer", "EPM Live Technology", "GeoCue LIDAR",
  "GeoTrust QuickSSL", "Gliffy Technology", "GoldenGate Technology",
  "Gumbo Technology", "GWOS Technology", "Hadoop", "Hadoop User",
  "Halogen", "Hardcat", "HelpSTAR", "Heroix Network",
  "Hosted Survey Technology", "Hostway Technology", "HP Network",
  "I-net Technology", "IBM AS400 & iSeries", "IBM DBMS", "IBM Lotus Notes",
  "IBM Mainframe", "IBM Tivoli ERP", "IBM WebSphere ERP", "iCentera",
  "iDashboards", "IFS Technology", "InfoVista Technology",
  "IntelliTrack Technology", "IssueTrak", "Java", "JD Edwards User",
  "Jive software", "QLogic Customer", "Quantum Customer",
  "Quest Software Customer", "QuickBooks", "Sage", "Salesforce", "SAP",
  "SAP Business One", "SAP ERP", "SAP ERP Customers", "Siebel",
  "Stratasoft", "Sugar", "Sybase DBMS", "Tableau", "Talisma", "TeaLeaf",
  "TechExcel", "UNIX", "Veeam Customer", "Veeam ONE Customer",
  "VMware vSphere", "WebEx Customer"
];


export default function TechnologyListPage() {
  const icons = [Laptop2, Cloud, Server, BadgeCheck];

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Page Header (customBlue already used by you) */}
      

      {/* Tech Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-18">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-customBlue/10 rounded-xl">
                    <Icon className="text-customBlue w-6 h-6" />
                  </div>
                  <h3 className="text-gray-800 font-semibold text-lg">{tech}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {tech.includes("Customer") || tech.includes("Software") || tech.includes("Technology")
                    ? "Enterprise Application"
                    : "IT Service / Tool"}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}
