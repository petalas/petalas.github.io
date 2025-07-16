export function setupExperience(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${positions.map(positionTemplate).join("")}
    ${generateWorkPositionSchema()}
  `;
}

const generateWorkPositionSchema = () => {
  const workPositions = positions.map((position) => ({
    "@type": "WorkPosition",
    "name": position.title,
    "employer": {
      "@type": "Organization",
      "name": position.name,
    },
    "employmentType": "FULL_TIME",
    "startDate": parseStartDate(position.timeframe),
    "endDate": parseEndDate(position.timeframe),
    "description": position.description.replace(/<[^>]*>/g, "").trim(),
  }));

  return `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nick Petalas",
      "hasOccupation": ${JSON.stringify(workPositions)}
    }
    </script>
  `;
};

const parseStartDate = (timeframe: string): string => {
  const match = timeframe.match(/^(\w+\s+\d{4})/);
  if (!match) return "";

  const monthYear = match[1];
  const date = new Date(monthYear);
  return date.toISOString().split("T")[0];
};

const parseEndDate = (timeframe: string): string => {
  if (timeframe.includes("Present")) return "";

  const match = timeframe.match(/–\s*(\w+\s+\d{4})$/);
  if (!match) return "";

  const monthYear = match[1];
  const date = new Date(monthYear);
  return date.toISOString().split("T")[0];
};

const positionTemplate = (position: Position) => {
  return `
    <article class="position" itemscope itemtype="https://schema.org/WorkExperience">
        <header class="p-2 flex justify-between bg-latte-crust dark:bg-mocha-crust">
            <h3 class="hidden md:block text-latte-green dark:text-mocha-green" itemprop="name">${position.title}</h3>
            <span class="md:flex-1 md:text-center text-latte-peach dark:text-mocha-peach" itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
              <span itemprop="name">${position.name}</span>
            </span>
            <time class="text-latte-red dark:text-mocha-red" itemprop="startDate endDate">${position.timeframe}</time>
        </header>
        <h3 class="block md:hidden p-2 text-sm text-latte-green dark:text-mocha-green" itemprop="name">${position.title}</h3>
        <div class="text-sm md:text-xs p-2" itemprop="description">${position.description}</div>
    </article>
  `;
};

interface Position {
  title: string;
  name: string;
  timeframe: string;
  description: string;
}

const positions: Position[] = [
  {
    title: `Founder & Lead Engineer`,
    name: `DailyGoal.fit`,
    timeframe: `Feb 2025 – Present`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Founded and led development of a <strong>health and fitness tracking platform</strong> focused on simplicity, consistency, and meaningful user outcomes.</li>
        <li>Defined product vision and oversaw all aspects of engineering, UX design, and long-term roadmap planning.</li>
        <li>Designed and implemented scalable full-stack architecture using <code>Next.js</code>, <code>React 19</code>, <code>Supabase</code>, <code>AWS</code>, and <code>Vercel</code>.</li>
        <li>Built core features including food logging, goal tracking, and barcode scanning with integrations like <code>USDA FoodData Central</code> and <code>OpenFoodFacts</code>.</li>
        <li>Designed database schema to support efficient querying, user-specific goal logic, streak tracking, and historical analytics.</li>
        <li>Developed <strong>CI/CD workflows</strong> and infrastructure automation to enable rapid iteration and high availability.</li>
        <li>Led user research, customer support, and iterative product improvements based on feedback.</li>
        <li>Drove growth strategy, marketing initiatives, and early-stage community building.</li>
      </ul>
    `,
  },
  {
    title: `Senior Software Engineer`,
    name: `Genesis Global Technology LTD`,
    timeframe: `Dec 2019 – Oct 2024`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Core web platform team member and <strong>Technical Lead</strong> for the "Learn" team.</li>
        <li>Architected and built multiple platform iterations, transitioning from legacy <code>Angular</code> to <code>StencilJS</code>, then to <code>Microsoft FAST</code> with custom web components and design systems.</li>
        <li>Mentored developers, onboarded new starters, and provided tier 3 support.</li>
        <li>Contributed to <code>Genx CLI</code>, low-code tools, app seeds, and custom <code>Docusaurus</code> plugins.</li>
        <li>Performed DevOps work including <code>AWS Amplify</code>, <code>GitHub pipelines</code>, and Infrastructure as Code.</li>
      </ul>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Elemental Concept LTD`,
    timeframe: `Sep 2018 – Dec 2019`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Full-stack engineer across multiple high-impact projects.</li>
        <li><strong>CorResilience:</strong> health coaching app with lab and Fitbit integration.</li>
        <li><strong>WellteQ:</strong> wellness app (<code>Ionic</code>, <code>Cordova</code>, <code>Node.js</code>, <code>Java</code>, <code>MySQL</code>, <code>MongoDB</code>).</li>
        <li><strong>Gift & Go:</strong> B2B rewards platform (<code>Java 11</code>, <code>Spring Boot</code>, <code>Angular</code>, <code>AWS</code>, <code>Docker</code>, microservices). Led refactoring, microservice extraction, performance optimization, API development for clients incl. Scientific Games.</li>
        <li><strong>Go Fast:</strong> internal rapid prototyping toolset (<code>Angular 7</code>, <code>NestJS</code>).</li>
      </ul>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Enigma Software Solutions LTD`,
    timeframe: `Feb 2017 – Sep 2018`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Built and maintained tools for online betting clients: client portals, payment systems, trader and bet management, reporting, and retail cashier systems.</li>
        <li>Focused on <code>Java</code> and <code>SQL</code> back-end development.</li>
        <li>Maintained legacy systems (<code>PrimeFaces</code>, <code>Oracle WebLogic</code>).</li>
      </ul>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Safemarket LTD`,
    timeframe: `Dec 2014 – Oct 2016`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Designed and developed internal tools and knowledge extraction systems for the Erybo project (<code>Java</code>, <code>SQL</code>, <code>RDF</code>, <code>Jsoup</code>, <code>Selenium</code>, <code>Apache Jena</code>).</li>
        <li>Built automated media processing tools (<code>Java</code>, <code>ffmpeg</code>), trivia content generators, and entity parsers.</li>
        <li>Developed services and parts of the <strong>Quizedia Android app</strong>.</li>
        <li>Trained and supervised interns in scraping and quiz generation.</li>
      </ul>
    `,
  },
];
