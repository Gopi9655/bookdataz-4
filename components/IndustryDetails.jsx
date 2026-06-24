import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Database,
  Filter,
  Globe2,
  Layers3,
  MailCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import { CATEGORIES } from "@/resource/mockdata";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

const normalizeTerms = (value) =>
  String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\b(industries|industry|companies|company|sector|sectors)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((term) => (term.length > 4 && term.endsWith("s") ? term.slice(0, -1) : term));

const findCategoryProfile = (industryName) => {
  const industryTerms = normalizeTerms(industryName);

  return CATEGORIES.find((category) => {
    const categoryTerms = normalizeTerms(category.title);

    if (categoryTerms.length === 0 || industryTerms.length === 0) {
      return false;
    }

    return categoryTerms.every((term) => industryTerms.includes(term));
  });
};

const getPageTitle = (industryName) => {
  if (/\bindustr(?:y|ies)\b/i.test(industryName)) {
    return `${industryName} Data`;
  }

  return `${industryName} Mailing List`;
};

const valueCards = [
  {
    title: "Targeted outreach",
    copy: "Build outreach around a focused industry audience instead of broad, generic prospecting.",
    icon: Target,
  },
  {
    title: "Business segmentation",
    copy: "Organize campaigns around relevant categories, keywords, and audience context.",
    icon: Filter,
  },
  {
    title: "Verified data quality",
    copy: "Use maintained business records designed for professional sales and marketing workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Campaign-ready records",
    copy: "Prepare sales, lead generation, and research activity with structured list inputs.",
    icon: MailCheck,
  },
];

const useCases = [
  {
    title: "Sales prospecting",
    copy: "Identify relevant organizations for outbound sales workflows.",
    icon: Search,
  },
  {
    title: "B2B email outreach",
    copy: "Plan email campaigns around the selected industry and its keyword focus areas.",
    icon: MailCheck,
  },
  {
    title: "Market research",
    copy: "Review industry segments before campaign planning or market entry work.",
    icon: ClipboardList,
  },
  {
    title: "Partner discovery",
    copy: "Find businesses that fit supplier, reseller, or channel partner searches.",
    icon: Building2,
  },
  {
    title: "Campaign segmentation",
    copy: "Group outreach by industry themes, categories, and audience relevance.",
    icon: Layers3,
  },
];

const qualityItems = [
  {
    title: "Structured lists",
    copy: "Data is organized so teams can move from selection to campaign planning quickly.",
    icon: ClipboardList,
  },
  {
    title: "Maintained records",
    copy: "Built for teams that need business data they can keep working with over time.",
    icon: ShieldCheck,
  },
  {
    title: "Relevant B2B categories",
    copy: "Industry context helps teams focus on the companies and segments that matter.",
    icon: Layers3,
  },
  {
    title: "Region-ready outreach",
    copy: "Useful for territory planning, campaign routing, and market research workflows.",
    icon: Globe2,
  },
];

const IndustryDetails = ({ industryData }) => {
  const industryName = industryData.name;
  const pageTitle = getPageTitle(industryName);
  const keywords = Array.isArray(industryData.keywords)
    ? industryData.keywords.filter(Boolean)
    : [];
  const categoryProfile = findCategoryProfile(industryName);
  const subCategories = categoryProfile?.subCategories ?? [];
  const visibleSegments = subCategories.length > 0 ? subCategories : keywords;

  const profileRows = [
    categoryProfile?.dataCount
      ? {
          label: `${categoryProfile.title} records`,
          value: categoryProfile.dataCount,
          icon: Database,
        }
      : null,
    {
      label: "Targeted B2B outreach",
      value: "Audience focused",
      icon: Target,
    },
    {
      label: "Verified business records",
      value: "Maintained data",
      icon: ShieldCheck,
    },
    {
      label: "Structured category coverage",
      value: categoryProfile ? categoryProfile.title : "Industry aligned",
      icon: Layers3,
    },
  ].filter(Boolean);

  return (
    <div className="industry-page-premium">
      <section className="industry-hero-premium">
        <div className="industry-hero-gridline" aria-hidden="true" />
        <Container className="industry-hero-layout">
          <div className="industry-hero-copy">
            <div className="industry-hero-kicker">
              <Sparkles size={15} />
              Premium mailing list profile
            </div>

            <h1 className="industry-hero-title">{pageTitle}</h1>
            <p className="industry-hero-description">{industryData.description}</p>

            {keywords.length > 0 && (
              <div className="industry-hero-chips" aria-label={`${industryName} keyword focus areas`}>
                {keywords.map((keyword) => (
                  <span className="industry-chip industry-chip-dark" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            )}

            <div className="industry-hero-actions">
              <Button href="/contact" variant="accent" size="lg" className="gap-2 whitespace-nowrap">
                Request this list <ArrowRight size={18} />
              </Button>
              <Button
                href="/datacard"
                variant="outline"
                size="lg"
                className="industry-dark-button whitespace-nowrap"
              >
                Browse datacards
              </Button>
            </div>
          </div>

          <aside className="industry-hero-card" aria-label="Industry data profile">
            <span className="industry-card-accent" aria-hidden="true" />
            <div className="industry-hero-card-head">
              <div>
                <p>Industry data profile</p>
                <h2>{industryName}</h2>
              </div>
              <div className="industry-hero-card-icon">
                <Database size={24} />
              </div>
            </div>

            <div className="industry-profile-list">
              {profileRows.map(({ label, value, icon: Icon }) => (
                <div className="industry-profile-row" key={label}>
                  <span className="industry-profile-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <Section className="industry-value-strip">
        <div className="industry-section-heading">
          <p>Why teams use this list</p>
          <h2>Built for targeted B2B outreach</h2>
        </div>

        <div className="industry-value-grid">
          {valueCards.map(({ title, copy, icon: Icon }) => (
            <article className="industry-value-card" key={title}>
              <div className="industry-icon-tile">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="industry-segments-section">
        <div className="industry-split-heading">
          <div>
            <p>Available focus areas</p>
            <h2>Segments for {industryName} campaigns</h2>
          </div>
          <p>
            Use keyword and category context to shape audience selection, campaign planning,
            and market research.
          </p>
        </div>

        {keywords.length > 0 && (
          <div className="industry-segment-grid">
            {keywords.map((keyword) => (
              <article className="industry-segment-card" key={keyword}>
                <CheckCircle2 size={19} />
                <span>{keyword}</span>
              </article>
            ))}
          </div>
        )}

        {visibleSegments.length > keywords.length && (
          <div className="industry-related-panel">
            <p>Related category coverage from BookDataZ data</p>
            <div>
              {visibleSegments.map((segment) => (
                <span className="industry-chip" key={segment}>
                  {segment}
                </span>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section className="industry-use-section">
        <div className="industry-section-heading">
          <p>Common use cases</p>
          <h2>Practical ways to put this data to work</h2>
        </div>

        <div className="industry-use-grid">
          {useCases.map(({ title, copy, icon: Icon }) => (
            <article className="industry-use-card" key={title}>
              <Icon size={21} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="industry-quality-section">
        <div className="industry-quality-panel">
          <div className="industry-quality-copy">
            <p>List quality and process</p>
            <h2>Organized for sales, marketing, and research teams</h2>
            <span>
              BookDataZ keeps industry pages focused on usable business data for outreach
              planning. This page uses the selected industry description, keywords, and
              source-backed category details where available.
            </span>
          </div>

          <div className="industry-quality-grid">
            {qualityItems.map(({ title, copy, icon: Icon }) => (
              <article className="industry-quality-card" key={title}>
                <Icon size={20} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="industry-final-section">
        <div className="industry-cta-panel">
          <div className="industry-cta-gridline" aria-hidden="true" />
          <div className="industry-cta-copy">
            <p>BookDataZ industry data</p>
            <h2>Explore {industryName} data</h2>
            <span>
              Talk to BookDataZ about the right list, segment, or datacard for your
              campaign goals.
            </span>
          </div>

          <div className="industry-cta-actions">
            <Button href="/contact" variant="accent" size="lg" className="gap-2 whitespace-nowrap">
              Contact Us <ArrowRight size={18} />
            </Button>
            <Button
              href="/datacard"
              variant="outline"
              size="lg"
              className="industry-dark-button whitespace-nowrap"
            >
              Browse Datacards
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default IndustryDetails;
