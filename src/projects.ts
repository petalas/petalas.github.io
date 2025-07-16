export function setupProjects(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${projects.map(projectTemplate).join("")}
    ${generateProjectSchema()}
  `;
}

const generateProjectSchema = () => {
  const softwareProjects = projects.map((project) => ({
    "@type": "SoftwareApplication",
    "name": project.name,
    "url": project.link || "",
    "image": project.img ? `https://petalas.dev/${project.img}` : "",
    "description": project.description.replace(/<[^>]*>/g, "").trim(),
    "author": {
      "@type": "Person",
      "name": "Nick Petalas",
    },
    "applicationCategory": "WebApplication",
  }));

  return `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nick Petalas",
      "hasCreated": ${JSON.stringify(softwareProjects)}
    }
    </script>
  `;
};

const projectTemplate = (project: Project): string => {
  const title = project.link
    ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.name}</a>`
    : project.name;
  return `
    <article class="project">
        <h3 class="p-2 bg-latte-crust dark:bg-mocha-crust">${title}</h3>
        <img src="${project.img}" alt="${project.name} project screenshot showing main interface" loading="lazy" />
        <div class="text-sm p-2">${project.description}</div>
    </article>
  `;
};

interface Project {
  name: string;
  link?: string;
  img?: string;
  description: string;
}

const projects: Project[] = [
  {
    name: `DailyGoal.fit`,
    link: `https://www.dailygoal.fit`,
    img: `images/dailygoal.avif`,
    description: `
    <p class="my-2 font-semibold">A nutrition, health, and fitness tracking app designed to build lasting discipline and consistency in wellness journeys.</p>
    
    <p class="my-2">DailyGoal.fit's philosophy centers on slow, sustainable progress that leads to meaningful, long-term improvements in both body composition and overall quality of life. The platform enables users to monitor daily food intake, track macronutrients, set customizable goals, and measure progress through various metrics. Its advanced body composition calculator estimates timelines for reaching ideal body fat percentages based on current stats and activity levels.</p>
    
    <h4 class="font-semibold mt-3 mb-1">Core Features:</h4>
    <ul class="m-2 p-2 list-disc list-outside space-y-1">
      <li><strong>Intelligent Nutrition Tracking</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>USDA food database with 500,000+ verified entries</li>
          <li>Barcode scanning via OpenFoodFacts integration</li>
          <li>Custom food and recipe builder</li>
          <li>Macronutrient analysis</li>
        </ul>
      </li>
      <li><strong>Advanced Body Composition</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>Body fat percentage calculator and trends</li>
          <li>Lean mass tracking</li>
        </ul>
      </li>
      <li><strong>Personalized Goal System</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>Weight management (loss/gain/maintenance)</li>
          <li>Daily step targets with activity tracking</li>
          <li>Hydration reminders and logging</li>
          <li>Custom wellness goals (sleep, meditation, etc.)</li>
        </ul>
      </li>
    </ul>
    
    <h4 class="font-semibold mt-3 mb-1">Tech Stack:</h4>
    <p class="text-sm">Built with React, TypeScript, Supabase, and Stripe. Features real-time sync and a responsive PWA design for seamless mobile and desktop experiences.</p>
    `,
  },
  {
    name: `BTC Risk Metric`,
    link: `https://github.com/petalas/btc-risk-metric`,
    img: `images/btc-risk.png`,
    description: `
      <h3>Bitcoin risk oscillator, combining multiple metrics.</h3>
      <p>Metrics involved so far: </p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>EMA 5 Daily / EMA 50 Weekly</li>
        <li>Mayer Multiple</li>
        <li>Sharpe Ratio</li>
        <li>Price / EMA 400</li>
        <li>RSI 20</li>
        <li>Puell Multiple</li>
      </ul>
      <p>It also attempts to account for the logarithmic nature of BTC growth and diminishing returns.</p>
      <p>Available as an indicator on TradingView.</p>
    `,
  },
  {
    name: `artgen.xyz`,
    link: `https://artgen.xyz`,
    img: `images/artgen.png`,
    description: `
      <h3>A heuristic vector art generator.</h3>
      <p>It generates 'abstract art' pieces using genetic algorithms to 'evolve' a set of semi-transparent polygons, attempting to recreate a target image.</p>
      <p>I'm also working on a multithreaded + SIMD version (Rust).</p>
    `,
  },
  {
    name: `Homelab`,
    link: `https://github.com/petalas/docker-nas/blob/master/docker-compose.yml`,
    img: `images/homelab.png`,
    description: `
      <p>I have a Proxmox server at home running multiple VMs. Mainly a TrueNAS VM with HBA passthrough for my NAS (8-wide raidz2) and a Debian VM running dockerized services:</p>
      <p class="my-2">(traefik, glances, uptime-kuma, code-server, homepage, plex, radarr, sonarr, lidarr, prowlarr, sabnzbd, qbittorrent, iperf3, netdata, autobrr, omegabrr, cross-seed, qbit_manage, flaresolverr, filebrowser, home-assistant)</p>
      <p>I also run my own network stack: OPNsense router, pi-hole (DNS level adblocking), unbound (recursive DNS resolver), Omada SDN Controller to manage my wireless Access Points.</p>
    `,
  },
];
