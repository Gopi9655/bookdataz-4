"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Database,
  Laptop2,
  Search,
  Server,
  Sparkles,
} from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import TechConstellation from "../../../components/technology/TechConstellation";

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

const technologyIcons = [Laptop2, Cloud, Server, Database, Braces];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

export default function TechnologyListPage() {
  const [query, setQuery] = useState("");

  const filteredTechnologies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return technologies;
    }

    return technologies.filter((technology) =>
      technology.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <main className="technology-page-premium min-h-screen overflow-hidden">
      <section className="technology-hero-dark relative isolate overflow-hidden py-20 lg:py-28">
        <div className="technology-hero-grid absolute inset-0 -z-20" />
        <div className="technology-hero-orb technology-hero-orb-one" />
        <div className="technology-hero-orb technology-hero-orb-two" />
        <div className="technology-hero-orb technology-hero-orb-three" />

        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            variants={stagger}
            initial={false}
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="technology-hero-kicker mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <Sparkles size={14} />
              Technology directory
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="technology-hero-title text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Explore the BookDataZ{" "}
              <span className="technology-title-highlight">
                Technology List
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="technology-hero-copy mt-6 max-w-xl text-base leading-8 md:text-lg"
            >
              Target accounts by the platforms they run. Search the full
              install-base directory and zero in on the technologies that matter
              to your campaigns.
            </motion.p>
          </motion.div>

          <TechConstellation
            count={technologies.length}
            label="Technologies tracked"
            icons={technologyIcons}
          />
        </Container>
      </section>

      <Section className="technology-list-section relative">
        <div className="technology-list-soft-bg absolute inset-0" />

        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
          >
            <p className="technology-list-kicker text-xs font-bold uppercase tracking-[0.24em]">
              Browse technologies
            </p>
            <h2 className="technology-list-title mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Search the complete technology list
            </h2>
          </motion.div>

          <div className="sticky top-4 z-20 mx-auto mb-10 max-w-3xl">
            <label className="relative block">
              <span className="sr-only">Search technologies</span>
              <Search
                size={20}
                className="technology-search-icon pointer-events-none absolute left-5 top-1/2 -translate-y-1/2"
              />
              <input
                type="search"
                placeholder="Search technologies..."
                className="technology-search-input w-full rounded-full py-4 pl-14 pr-28 text-base outline-none transition"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="technology-search-count absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-[0.14em]">
                {filteredTechnologies.length} results
              </span>
            </label>
          </div>

          {filteredTechnologies.length > 0 ? (
            <motion.div
              variants={stagger}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.02 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {filteredTechnologies.map((technology, index) => {
                const Icon = technologyIcons[index % technologyIcons.length];

                return (
                  <motion.article
                    key={technology}
                    variants={fadeUp}
                    className="technology-list-card group relative flex min-h-28 items-center gap-5 overflow-hidden rounded-3xl p-6"
                  >
                    <span
                      className="technology-list-card-accent absolute inset-y-0 left-0 w-1"
                      aria-hidden="true"
                    />
                    <div className="technology-list-card-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors duration-300">
                      <Icon size={21} />
                    </div>
                    <h3 className="technology-list-card-title min-w-0 text-base font-semibold leading-6 md:text-lg">
                      {technology}
                    </h3>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="technology-empty-state rounded-3xl p-8 text-center">
              <p className="font-semibold">No technologies found.</p>
              <p className="mt-2 text-sm">
                Try a different technology name.
              </p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}