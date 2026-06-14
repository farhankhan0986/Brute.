/**
 * BRUTE. Magazine — Article seed data with full editorial body content.
 * TODO: Replace placeholder content with final editorial copy.
 */

export const articles = [
  /* ─── ISSUE 07 ─────────────────────────────────────────────── */
  {
    id: "1",
    title: "Why Brutalism Is the New Minimalism",
    slug: "brutalism-new-minimalism",
    category: "Opinion",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "8 min read",
    author: "Editorial Team",
    excerpt:
      "Minimalism told us to remove. Brutalism tells us to reveal. The difference is more than aesthetic — it is ideological. Here is why raw design is winning.",
    coverImage: "https://picsum.photos/seed/brut1/1200/800",
    images: [
      "https://picsum.photos/seed/brut1a/1600/900",
      "https://picsum.photos/seed/brut1b/900/1200",
    ],
    layoutVariant: "A",
    tags: ["Design Theory", "Aesthetics", "Culture"],
    featured: true,
    pullQuote: "Minimalism removes discomfort. Brutalism confronts it.",
    tableOfContents: [
      "The Problem With Perfect",
      "What Brutalism Actually Means",
      "Five Brands That Got It Right",
      "The Limits of Raw",
    ],
    body: [
      {
        type: "p",
        text: "For the better part of a decade, minimalism dominated the conversation. Clean lines, white space, the religion of reduction. Every brand, every interface, every product stripped itself down to the barest possible signal. And it worked — for a while. The problem with perfection, though, is that it becomes indistinguishable. When every brand whispers, no one can hear anything.",
      },
      {
        type: "h2",
        text: "The Problem With Perfect",
      },
      {
        type: "p",
        text: "Minimalism makes a promise it cannot always keep: that clarity emerges from subtraction. In practice, what often emerges is blandness. The logos all look the same — thin geometric sans-serifs, muted palettes, generous kerning. The apps all feel the same — light backgrounds, ghost buttons, invisible navigation. You could swap the brand marks on half the Fortune 500 and most users would never notice.",
      },
      {
        type: "p",
        text: "This is not a failure of craft. The craft is often excellent. It is a failure of courage. Minimalism became a risk-management strategy: if you remove everything distinctive, you also remove everything offensive. You produce design that nobody hates — and nobody remembers.",
      },
      {
        type: "h2",
        text: "What Brutalism Actually Means",
      },
      {
        type: "p",
        text: "Neo-brutalism in design borrows its name but not its literal philosophy from brutalist architecture. In building, Brutalism meant exposed concrete, structural honesty, form following function without apology. In graphic and digital design, the philosophy is similar but applied differently: expose the skeleton. Show the border. Let the grid be visible. Do not hide the fact that this is a constructed thing.",
      },
      {
        type: "p",
        text: "Critically, brutalism does not mean ugly. It means intentional about its ugliness — which is a different thing entirely. A neo-brutalist design knows exactly what it is doing when it puts a thick black border where a soft shadow would be expected. It is making an argument about authenticity, about directness, about the refusal to seduce when it can simply state.",
      },
      {
        type: "h2",
        text: "Five Brands That Got It Right",
      },
      {
        type: "p",
        text: "The brands executing this most effectively are not doing it by accident. They share a few traits: a clear voice, a product or idea they genuinely believe in, and a willingness to look weird in a landscape designed to look safe. They use high-contrast type because they want you to read it, not scan past it. They use hard edges because they are not trying to appear soft. They choose electric yellow or safety orange because those colours stop people, and they want to be stopped at.",
      },
      {
        type: "h2",
        text: "The Limits of Raw",
      },
      {
        type: "p",
        text: "None of this is an argument that brutalism is universally correct — it is not. There are contexts where warmth, softness, and approachability are exactly right: a children's healthcare platform, a mental wellness app, a service for elderly users. The point is not that raw is always better. The point is that raw is often braver, and in a market saturated with softness, brave is increasingly rare — and increasingly valuable.",
      },
    ],
  },

  {
    id: "2",
    title: "The Typography Systems Behind 5 Iconic Brands",
    slug: "typography-systems-iconic-brands",
    category: "Case Study",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "12 min read",
    author: "Type Desk",
    excerpt:
      "Type is not decoration. It is the brand's voice made visible. We broke down the typographic systems of five industry-defining brands to find out exactly how they think.",
    coverImage: "https://picsum.photos/seed/type1/1200/800",
    images: [
      "https://picsum.photos/seed/type1a/1600/900",
      "https://picsum.photos/seed/type1b/1200/800",
    ],
    layoutVariant: "B",
    tags: ["Typography", "Branding", "Case Study"],
    featured: true,
    pullQuote: "Every typeface decision is a political act.",
    tableOfContents: [
      "What Makes a Type System",
      "The Humanist: Mailchimp",
      "The Geometric: Spotify",
      "The Transitional: The Guardian",
      "The Display Rebel: Notion",
      "What They All Share",
    ],
    body: [
      {
        type: "p",
        text: "A typeface is not a decoration applied after the brand is decided. It is the brand's decision, rendered in letterform. The weight, the x-height, the axis of stress, the rhythm of spacing — all of these carry meaning before a single word is read. This is why the typography systems of great brands deserve to be studied the way you would study their positioning strategy or their product design. They are strategic, deliberate, and harder to copy than a logo.",
      },
      {
        type: "h2",
        text: "What Makes a Type System",
      },
      {
        type: "p",
        text: "A type system is not just a font choice. It is the relationship between typefaces across contexts, the hierarchy of sizes, the rules for when to be loud and when to be quiet. The best systems have a logic that can be handed to a junior designer and produce consistent results without constant supervision. The worst systems are collections of fonts that look vaguely similar, chosen because the creative director liked them that year.",
      },
      {
        type: "h2",
        text: "The Humanist: Mailchimp",
      },
      {
        type: "p",
        text: "Mailchimp's typographic system is built around approachability — humanist letterforms with slight irregularities that signal hand-made warmth in a heavily automated product. Their headline type is big and slightly imperfect; their body type is readable and neutral. The system communicates: we are a technology company that understands you are a human. This is not accidental. Every feature of the type system is solving for the fear a non-technical small business owner feels when confronted with marketing software.",
      },
      {
        type: "h2",
        text: "The Geometric: Spotify",
      },
      {
        type: "p",
        text: "Spotify's use of a circular-geometric sans-serif (Circular, designed by Lineto) is a statement about modernity and precision. Geometric typefaces feel designed — engineered — which works for a company whose product is essentially a music-recommendation algorithm. The circular 'o' and the low contrast between strokes signal tech credibility. Paired with their aggressive use of green on black and their dynamic layout system, it creates a brand that feels simultaneously smart and kinetic.",
      },
      {
        type: "h2",
        text: "What They All Share",
      },
      {
        type: "p",
        text: "Across all five systems, three things are consistent. First: they chose typefaces that could do heavy lifting — not just look nice at 16px, but hold up at 2rem headlines and 10px legal text. Second: they established clear hierarchy rules and actually followed them, which sounds obvious but most brands do not. Third: they treated type as an expression of personality, not as a neutral vehicle for information. The best type systems have a point of view. You can feel it before you consciously register what you are reading.",
      },
    ],
  },

  {
    id: "3",
    title: "Grid Theory for People Who Hate Rules",
    slug: "grid-theory-hate-rules",
    category: "Education",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "6 min read",
    author: "Studio Notes",
    excerpt:
      "The grid is not a cage. It is a launching pad. Understanding the rules is the only way to break them with intention. A fast crash course in layout fundamentals.",
    coverImage: "https://picsum.photos/seed/grid1/1200/800",
    images: [
      "https://picsum.photos/seed/grid1a/1600/900",
    ],
    layoutVariant: "C",
    tags: ["Layout", "Education", "Fundamentals"],
    featured: true,
    pullQuote: "You cannot break the grid until you understand why it exists.",
    tableOfContents: [
      "The Column Grid",
      "Baseline Grids",
      "The Modular Grid",
      "When to Destroy It",
    ],
    body: [
      {
        type: "p",
        text: "Every designer who has ever produced something deliberately misaligned, overlapping, or deliberately off-axis has done so using a grid as their reference point — even when the point was to deviate from it. You cannot break a rule you do not understand. You can only make something that looks accidental. Intentional chaos is a product of deeply internalized order.",
      },
      {
        type: "h2",
        text: "The Column Grid",
      },
      {
        type: "p",
        text: "The column grid is the default tool for most editorial and web layout. Its power comes from repetition: by dividing a page or screen into equal vertical strips (with gutters between), you create consistent anchor points for placing content. A 12-column grid is industry-standard for web layouts because 12 divides evenly by 2, 3, 4, and 6 — giving you enormous compositional flexibility from a single system. The grid does not tell you where to put things. It tells you where the options are.",
      },
      {
        type: "h2",
        text: "Baseline Grids",
      },
      {
        type: "p",
        text: "The baseline grid is the horizontal equivalent — a repeating horizontal increment (usually equal to your base line-height) that keeps text in vertical rhythm across columns and across the page. When two columns of text sit side-by-side and their lines do not align, the page feels unsettled in a way most readers cannot name but everyone feels. Baseline grids solve this silently. They are invisible infrastructure, and like all good infrastructure, you only notice them when they are missing.",
      },
      {
        type: "h2",
        text: "The Modular Grid",
      },
      {
        type: "p",
        text: "The modular grid combines columns and rows into a matrix of cells. It is most useful for complex layouts with many elements of similar weight — think a magazine feature page, a dashboard interface, or a packaging system where multiple products need to maintain visual consistency. The cells provide a unit of proportion, not a rule about where elements sit. Karl Gerstner's grid system for Capital magazine in the 1960s remains the canonical example: a six-column grid divided by six rows, creating a system flexible enough to support over 50 different layout arrangements from a single underlying structure.",
      },
      {
        type: "h2",
        text: "When to Destroy It",
      },
      {
        type: "p",
        text: "The grid should be broken when the content demands it. A full-bleed image that ignores column boundaries creates visual impact precisely because it violates an expectation the reader has unconsciously absorbed from everything else on the page. An element positioned at -2rem negative margin creates tension by acknowledging the boundary it is crossing. These techniques only work if the rest of the layout is disciplined. Without discipline, violation has no meaning. This is why neo-brutalist design — with its deliberate misalignment and intentional overflow — requires a stronger understanding of grid theory, not a weaker one.",
      },
    ],
  },

  {
    id: "4",
    title: "Rebuilding a B2B Brand From Scratch: A Full Breakdown",
    slug: "rebuilding-b2b-brand-breakdown",
    category: "Case Study",
    issue: "Issue 06",
    issueNumber: 6,
    readingTime: "15 min read",
    author: "Strategy Desk",
    excerpt:
      "A SaaS company with no visual identity, no brand voice, and 18 months to an IPO. This is the full, unfiltered story of the rebrand — what worked, what did not, and what we would do differently.",
    coverImage: "https://picsum.photos/seed/b2b1/1200/800",
    images: [
      "https://picsum.photos/seed/b2b1a/1600/900",
      "https://picsum.photos/seed/b2b1b/900/600",
    ],
    layoutVariant: "A",
    tags: ["Branding", "Strategy", "B2B", "Case Study"],
    featured: false,
    pullQuote: "The brand was invisible because the founders were afraid of being wrong.",
    tableOfContents: [
      "The Brief",
      "The Audit — What We Found",
      "The Strategy",
      "The Identity System",
      "The Rollout",
      "18 Months Later",
    ],
    body: [
      {
        type: "p",
        text: "The company came to us with a problem they described as a 'visual refresh.' After two calls, it became clear they needed something closer to a complete reconstruction. Their current brand was a collection of decisions made by individual contributors over six years — different logo versions in different presentations, three conflicting color palettes, no type system, and a tone of voice document that nobody had read since the day it was written.",
      },
      {
        type: "h2",
        text: "The Brief",
      },
      {
        type: "p",
        text: "The practical constraint was an 18-month runway to an IPO. The brand needed to communicate seriousness to institutional investors while remaining compelling to the mid-market operations teams who actually used the product. These two audiences have almost opposite taste. Institutional investors want signals of stability, longevity, and credibility. Operations professionals want signals of modernity, ease, and efficiency. The brief was to thread that needle without being so neutral that it communicated nothing at all.",
      },
      {
        type: "h2",
        text: "The Audit — What We Found",
      },
      {
        type: "p",
        text: "Three things emerged from the audit that shaped everything that came after. First: the product was genuinely good, but the company talked about it in the language of features rather than outcomes. Every competitor did the same. Second: the founding team had a point of view — a strong one — but they had been told by their board to 'play it safe' on brand, which had resulted in a perfectly corporate and perfectly forgettable identity. Third: their biggest deals consistently came through relationships, not marketing. The brand was not driving revenue — it was just something that existed alongside the revenue. This is common in B2B. It is also a missed opportunity.",
      },
      {
        type: "h2",
        text: "The Strategy",
      },
      {
        type: "p",
        text: "We positioned the company around a single idea: precision. Not in the generic sense that every B2B SaaS company claims — 'accurate data,' 'reliable reporting' — but in the specific sense of consequence. Their product existed to ensure that mistakes in operational workflows had nowhere to hide. Precision as accountability. This gave the brand a moral dimension that competitors lacked and that the founding team genuinely believed in. A brand built on something the founders believe is always stronger than one built on what the market research says they should believe.",
      },
      {
        type: "h2",
        text: "18 Months Later",
      },
      {
        type: "p",
        text: "The company went public. The brand was credited in several analyst notes as contributing to 'enterprise readiness' — the perception that this was a company with the maturity to serve large organizations. More concretely: inbound lead quality improved significantly in the 12 months post-rebrand, with qualified enterprise leads up 34% year over year. The sales team reported that they could now walk into a room and hand over a brand kit without apologizing for it. In B2B, that sentence is worth more than most awareness metrics.",
      },
    ],
  },

  {
    id: "5",
    title: "The Hidden Language of Color in Tech Products",
    slug: "hidden-language-color-tech",
    category: "Design Theory",
    issue: "Issue 06",
    issueNumber: 6,
    readingTime: "10 min read",
    author: "Product Desk",
    excerpt:
      "Blue means trust. Green means go. Red means danger. We know all this. But the real conversation is how tech companies use color to manipulate, guide, and occasionally deceive.",
    coverImage: "https://picsum.photos/seed/color1/1200/800",
    images: [
      "https://picsum.photos/seed/color1a/1600/900",
    ],
    layoutVariant: "B",
    tags: ["Color Theory", "UX", "Psychology"],
    featured: false,
    pullQuote: "Color is the cheapest persuasion tool in any designer's kit.",
    tableOfContents: [
      "The Psychology Is Real",
      "Big Tech's Color Playbook",
      "When Color Lies",
      "Designing With Intention",
    ],
    body: [
      {
        type: "p",
        text: "The relationship between color and behavior is one of the most studied — and most frequently misapplied — areas in design. The pop-science version you encounter in marketing decks is mostly wrong: color associations are heavily cultural, contextual, and individual. Blue does not universally mean trust; it means trust in Western, predominantly white, English-speaking contexts, in specific categories, for specific age groups. The nuance matters enormously when you are designing for a global product.",
      },
      {
        type: "h2",
        text: "The Psychology Is Real",
      },
      {
        type: "p",
        text: "What is consistently real, regardless of cultural context, is the physiological response to certain color properties. High-saturation colors increase arousal. Low-luminance colors signal seriousness. High contrast commands attention. These are not cultural associations — they are perceptual facts rooted in how the visual system processes light. Smart product designers distinguish between the two: they are skeptical of cultural color folklore and respectful of perceptual color science.",
      },
      {
        type: "h2",
        text: "Big Tech's Color Playbook",
      },
      {
        type: "p",
        text: "Most major tech companies follow a similar color system, even if they would not describe it this way. A primary brand color (almost always blue, green, or purple) for interactive elements and positive confirmations. Red for errors and destructive actions. Gray for everything neutral. This system has become so standard that deviating from it carries a real UX cost — users bring expectations from every other product they use. When your primary action button is yellow instead of blue, some percentage of users will hesitate, even briefly. The system makes sense when you understand it, but it also imposes a sameness across products that makes differentiation through color genuinely difficult.",
      },
      {
        type: "h2",
        text: "Designing With Intention",
      },
      {
        type: "p",
        text: "The most sophisticated product color systems we have encountered do three things consistently. They define color semantically — not 'our blue' but 'our interactive color,' which happens to be blue. They build enough flexibility that the system can evolve without breaking. And they account for accessibility from the beginning rather than retrofitting contrast ratios onto a palette chosen for aesthetics. WCAG AA compliance (4.5:1 contrast ratio for normal text) should not be an afterthought. It should be a constraint that shapes the palette. Constraints, applied early, make systems stronger.",
      },
    ],
  },

  {
    id: "6",
    title: "Motion Design Principles That Actually Survive Client Review",
    slug: "motion-design-principles-client-review",
    category: "How-To",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "9 min read",
    author: "Motion Desk",
    excerpt:
      "Motion design should feel inevitable — like the interface could not possibly move any other way. Here are the seven principles we use to build motion that clients approve and users feel.",
    coverImage: "https://picsum.photos/seed/motion1/1200/800",
    images: [
      "https://picsum.photos/seed/motion1a/1600/900",
      "https://picsum.photos/seed/motion1b/800/600",
    ],
    layoutVariant: "C",
    tags: ["Motion", "Animation", "UX", "How-To"],
    featured: false,
    pullQuote: "If the animation draws attention to itself, it has already failed.",
    tableOfContents: [
      "Principle 01: Purpose Over Polish",
      "Principle 02: Duration as Tone",
      "Principle 03: Easing is Everything",
      "Principle 04: Hierarchy in Motion",
      "Principle 05: The Off-State",
      "Principle 06: System Thinking",
      "Principle 07: Survives the Mute",
    ],
    body: [
      {
        type: "p",
        text: "The most common mistake in motion design is treating animation as a reward for the user's attention. 'We have their focus, so let us do something interesting with it.' This instinct produces interfaces that feel performative — motion that the designer enjoys and the user endures. Good motion design is the opposite: it earns the user's attention by doing something useful with it, and then gets out of the way.",
      },
      {
        type: "h2",
        text: "Principle 01: Purpose Over Polish",
      },
      {
        type: "p",
        text: "Every animation in a product should answer one question before it is designed: what does this help the user understand? Transitions communicate spatial relationships. Loading states communicate system status. Micro-interactions confirm intent. If an animation cannot answer that question clearly, it should not exist, regardless of how beautiful it is. The test is simple: remove the animation and observe what the user loses. If the answer is 'nothing,' the animation is decoration.",
      },
      {
        type: "h2",
        text: "Principle 02: Duration as Tone",
      },
      {
        type: "p",
        text: "Duration is the single most opinionated thing about any animation. It communicates personality more directly than almost any other design variable. Short, snappy transitions (100–200ms) feel precise and technical — right for productivity tools, dashboards, B2B interfaces. Longer, more deliberate transitions (300–500ms) feel considered and premium — right for consumer apps, luxury brands, storytelling interfaces. The mistake is applying the same duration to everything. Duration should vary with the weight and importance of what is being animated.",
      },
      {
        type: "h2",
        text: "Principle 03: Easing is Everything",
      },
      {
        type: "p",
        text: "Easing curves are where most motion systems fall apart. Linear easing — where an element moves at constant velocity — almost never feels natural, because nothing in the physical world moves at constant velocity. Ease-in-out (slow start, fast middle, slow end) is the default natural motion. But the specific shape of the curve defines whether the motion feels mechanical or organic, playful or serious. Custom cubic-bezier curves, defined by your brand's personality rather than borrowed from a library default, are one of the highest-leverage investments in a motion system.",
      },
      {
        type: "h2",
        text: "Principle 07: Survives the Mute",
      },
      {
        type: "p",
        text: "This is our internal test for any motion-heavy interface: does it work if you cannot see the animation? Users with vestibular disorders, users with prefers-reduced-motion set in their OS, users on low-power devices where animations are throttled — all of these people should encounter an interface that still communicates clearly. Motion should enhance, not enable. If the only way the user understands a state change is through animation, the interface has a structural problem that animation is papering over.",
      },
    ],
  },

  {
    id: "7",
    title: "When Less Fails: The Limits of Minimalism",
    slug: "when-less-fails-limits-minimalism",
    category: "Opinion",
    issue: "Issue 05",
    issueNumber: 5,
    readingTime: "7 min read",
    author: "Editorial Team",
    excerpt:
      "Minimalism promised to cut through the noise. Instead, it became the noise. Every brand looks the same, every interface feels the same, and somehow we are all more confused than ever.",
    coverImage: "https://picsum.photos/seed/less1/1200/800",
    images: [
      "https://picsum.photos/seed/less1a/1600/900",
    ],
    layoutVariant: "A",
    tags: ["Opinion", "Design Culture", "Minimalism"],
    featured: false,
    pullQuote: "When everything whispers, no one can hear anything.",
    tableOfContents: [
      "The Great Homogenization",
      "Where Minimalism Works",
      "Where It Catastrophically Fails",
      "What Comes Next",
    ],
    body: [
      {
        type: "p",
        text: "At some point in the early 2010s, minimalism stopped being a design philosophy and became a compliance exercise. Brands adopted it not because they had internalized its principles but because their competitors were doing it and their agencies were recommending it and their investors expected it to look like every other startup in their portfolio. The result is a decade of design that looks extremely considered and communicates almost nothing.",
      },
      {
        type: "h2",
        text: "The Great Homogenization",
      },
      {
        type: "p",
        text: "The evidence is visible in any airport, any phone screen, any brand-identity portfolio from the past eight years. Logos condensed into single-weight geometric marks. Wordmarks set in light grotesques. Color palettes of precisely three tones: a muted primary, off-white, and charcoal. The irony is total: a philosophy designed to help products stand out has produced the most homogenous visual landscape in the history of commercial design. When everyone is whispering, the visual equivalent of a shout is simply speaking at normal volume.",
      },
      {
        type: "h2",
        text: "Where Minimalism Works",
      },
      {
        type: "p",
        text: "Minimalism is not wrong. It is contextually wrong, which is a different problem. In contexts where the content is complex and the interface is merely a frame — medical software, data visualization, professional productivity tools — minimalist UI reduces cognitive load in genuinely useful ways. In contexts where the brand equity is enormous and the product is widely known — Apple remains the obvious example — minimalism reads as confidence rather than emptiness. The brand can afford to say less because it has decades of associations doing the work.",
      },
      {
        type: "h2",
        text: "What Comes Next",
      },
      {
        type: "p",
        text: "The reaction is already underway. Neo-brutalism, maximalism, new sincerity — the labels vary but the impulse is consistent: an appetite for design that takes up space, has a point of view, and is willing to be disliked by some people in order to be loved by others. The brands moving in this direction are not abandoning craft — they are redirecting it. Instead of crafting the perfect absence, they are crafting the perfect presence. The tools are the same. The courage required is different.",
      },
    ],
  },

  {
    id: "8",
    title: "A Deep Dive Into Space Grotesk — The Font Taking Over",
    slug: "space-grotesk-deep-dive",
    category: "Typography",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "5 min read",
    author: "Type Desk",
    excerpt:
      "Space Grotesk is everywhere. From tech startups to editorial publications, this geometric sans-serif has become the defining typeface of a generation of digital design. Here is why — and whether it will last.",
    coverImage: "https://picsum.photos/seed/sg1/1200/800",
    images: [
      "https://picsum.photos/seed/sg1a/1600/900",
    ],
    layoutVariant: "B",
    tags: ["Typography", "Fonts", "Analysis"],
    featured: false,
    pullQuote: "It has personality without being loud. That is the hardest thing to design.",
    tableOfContents: [
      "The Origin Story",
      "What Makes It Work",
      "Where It Fails",
      "The Verdict",
    ],
    body: [
      {
        type: "p",
        text: "Space Grotesk was designed by Florian Karsten and released through the Google Fonts library, which is both the source of its ubiquity and the primary argument against using it. When a typeface is free and excellent, every designer in the world has access to it, and they use it. But before we arrive at the saturation problem, we should understand what made it worth saturating the internet with in the first place.",
      },
      {
        type: "h2",
        text: "What Makes It Work",
      },
      {
        type: "p",
        text: "Space Grotesk occupies an unusual position in the type spectrum: it is a geometric grotesque that has been deliberately humanized. The 'o' is not a perfect circle. The 'a' has a double-story form. The terminals are not mechanically squared but slightly curved in ways that feel drawn rather than constructed. These decisions give the typeface warmth at text sizes while preserving the geometric credibility that makes it feel modern and technical at display sizes. It works across a remarkable range of contexts — which is precisely why it is everywhere.",
      },
      {
        type: "h2",
        text: "Where It Fails",
      },
      {
        type: "p",
        text: "At very small sizes — below 12px on screen — the humanist details that make Space Grotesk charming become liabilities. The slightly irregular terminals create optical noise that more mechanical grotesques avoid. For interfaces with dense information — data tables, annotation layers, mobile applications with small text — a more neutral grotesque will usually outperform it. The second failure is branding: because Space Grotesk is so widely used, choosing it for a brand identity in 2024 is a signal that you did not look very hard. It is the typeface equivalent of using a stock photo.",
      },
      {
        type: "h2",
        text: "The Verdict",
      },
      {
        type: "p",
        text: "Use Space Grotesk for editorial content, marketing pages, and contexts where its personality adds value and its ubiquity is less visible. Avoid it for brand identity work where differentiation matters, and be careful with it in dense UI contexts. Most importantly: if you use it, use it with intention. Have a reason. The worst thing you can do with any typeface — particularly a popular one — is reach for it by default.",
      },
    ],
  },

  /* ─── ISSUE 07 — NEW ARTICLES ──────────────────────────────── */

  {
    id: "9",
    title: "The UX Case Against Dark Patterns — A Field Guide",
    slug: "ux-case-against-dark-patterns",
    category: "UX Ethics",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "11 min read",
    author: "Product Desk",
    excerpt:
      "Dark patterns are everywhere. Subscription traps, confirm-shaming, disguised ads, misdirection. They work in the short term and destroy brands in the long term. Here is how to spot them — and why companies still use them.",
    coverImage: "https://picsum.photos/seed/dark1/1200/800",
    images: [
      "https://picsum.photos/seed/dark1a/1600/900",
      "https://picsum.photos/seed/dark1b/900/600",
    ],
    layoutVariant: "A",
    tags: ["UX", "Ethics", "Product Design"],
    featured: false,
    pullQuote: "A pattern that works by confusing the user is not a design success — it is a design failure with good short-term metrics.",
    tableOfContents: [
      "What a Dark Pattern Actually Is",
      "The Six Most Common Types",
      "Why Companies Use Them",
      "The Long-Term Cost",
      "How to Design Without Them",
    ],
    body: [
      {
        type: "p",
        text: "The term 'dark pattern' was coined by UX designer Harry Brignull in 2010 to describe interface design choices that deliberately mislead users into taking actions they did not intend. In the fourteen years since, the concept has gone from niche UX critique to mainstream regulatory concern — the EU's Digital Services Act and FTC guidelines in the US both now explicitly address deceptive interface design. Understanding dark patterns is no longer optional for product designers. It is professional literacy.",
      },
      {
        type: "h2",
        text: "What a Dark Pattern Actually Is",
      },
      {
        type: "p",
        text: "The key word in any definition of dark patterns is 'intent.' Difficult or confusing interfaces are not automatically dark patterns — sometimes complexity is genuinely unavoidable. A dark pattern requires that the design choice systematically benefits the company at the expense of the user's actual intent. The test: if you removed the 'trick,' would users make the same choice? If the answer is no — if users would unsubscribe, decline, or choose differently — then the interface is doing work that the user did not ask for.",
      },
      {
        type: "h2",
        text: "The Six Most Common Types",
      },
      {
        type: "p",
        text: "Roach Motel: easy to enter, nearly impossible to exit. Subscription services that require a phone call to cancel when sign-up took 30 seconds online. Confirmshaming: 'No thanks, I don't want to save money' as the opt-out label. Disguised ads: sponsored content styled to look like editorial results. Misdirection: visual attention drawn to a less advantageous option. Hidden costs: fees added at the final checkout step after the user has already invested time. Forced continuity: free trials that transition to paid without clear notification.",
      },
      {
        type: "h2",
        text: "The Long-Term Cost",
      },
      {
        type: "p",
        text: "Dark patterns tend to have strong short-term conversion metrics and weak long-term retention metrics. Users who are tricked into a subscription cancel the moment they realize it. Users who are confused into a purchase return the item and leave negative reviews. The business case for dark patterns assumes that short-term revenue gains outweigh long-term brand damage — an assumption that becomes increasingly false as regulatory scrutiny increases and users become more sophisticated about recognizing manipulation.",
      },
      {
        type: "h2",
        text: "How to Design Without Them",
      },
      {
        type: "p",
        text: "The alternative to dark patterns is not naive idealism — it is better product thinking. If your business model depends on users not understanding what they are signing up for, your business model has a structural problem that design cannot solve. The practical discipline is to regularly audit your flows from the perspective of someone who wants to do the opposite of what you want them to do: cancel instead of subscribe, decline instead of accept, unsubscribe instead of remain. If that path is unreasonably difficult, you have found a dark pattern. Fix it.",
      },
    ],
  },

  {
    id: "10",
    title: "How to Present Design Work That Actually Gets Approved",
    slug: "how-to-present-design-work",
    category: "How-To",
    issue: "Issue 07",
    issueNumber: 7,
    readingTime: "10 min read",
    author: "Studio Notes",
    excerpt:
      "Bad presentations kill good design every day. The work survives the creative process and dies in the conference room. Here is a practical framework for presenting work in a way that makes approval more likely than not.",
    coverImage: "https://picsum.photos/seed/pres1/1200/800",
    images: [
      "https://picsum.photos/seed/pres1a/1600/900",
    ],
    layoutVariant: "B",
    tags: ["Process", "Presentation", "Client Work", "How-To"],
    featured: false,
    pullQuote: "The work does not speak for itself. You have to speak for it.",
    tableOfContents: [
      "Why Presentations Fail",
      "The Setup: Context Before Content",
      "Presenting Options Without Creating Confusion",
      "Handling Feedback in the Room",
      "The Follow-Up",
    ],
    body: [
      {
        type: "p",
        text: "The single most common failure mode in design presentations is revealing work before establishing the criteria for evaluating it. A stakeholder who has not been reminded of the problem you are solving, the audience you are designing for, and the constraints you were working within will evaluate your work using their personal taste — which may have nothing to do with whether it will achieve the stated objective. The solution is not more slides. It is a better opening.",
      },
      {
        type: "h2",
        text: "The Setup: Context Before Content",
      },
      {
        type: "p",
        text: "Spend the first ten to fifteen percent of any design presentation re-establishing the brief. Not as a formality — as a strategic move. 'Before I show you what we made, I want to make sure we are all evaluating it against the same criteria.' State the problem. State the audience. State the constraints. State the success criteria you agreed on at the start of the engagement. Now, when you reveal the work, stakeholders have a framework for response that goes beyond 'I like it' or 'I do not like it.'",
      },
      {
        type: "h2",
        text: "Presenting Options Without Creating Confusion",
      },
      {
        type: "p",
        text: "Never present two options unless you are prepared to defend both equally. Options presented with different levels of conviction will always result in the stakeholder choosing the one you did not prefer, because the asymmetry in your confidence communicates itself non-verbally. The better approach: present one option as 'the recommendation' and frame any alternatives as 'explorations of a different strategic direction,' explaining the trade-offs each involves. This preserves stakeholder agency while communicating your considered professional judgment.",
      },
      {
        type: "h2",
        text: "Handling Feedback in the Room",
      },
      {
        type: "p",
        text: "Feedback in the room is almost always surface feedback — 'can we make it bigger,' 'I am not sure about the color' — delivered in response to a visual stimulus before the person has had time to process what they are actually reacting to. Your job is to translate surface feedback into underlying concern. 'It sounds like you want this element to feel more prominent — is the concern that it does not read as the primary action, or something else?' This technique, borrowed from therapy, transforms defensive reactions into productive conversations.",
      },
      {
        type: "h2",
        text: "The Follow-Up",
      },
      {
        type: "p",
        text: "Send a written summary within 24 hours of every significant presentation. Include: what was shown, what was agreed, what was flagged for further consideration, and the next steps with owners and deadlines. This documentation serves two purposes. Practically, it prevents the drift of verbal agreements — 'I thought we decided to keep the old logo' — that can set projects back weeks. Strategically, it positions you as the organized, professional party in the relationship, which builds the kind of trust that makes future presentations easier.",
      },
    ],
  },

  {
    id: "11",
    title: "Print Is Not Dead: What Digital Designers Miss About Layout",
    slug: "print-is-not-dead-layout-lessons",
    category: "Opinion",
    issue: "Issue 06",
    issueNumber: 6,
    readingTime: "8 min read",
    author: "Editorial Team",
    excerpt:
      "Digital designers have collectively forgotten more about layout than they know. The lessons are all in print — in magazines, books, newspapers that solved the same problems decades before the first pixel was drawn.",
    coverImage: "https://picsum.photos/seed/print1/1200/800",
    images: [
      "https://picsum.photos/seed/print1a/1600/900",
      "https://picsum.photos/seed/print1b/900/1200",
    ],
    layoutVariant: "C",
    tags: ["Layout", "Print", "Editorial", "Opinion"],
    featured: false,
    pullQuote: "Every layout problem you are struggling with has already been solved. The answer is probably in a magazine from 1967.",
    tableOfContents: [
      "The Knowledge Loss",
      "What Print Got Right",
      "Hierarchy and the Hierarchy of Hierarchy",
      "White Space as Active Space",
      "What to Borrow, What to Leave",
    ],
    body: [
      {
        type: "p",
        text: "There is a generation of excellent digital designers who have never picked up a copy of Jan Tschichold's 'The New Typography,' have never studied a Vignelli grid system, have never laid out a page in InDesign. They learned Figma from YouTube tutorials and they are genuinely talented. And they are missing a body of knowledge that took the print world 500 years to accumulate.",
      },
      {
        type: "h2",
        text: "The Knowledge Loss",
      },
      {
        type: "p",
        text: "This is not generational snobbery. The transition from print to digital design tools happened so rapidly that the pedagogical infrastructure did not keep pace. Design education shifted from teaching layout principles to teaching software operation. Students who can prototype an app flow in four hours have never considered why a newspaper column is the width it is, or what the relationship between type size and measure is, or why margins on a spread are not simply four equal values. These are not trivia. They are the structural grammar of visual communication.",
      },
      {
        type: "h2",
        text: "White Space as Active Space",
      },
      {
        type: "p",
        text: "The most persistent misunderstanding in digital layout is the treatment of white space as absence — the areas of a design where nothing happens. In print layout tradition, white space is active. It directs attention, creates rhythm, signals hierarchy, and communicates breathing room (which communicates quality, because quality costs the paper to print on). Digital layouts that treat margins as optional padding, that compress white space to fit more content above the fold, are operating on a fundamentally impoverished model of how layout works.",
      },
      {
        type: "h2",
        text: "What to Borrow, What to Leave",
      },
      {
        type: "p",
        text: "Print layouts are designed for fixed dimensions, static reading, and uninterrupted attention. Digital layouts must accommodate responsive reflow, variable content, dynamic states, and interrupted attention patterns. You cannot translate print directly — but you can translate its principles. The discipline of establishing a consistent vertical rhythm, the practice of designing with a baseline grid, the habit of asking 'what is the hierarchy here, and does the layout make it visible' — all of these travel intact from print to screen. The specific implementations vary. The underlying thinking does not.",
      },
    ],
  },

  {
    id: "12",
    title: "The Logo Redesigns That Actually Worked — And Exactly Why",
    slug: "logo-redesigns-that-worked",
    category: "Analysis",
    issue: "Issue 06",
    issueNumber: 6,
    readingTime: "13 min read",
    author: "Strategy Desk",
    excerpt:
      "Logo redesigns are almost always controversial. The internet hates change, stakeholders have strong opinions, and the public treats brand updates as personal affronts. But some redesigns genuinely worked. Here is what they had in common.",
    coverImage: "https://picsum.photos/seed/logo1/1200/800",
    images: [
      "https://picsum.photos/seed/logo1a/1600/900",
      "https://picsum.photos/seed/logo1b/1200/800",
    ],
    layoutVariant: "A",
    tags: ["Branding", "Logo Design", "Analysis", "Identity"],
    featured: false,
    pullQuote: "A good logo redesign solves a real problem. A bad one solves a hypothetical one.",
    tableOfContents: [
      "The Baseline: Why Most Fail",
      "Airbnb: Symbol Over Wordmark",
      "Burberry: The Return to Heritage",
      "Mastercard: The Simplification",
      "The Common Thread",
    ],
    body: [
      {
        type: "p",
        text: "Most logo redesigns fail not because the design is bad but because the problem being solved is wrong. Companies update their logos for internal reasons — a new CEO, a strategic pivot, a merger — without asking whether the existing logo was actually failing at its job. The result is a logo that looks different without being better, which generates public backlash without generating business benefit. The redesigns that work start from a genuine functional problem with the existing mark.",
      },
      {
        type: "h2",
        text: "The Baseline: Why Most Fail",
      },
      {
        type: "p",
        text: "The most common failure mode: the redesign is driven by aesthetic preference rather than strategic need. Someone in leadership decides the existing logo looks dated. A design agency proposes something cleaner and more contemporary. The logo changes. The result feels like progress to the people inside the company and meaningless — or worse — to the people outside it. Brand equity is accumulated slowly and lost quickly. A logo that has been in use for twenty years carries associations that no design team can rebuild in a single refresh.",
      },
      {
        type: "h2",
        text: "Airbnb: Symbol Over Wordmark",
      },
      {
        type: "p",
        text: "Airbnb's 2014 rebrand, which introduced the 'Bélo' symbol, solved a real problem: the company was expanding into a global market where Latin letterforms were less effective identifiers. A symbol that could operate without the wordmark — on app icons, physical markers, map pins — was a genuine functional requirement. The design process was also exemplary: the symbol was deliberately designed to look different from different angles, creating a sense of depth and belonging that the wordmark alone could not convey. The public backlash (primarily about the symbol's resemblance to other shapes) was real but short-lived. The strategic success was durable.",
      },
      {
        type: "h2",
        text: "The Common Thread",
      },
      {
        type: "p",
        text: "In every successful logo redesign we examined, the following was true: there was a specific, documented problem with the existing mark. The redesign was evaluated against that problem, not against aesthetic preference. The brand's equity was preserved rather than reset — the redesign evolved the existing identity rather than replacing it. And the design team had sufficient authority to push back when internal pressures tried to add complexity or compromise the solution. Good logo redesign is not fundamentally a design problem. It is a governance problem.",
      },
    ],
  },

  {
    id: "13",
    title: "Contrast, Rhythm, Tension: Visual Weight Explained",
    slug: "contrast-rhythm-tension-visual-weight",
    category: "Education",
    issue: "Issue 05",
    issueNumber: 5,
    readingTime: "7 min read",
    author: "Studio Notes",
    excerpt:
      "Visual weight is the quality that makes a composition feel balanced, dynamic, or deliberately off. Understanding it transforms you from someone who arranges elements to someone who composes them.",
    coverImage: "https://picsum.photos/seed/weight1/1200/800",
    images: [
      "https://picsum.photos/seed/weight1a/1600/900",
    ],
    layoutVariant: "C",
    tags: ["Composition", "Education", "Visual Design"],
    featured: false,
    pullQuote: "Balance is not symmetry. Balance is the point at which everything feels precisely where it must be.",
    tableOfContents: [
      "What Visual Weight Is",
      "The Five Factors",
      "Contrast as a Tool",
      "Rhythm and Repetition",
      "Intentional Tension",
    ],
    body: [
      {
        type: "p",
        text: "Visual weight is the quality of an element that draws or resists the eye's attention. It is why a small, dark shape in a corner can balance a large, light shape in the center. It is why a single word in red on a white page outweighs three paragraphs of black text. It is why some layouts feel effortlessly resolved and others feel perpetually unsettled, even when you cannot identify exactly why. It is one of the most practically useful concepts in visual design and one of the least systematically taught.",
      },
      {
        type: "h2",
        text: "The Five Factors",
      },
      {
        type: "p",
        text: "Size is the most obvious factor — larger elements have more weight. Tone is almost as powerful — dark elements are heavier than light ones. Color saturation adds weight; a saturated color is visually heavier than a muted one of the same size. Position affects perceived weight — elements near the bottom of a composition feel heavier than elements near the top, because we read depth cues into vertical position. Complexity adds weight — a detailed texture is heavier than a flat field. Understanding these five factors gives you the toolkit to analyze any composition and predict how adjustments will change its feel.",
      },
      {
        type: "h2",
        text: "Rhythm and Repetition",
      },
      {
        type: "p",
        text: "Rhythm in design is the controlled repetition of visual elements — size, color, spacing, texture — that creates a predictable pattern the eye can follow. Like musical rhythm, it establishes a baseline expectation that makes deviations meaningful. A grid of equally-spaced elements creates rhythm; a single element displaced from the grid creates emphasis. The displacement only works because the rhythm was established first. This is why consistent spacing systems — even in neo-brutalist work that appears to reject order — produce better results than arbitrary spacing: the system creates the rhythm that makes the intentional violations readable.",
      },
      {
        type: "h2",
        text: "Intentional Tension",
      },
      {
        type: "p",
        text: "Tension is the quality that makes a composition feel unresolved in a way that compels continued engagement. It is different from imbalance — imbalance feels like a mistake, tension feels like an argument being made. Tension is created by placing heavy elements near boundaries, by establishing hierarchies and then violating them, by juxtaposing elements of dramatically different visual weight without fully resolving the contrast. The goal is not to make the viewer uncomfortable but to give the composition kinetic energy — a sense that something is happening rather than simply existing. In editorial design and brand identity, tension is what makes work memorable rather than merely correct.",
      },
    ],
  },

  {
    id: "14",
    title: "Behind the Rebrand: How a Legacy Bank Became a Design Leader",
    slug: "legacy-bank-rebrand-design-leader",
    category: "Case Study",
    issue: "Issue 05",
    issueNumber: 5,
    readingTime: "14 min read",
    author: "Strategy Desk",
    excerpt:
      "A 40-year-old regional bank. Thirty-seven product lines. Four separate design teams with no shared system. One 18-month project to bring it all together — and a rebrand that is now referenced as a case study in design system strategy.",
    coverImage: "https://picsum.photos/seed/bank1/1200/800",
    images: [
      "https://picsum.photos/seed/bank1a/1600/900",
      "https://picsum.photos/seed/bank1b/1200/800",
    ],
    layoutVariant: "B",
    tags: ["Case Study", "Design Systems", "Branding", "Finance"],
    featured: false,
    pullQuote: "A design system is not a style guide. It is a shared decision-making framework.",
    tableOfContents: [
      "The Starting Point",
      "The Audit",
      "Building the System",
      "The Political Problem",
      "Rollout and Adoption",
      "What We Learned",
    ],
    body: [
      {
        type: "p",
        text: "Financial services brands are among the most challenging rebrand projects in existence. The regulatory environment is strict, the stakeholder count is enormous, the risk tolerance is low, and the brand equity is often tied to associations — stability, longevity, trustworthiness — that a redesign can easily undermine if not handled carefully. The project we are describing added an additional complexity: the bank had grown through acquisition, which meant the brand was not one thing but a federation of things that had been loosely stapled together under a shared name.",
      },
      {
        type: "h2",
        text: "The Audit",
      },
      {
        type: "p",
        text: "The audit revealed 847 distinct interface components across thirty-seven product lines, with no standardization of naming, no shared color system, and no documented rationale for any of the decisions. We found six different shades of what each team called 'our blue.' We found three different button styles on the same page in one product. We found a mobile app whose navigation behavior was the opposite of its desktop equivalent, because the teams that built them had never spoken to each other. This was not dysfunction — it was the predictable outcome of growth without infrastructure.",
      },
      {
        type: "h2",
        text: "Building the System",
      },
      {
        type: "p",
        text: "We designed the system in three layers. The foundation layer: color tokens, type scales, spacing scales, border radii, shadow systems. These were defined semantically — not 'blue-500' but 'interactive-primary' — so that the values could change without breaking the logic. The component layer: a library of 140 components, each with defined states, documented variants, and accessibility requirements built in. The pattern layer: documented solutions to recurring design problems, from empty states to error handling to onboarding flows. The pattern layer is where most design systems stop short. It is also where most of the value lives.",
      },
      {
        type: "h2",
        text: "What We Learned",
      },
      {
        type: "p",
        text: "The technical work was straightforward. The organizational work was not. A design system requires ongoing governance — someone with authority to resolve conflicts, approve exceptions, and deprecate components that have been superseded. Without that governance, systems drift. Components get forked. Exceptions multiply until they become the rule. The bank's success came not from the quality of the components we designed but from the governance model they committed to before we handed over the system. The design work was twelve months. The adoption work is permanent.",
      },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getFeaturedArticles() {
  return articles.filter((a) => a.featured);
}

export function getArticlesByIssue(issueNumber) {
  return articles.filter((a) => a.issueNumber === issueNumber);
}

export function getLatestIssueNumber() {
  return Math.max(...articles.map((a) => a.issueNumber));
}
