import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const errors = [];

const expectedIndustrySlugs = [
  "automotive-industry",
  "banking-and-finance",
  "construction-companies",
  "educational-industries",
  "food-and-beverages",
  "healthcare-industries",
  "manufacturing-industries",
  "oil-and-gas",
  "pharmaceuticals",
  "real-estate",
  "retail-industries",
  "travel-and-transport-industries",
];

async function loadDataModule(relativePath) {
  const source = await readFile(new URL(relativePath, root), "utf8");
  const encoded = Buffer.from(source).toString("base64");
  return import(`data:text/javascript;base64,${encoded}`);
}

function check(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

const [{ datacollections, mailinglinks, whatweoffer }, { CATEGORIES, mockData }] =
  await Promise.all([
    loadDataModule("src/resource/data.js"),
    loadDataModule("src/resource/mockdata.js"),
  ]);

check(Object.keys(mockData).length === 12, "mockData must have 12 industry records.");
check(mailinglinks.length === 12, "mailinglinks must have 12 records.");
check(datacollections.length === 5, "datacollections must have 5 records.");
check(whatweoffer.length === 3, "whatweoffer must have 3 records.");

const government = CATEGORIES.find(({ title }) => title === "Government");
check(government?.dataCount === "1,480,960", "Government count must remain 1,480,960.");

for (const category of CATEGORIES) {
  check(
    category.subCategories?.length === 10,
    `CATEGORIES entry "${category.title}" must have 10 subCategories.`,
  );
}

for (const slug of expectedIndustrySlugs) {
  check(Object.hasOwn(mockData, slug), `Known dynamic slug "${slug}" must exist.`);
}

if (errors.length > 0) {
  console.error("Content lock check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Content lock check passed.");
}
