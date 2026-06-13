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
    <main className="min-h-screen overflow-hidden bg-brandWarm-50 text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-200 py-20 lg:py-28">
        <div
          className="absolute inset-0 -z-20 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,43,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,43,74,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black 10%, transparent 92%)",
          }}
        />
        <div className="absolute left-[8%] top-12 -z-10 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute right-[5%] top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-400/12 blur-3xl" />

        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div
            variants={stagger}
            initial={false}
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700"
            >
              <Sparkles size={14} className="text-orange-500" />
              Technology directory
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Explore the BookDataZ{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Technology List
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Target accounts by the platforms they run. Search the full
              install-base directory and zero in on the technologies that matter
              to your campaigns.
            </motion.p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          >
            <div className="premium-card premium-card-light premium-card-hover relative overflow-hidden rounded-3xl p-6 text-slate-900 lg:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-300/25 blur-3xl" />
              <span className="absolute inset-x-0 top-0 h-1 premium-accent" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-6 border-b border-slate-200 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                    Technology list
                  </p>
                  <p className="mt-3 text-4xl font-bold tabular-nums tracking-tight text-slate-950 lg:text-5xl">
                    {technologies.length}
                  </p>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
                  <Server size={26} />
                </div>
              </div>
              <div className="relative mt-6 grid grid-cols-3 gap-3">
                {technologyIcons.slice(0, 3).map((Icon, index) => (
                  <div
                    key={index}
                    className="grid min-h-20 place-items-center rounded-2xl border border-blue-200/80 bg-blue-50/70 text-blue-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <Icon size={22} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Section className="relative bg-gradient-to-b from-brandWarm-100 to-brandWarm-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,125,209,0.07),transparent_36%)]" />
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
              Browse technologies
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              Search the complete technology list
            </h2>
          </motion.div>

          <div className="sticky top-4 z-20 mx-auto mb-10 max-w-3xl">
            <label className="relative block">
              <span className="sr-only">Search technologies</span>
              <Search
                size={20}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-blue-700"
              />
              <input
                type="search"
                placeholder="Search technologies..."
                className="w-full rounded-full border border-slate-200 bg-white py-4 pl-14 pr-28 text-base text-slate-950 shadow-lg shadow-slate-950/5 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
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
                    className="premium-card premium-card-light premium-card-hover group flex min-h-28 items-center gap-5 overflow-hidden rounded-3xl p-6"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-1 premium-accent-vertical"
                      aria-hidden="true"
                    />
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200/80 bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={21} />
                    </div>
                    <h3 className="min-w-0 text-base font-semibold leading-6 text-slate-900 md:text-lg">
                      {technology}
                    </h3>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="font-semibold text-slate-950">No technologies found.</p>
              <p className="mt-2 text-sm text-slate-500">
                Try a different technology name.
              </p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
