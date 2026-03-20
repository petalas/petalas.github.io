export function setupProjects(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    ${projects.map(projectTemplate).join("")}
    ${generateProjectSchema()}
  `;

  // Initialize carousels after DOM is ready
  initCarousels();
}

function initCarousels() {
  document.querySelectorAll<HTMLElement>(".screenshot-carousel").forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>(".carousel-track");
    const dots = carousel.querySelectorAll<HTMLElement>(".carousel-dot");
    const prevBtn = carousel.querySelector<HTMLElement>(".carousel-prev");
    const nextBtn = carousel.querySelector<HTMLElement>(".carousel-next");
    if (!track) return;

    const items = track.querySelectorAll<HTMLElement>(".carousel-item");
    let currentIndex = 0;
    let autoplayTimer: ReturnType<typeof setInterval> | null = null;

    const getVisibleCount = () => {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    };

    const maxIndex = () => Math.max(0, items.length - getVisibleCount());

    const scrollToIndex = (index: number) => {
      currentIndex = Math.max(0, Math.min(index, maxIndex()));
      const item = items[currentIndex];
      if (item) {
        track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: "smooth" });
      }
      updateDots();
    };

    const updateDots = () => {
      dots.forEach((dot, i) => {
        const isActive = i === currentIndex;
        dot.classList.toggle("bg-latte-blue", isActive);
        dot.classList.toggle("dark:bg-mocha-blue", isActive);
        dot.classList.toggle("bg-latte-overlay0", !isActive);
        dot.classList.toggle("dark:bg-mocha-overlay0", !isActive);
        dot.classList.toggle("scale-125", isActive);
      });
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        const next = currentIndex + 1;
        scrollToIndex(next > maxIndex() ? 0 : next);
      }, 4000);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    prevBtn?.addEventListener("click", () => {
      stopAutoplay();
      scrollToIndex(currentIndex <= 0 ? maxIndex() : currentIndex - 1);
      startAutoplay();
    });

    nextBtn?.addEventListener("click", () => {
      stopAutoplay();
      scrollToIndex(currentIndex >= maxIndex() ? 0 : currentIndex + 1);
      startAutoplay();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        stopAutoplay();
        scrollToIndex(i);
        startAutoplay();
      });
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    // Handle touch/manual scroll
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    track.addEventListener("scroll", () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Find closest item to scroll position
        const scrollLeft = track.scrollLeft;
        let closest = 0;
        let closestDist = Infinity;
        items.forEach((item, i) => {
          const dist = Math.abs(item.offsetLeft - track.offsetLeft - scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        currentIndex = closest;
        updateDots();
      }, 50);
    });

    // Handle resize
    window.addEventListener("resize", () => {
      scrollToIndex(Math.min(currentIndex, maxIndex()));
    });

    updateDots();
    startAutoplay();
  });
}

const generateProjectSchema = () => {
  const softwareProjects = projects.map((project) => ({
    "@type": "SoftwareApplication",
    "name": project.name,
    "url": project.link ?? "",
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

const APP_STORE_URL = "https://apps.apple.com/gb/app/dailygoal-fitness-nutrition/id6758465266";

const screenshotLabels = [
  "Home dashboard",
  "Food diary",
  "Food search",
  "Workout tracker",
  "Goals setup",
  "Progress charts",
  "Body composition",
  "Welcome screen",
];

const dailyGoalTemplate = (project: Project): string => {
  const screenshots = Array.from({ length: 8 }, (_, i) => i + 1);
  const title = `<a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.name}</a>`;

  return `
    <article class="project md:col-span-2">
      <h3 class="p-2 bg-latte-crust dark:bg-mocha-crust">${title}</h3>

      <div class="screenshot-carousel relative select-none">
        <div class="carousel-track flex gap-3 overflow-x-auto scroll-smooth p-4 snap-x snap-mandatory scrollbar-hide">
          ${screenshots
            .map(
              (n) => `
            <div class="carousel-item snap-start shrink-0">
              <img
                src="images/dailygoal-screenshots/${n}.png"
                alt="DailyGoal app — ${screenshotLabels[n - 1] ?? `screenshot ${n}`}"
                class="carousel-phone-img rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          `,
            )
            .join("")}
        </div>

        <button class="carousel-prev carousel-nav-btn left-1" aria-label="Previous screenshot">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="!w-5 !h-5 !fill-none"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="carousel-next carousel-nav-btn right-1" aria-label="Next screenshot">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="!w-5 !h-5 !fill-none"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div class="flex justify-center gap-2 pb-3 pt-1">
          ${screenshots.map((_, i) => `<button class="carousel-dot w-2 h-2 rounded-full bg-latte-overlay0 dark:bg-mocha-overlay0 transition-all duration-200 cursor-pointer hover:scale-150" aria-label="Go to screenshot ${i + 1}"></button>`).join("")}
        </div>
      </div>

      <div class="flex justify-center py-3">
        <a href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" class="app-store-badge inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:opacity-80 transition-opacity no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="!w-5 !h-6 !fill-white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
          <div class="flex flex-col leading-tight">
            <span class="text-[10px] font-light">Download on the</span>
            <span class="text-base font-semibold -mt-0.5">App Store</span>
          </div>
        </a>
      </div>

      <div class="text-sm p-4 pt-0">${project.description}</div>
    </article>
  `;
};

const projectTemplate = (project: Project): string => {
  if (project.name === "DailyGoal.fit") return dailyGoalTemplate(project);

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
    <p class="my-2 font-semibold">A nutrition, health, and fitness tracking app — available on the <strong>App Store</strong> and web — designed to build lasting discipline and consistency in wellness journeys.</p>

    <p class="my-2">DailyGoal.fit's philosophy centers on slow, sustainable progress that leads to meaningful, long-term improvements in both body composition and overall quality of life. The platform enables users to monitor daily food intake, track macronutrients, log workouts, set customizable goals, and measure progress through various metrics. A personalized onboarding flow calculates custom calorie, protein, and step targets based on individual body stats and fitness goals.</p>

    <h4 class="font-semibold mt-3 mb-1">Core Features:</h4>
    <ul class="m-2 p-2 list-disc list-outside space-y-1">
      <li><strong>Intelligent Nutrition Tracking</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>USDA food database with 500,000+ verified entries</li>
          <li>Barcode scanning via OpenFoodFacts integration</li>
          <li>Custom food, meal, and recipe builder</li>
          <li>Macronutrient analysis with visual progress rings</li>
        </ul>
      </li>
      <li><strong>Workout Tracking</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>Active workout logging with timer and rest intervals</li>
          <li>Exercise library with set-by-set tracking</li>
          <li>Pre-built workout templates (Push/Pull/Legs)</li>
          <li>1RM estimates and exercise progress charts</li>
        </ul>
      </li>
      <li><strong>Progress & Analytics</strong>
        <ul class="m-2 p-2 list-disc list-outside text-sm">
          <li>Weight, body fat, and strength trend charts</li>
          <li>Streak system with milestone celebrations</li>
          <li>Apple Health integration (read &amp; write)</li>
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
    <p class="text-sm">Built with React, React Native (Expo), TypeScript, Convex, and RevenueCat. Features real-time sync, Apple Health integration, and a native iOS experience alongside the web app.</p>
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
      <p>Uses genetic algorithms to evolve layered semi-transparent polygons, approximating a target image. The web version is built with StencilJS, Rust/WASM, and Firebase.</p>
      <p>Also built standalone versions in Java (multithreaded) and Rust with GPU-accelerated evolution (wgpu compute shaders), portable SIMD, and a Leptos/WASM real-time viewer.</p>
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
