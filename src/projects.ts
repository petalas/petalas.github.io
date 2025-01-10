export function setupProjects(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${projects.map(projectTemplate).join("")}
  `;
}

const projectTemplate = (project: Project): string => {
  const title = project.link ? `<a href="${project.link}" target="_blank">${project.name}</a>` : project.name;
  return `
    <div class="project">
        <h2 class="p-2 bg-latte-crust dark:bg-mocha-crust">${title}</h2>
        <img src="${project.img}" alt="${project.name}" />
        <div class="text-sm p-2">${project.description}</div>
    </div>
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
    `,
  },
];