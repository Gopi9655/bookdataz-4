import "./globals.css";
import Navbar from "../../components/Navbar";
import Chatbot from "../../components/Chatbot";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

export const metadata = {
  title: "Affordable, Reliable Databases for Your Business Growth | Bookdataz.com",
  description:
    "Discover high-quality databases tailored to your business needs. Bookdataz offers verified, up-to-date data solutions to help you target the right audience and scale your business. Contact us today for customized database packages!",
};

export default function RootLayout({ children }) {
  // Define your schema JSON-LD here
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BookDataz",
    "url": "https://bookdataz-fh398cv76-gopi9655s-projects.vercel.app/",
    "logo": "https://bookdataz-fh398cv76-gopi9655s-projects.vercel.app/logo-b.jpg",
    "description": "BookDataz provides comprehensive databases across diverse sectors worldwide. Access high-quality, reliable data solutions to empower your business growth and target key markets in the United States, Canada, Singapore, Western Europe and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6150, Poplar Ave, Suite 200",
      "addressLocality": "Memphis",
      "addressRegion": "TN",
      "postalCode": "38119",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+1-901-942-8334",
      "email": "sales@bookdataz.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bookdataz"
    ],
    "foundingDate": "2013",
    "areaServed": [
      "US",
      "CA",
      "SG",
      "Western Europe"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* ---  Schema Markup Added Here  --- */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        {/* ---  Existing Metadata  --- */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="antialiased text-black relative">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <PageHeader />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* ... (rest of your body content - Chatbot, Mail Icon) ... */}
      </body>
    </html>
  );
}