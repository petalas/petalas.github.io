export function setupExperience(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${positions.map(positionTemplate).join("")}
  `;
}

const positionTemplate = (position: Position) => {
  return `
    <section class="position">
        <h2 class="p-2 flex justify-between bg-latte-crust dark:bg-mocha-crust">
            <span class="hidden md:block text-latte-green dark:text-mocha-green">${position.title}</span>
            <span class="md:flex-1 md:text-center text-latte-peach dark:text-mocha-peach">${position.name}</span>
            <span class="text-latte-red dark:text-mocha-red">${position.timeframe}</span>
        </h2>
        <h3 class="block md:hidden p-2 text-sm text-latte-green dark:text-mocha-green">${position.title}</h3>
        <ul class="text-xs p-2">${position.description}</ul>
    </section>
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
    title: `Senior Software Engineer`,
    name: `Genesis`,
    timeframe: `Dec 2019 - Oct 2024`,
    description: `
      <p>I was a core web platform team member and Technical Lead for the “learn” team.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Involved in architecting and building multiple iterations of the web platform.</li>
        <li>Facilitated the move from the legacy Angular codebase to one using stenciljs and subsequently the latest iteration of the web platform which is built on top of Microsoft FAST with custom web components and design systems.</li>
        <li>Mentored fellow developers, onboarded new starters, offered tier 3 support.</li>
        <li>Worked on Genx CLI, low-code tooling, app seeds, custom docusaurus plugins.</li>
        <li>Occasional DevOps work as needed, Infrastructure as Code (AWS Amplify) and github pipelines.</li>
      </ul>
      <p>Note: Genesis is the leading low-code platform for financial markets-grade applications, with top tier clients like ING, City, Bank of America, BNY, LCH, StoneX, Quantitative Brokers, Octaura, Neptune, Marex and more.</p>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Elemental Concept`,
    timeframe: `Sep 2018 - Dec 2019`,
    description: `
      <p>During my time in EC I was part of multiple projects and had the opportunity to learn a lot of new technologies and transition from a mostly back-end to a full-stack software engineer.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li><strong><b>CorResilience:</b></strong> personalized health coaching mobile app with blood test labs and Fitbit integration.</li>
        <li><strong><b>WellteQ:</b></strong> health focused mobile app, Fitbit and Google Health integration. (ionic, cordova, NodeJS and Java back-ends, MySQL and MongoDB)</li>
        <li><strong><b>Gift & Go:</b></strong> B2B gifting and loyalty / rewards platform, integration with multiple Amazon APIs, custom product catalogs and fulfillment through Amazon FBA, 10+ microservices, dockerized, on AWS (MySQL, Java 11, Spring Boot, Eureka, Angular).</li>
        <li><strong><b>Go Fast:</b></strong> internal project focusing on rapid prototyping, skeleton apps, reusable components (Angular 7, NestJS)</li>
      </ul>
      <p>I was involved with Gift & Go the most, I helped refactor a lot of the legacy code, split monolithic systems into appropriate microservices, optimize queries and performance, dockerize services and automate the deployment pipeline.</p>
      <p>Also developed custom APIs for third party integration on a client-by-client basis.</p>
    `,
  },
  {
    title: `Software Engineer`,
    name: "Enigma Software Solutions",
    timeframe: `Feb 2017 - Sep 2018`,
    description: `
      <p>I was part of the core team developing a collection of tools for Enigma’s clients who are in the online betting and gambling business. That collection of tools included both client-facing websites and back-end software (management of clients, traders, bets, fixtures, payment systems, report generation, cashier management system for retail bet shops).</p>
      <p>I specialized in Java and SQL, mainly developed services and optimized back-end code.</p>
      <p>I was also involved in the maintenance of some legacy systems (PrimeFaces websites, Oracle WebLogic servers).</p>
    `,
  },
  {
    title: `Software Engineer`,
    name: `Safemarket LTD`,
    timeframe: "Oct 2014 - Oct 2016",
    description: `
      <p>I actively participated in the architectural design of internal tools for the Erybo project and managed multiple databases.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Developed specialized data mining and knowledge extraction tools that automatically update Erybo’s knowledge base (SQL, RDF databases) mostly using Java (Jsoup, Selenium, HikariCP, Apache Jena).</li>
        <li>Created content-generating tools (automatic generation of trivia questions for Erybo’s quiz app).</li>
        <li>Participated in the development of the control panel used for handling users, questions and quizzes.</li>
        <li>Created automatic audio and video manipulation tools for cropping, transcoding, audio level adjustment, segmentation, detection of silent/dark audio/video segments. (Java, ffmpeg)</li>
        <li>Created services for on-demand parsing of information about entities, media extraction and storage, and other utilities. (Java, Netty)</li>
        <li>Developed part of the android version of Erybo's trivia app Quizedia.</li>
        <li>Supervised and trained interns mostly in web scrapping and quiz content generation.</li>
      </ul>
    `,
  },
];
