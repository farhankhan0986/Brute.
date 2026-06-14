import { articles } from "./articles";

export const ISSUES = [
  {
    number: "07",
    issueNumber: 7,
    theme: "Brutalism & Beyond",
    date: "June 2024",
    slug: "issue-07",
    accent: true,
    description: "An exploration of raw design systems, exposed layouts, high-contrast typography, and the rejection of polite, risk-averse minimalism in modern digital interfaces."
  },
  {
    number: "06",
    issueNumber: 6,
    theme: "Color + Strategy",
    date: "April 2024",
    slug: "issue-06",
    accent: false,
    description: "Deconstructing visual identity systems, semantic color maps, design hierarchy rules, and how massive organizations align multi-product platforms under a single voice."
  },
  {
    number: "05",
    issueNumber: 5,
    theme: "The Minimalism Debate",
    date: "February 2024",
    slug: "issue-05",
    accent: false,
    description: "Investigating the boundaries and limitations of reductionist design philosophy, standard patterns, and why high-end digital brands are moving towards raw visual character."
  },
  {
    number: "04",
    issueNumber: 4,
    theme: "Systems Thinking",
    date: "November 2023",
    slug: "issue-04",
    accent: false,
    description: "Breaking down complex UI grids, baseline vertical alignment systems, modular components, and building structural frameworks that survive the friction of production."
  },
  {
    number: "03",
    issueNumber: 3,
    theme: "Typography Issue",
    date: "September 2023",
    slug: "issue-03",
    accent: false,
    description: "Analyzing the visual voice of letterforms, the strategy behind geometric grotesques, text measure rules, and how typography defines brand positioning before any copy is read."
  },
  {
    number: "02",
    issueNumber: 2,
    theme: "Brand Building",
    date: "June 2023",
    slug: "issue-02",
    accent: false,
    description: "Studying the reconstruction of modern B2B visual identities, transition alignments, core positioning strategies, and why long-term brand equity beats short-term conversion gains."
  }
];

/**
 * Returns issue details along with dynamic article count and list of articles.
 */
export function getIssueBySlug(slug) {
  const issue = ISSUES.find((i) => i.slug === slug);
  if (!issue) return null;

  const issueArticles = articles.filter((a) => a.issueNumber === issue.issueNumber);
  return {
    ...issue,
    articlesCount: issueArticles.length,
    articles: issueArticles
  };
}

/**
 * Returns all issues with dynamic articles counts calculated.
 */
export function getIssuesWithStats() {
  return ISSUES.map((issue) => {
    const count = articles.filter((a) => a.issueNumber === issue.issueNumber).length;
    return {
      ...issue,
      articlesCount: count
    };
  });
}
