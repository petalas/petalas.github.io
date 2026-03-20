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

const parseDate = (monthYear: string): string => {
  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const match = monthYear.match(/^(\w+)\s+(\d{4})$/);
  if (!match) return "";

  const [, monthStr, yearStr] = match;
  const month = monthMap[monthStr];
  const year = parseInt(yearStr, 10);

  if (month === undefined || isNaN(year)) return "";

  const date = new Date(year, month, 1);
  return date.toISOString().split("T")[0];
};

const parseStartDate = (timeframe: string): string => {
  const match = timeframe.match(/^(\w+\s+\d{4})/);
  if (!match) return "";
  return parseDate(match[1]);
};

const parseEndDate = (timeframe: string): string => {
  if (timeframe.includes("Present")) return "";

  const match = timeframe.match(/–\s*(\w+\s+\d{4})$/);
  if (!match) return "";
  return parseDate(match[1]);
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
    title: `Senior Frontend Developer`,
    name: `Eeze (Game Innovation)`,
    timeframe: `Sep 2025 – Present`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Lead frontend developer across multiple concurrent iGaming projects in the Game Innovation department, building with <code>React</code>, <code>Zustand</code>, <code>Protobuf</code>, and <code>Docker</code>.</li>
        <li>Led the end-to-end frontend development of <strong>Operation Tools</strong>, coordinating closely with backend engineers for seamless integration.</li>
        <li>Sole developer and project lead on the <strong>Backoffice Template Service</strong> — designed the architecture, implemented localization, comprehensive test coverage, and a multi-stage <code>Docker</code> deployment pipeline. The service became a <strong>reusable platform</strong> adopted across multiple products.</li>
        <li>Co-delivered the <strong>MMD</strong> and <strong>M12D</strong> iGaming projects, integrating template service support and contributing through to launch.</li>
        <li>Selected to lead frontend development on an upcoming iGaming project.</li>
      </ul>
    `,
  },
  {
    title: `Founder & Lead Engineer`,
    name: `DailyGoal.fit`,
    timeframe: `Feb 2025 – Present`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Founded and shipped a <strong>health and fitness tracking platform</strong> across web and <strong>iOS</strong> (live on the App Store), focused on simplicity, consistency, and meaningful user outcomes.</li>
        <li>Defined product vision and oversaw all aspects of engineering, UX design, and long-term roadmap planning.</li>
        <li>Designed and implemented scalable full-stack architecture using <code>Next.js</code>, <code>React Native (Expo)</code>, <code>Convex</code>, and <code>Vercel</code>.</li>
        <li>Built and shipped an <strong>iOS app</strong> with nutrition tracking, workout logging, Apple Health integration, streak systems, and in-app subscriptions via <code>RevenueCat</code>.</li>
        <li>Built core features including food logging, goal tracking, workout tracking, and barcode scanning with integrations like <code>USDA FoodData Central</code> and <code>OpenFoodFacts</code>.</li>
        <li>Designed real-time database schema to support efficient querying, user-specific goal logic, streak tracking, and historical analytics.</li>
        <li>Developed <strong>CI/CD workflows</strong> and infrastructure automation including automated TestFlight builds and deployments.</li>
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
        <li><strong>Technical Lead</strong> for the "Learn" team and core member of the <strong>web platform</strong> team over a 5-year tenure.</li>
        <li>Led the modernization of the web platform across three generations — migrating from legacy <code>Angular</code> to <code>StencilJS</code>, then to <code>Microsoft FAST</code> with custom web components and a bespoke design system.</li>
        <li>Collaborated with client teams on <code>React</code> integrations, bridging platform and product engineering.</li>
        <li>Mentored developers, onboarded new starters, and served as tier 3 escalation point for platform issues.</li>
        <li>Built developer tooling including <code>Genx CLI</code>, low-code scaffolding, app seeds, and custom <code>Docusaurus</code> plugins.</li>
        <li>Owned DevOps responsibilities including <code>AWS Amplify</code>, <code>GitHub Actions</code> pipelines, and Infrastructure as Code.</li>
      </ul>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Elemental Concept LTD`,
    timeframe: `Sep 2018 – Dec 2019`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Full-stack engineer delivering across mobile, web, and backend on four concurrent client projects.</li>
        <li>Led major refactoring and microservice extraction on <strong>Gift & Go</strong>, a B2B rewards platform (<code>Java 11</code>, <code>Spring Boot</code>, <code>Angular</code>, <code>AWS</code>, <code>Docker</code>) — built APIs for enterprise clients including <strong>Scientific Games</strong>.</li>
        <li>Shipped <strong>CorResilience</strong> (health coaching app with lab and Fitbit integration) and <strong>WellteQ</strong> (wellness platform — <code>Ionic</code>, <code>Cordova</code>, <code>Node.js</code>, <code>Java</code>, <code>MySQL</code>, <code>MongoDB</code>).</li>
        <li>Built <strong>Go Fast</strong>, an internal rapid prototyping toolset (<code>React</code>, <code>Angular</code>, <code>NestJS</code>).</li>
      </ul>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Enigma Software Solutions LTD`,
    timeframe: `Feb 2017 – Sep 2018`,
    description: `
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Built and maintained iGaming platform tools for online betting clients: client portals, payment systems, trader and bet management, reporting, and retail cashier systems.</li>
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
        <li>Developed services and parts of the Quizedia Android app.</li>
        <li>Trained and supervised interns in scraping and quiz generation.</li>
      </ul>
    `,
  },
];
