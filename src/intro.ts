export function setupAbout(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    <img src="images/nick3.jpeg" alt="Nick Petalas, Senior Software Engineer and Founder of DailyGoal.fit" class="w-full aspect-square rounded-lg shadow-lg" itemprop="image" />
    <section class="col-span-1 lg:col-span-2 xl:col-span-3" itemscope itemtype="https://schema.org/Person">${introText()}</section>
  `;
}

const introText = () => {
  return `
    <div class="p-4 md:p-6 flex flex-col gap-4">
      <div>
        <h1 id="about-heading" class="text-3xl md:text-4xl font-bold mb-2" itemprop="name">Hi, I'm Nick</h1>
        <h2 class="text-xl md:text-2xl text-latte-subtext0 dark:text-mocha-subtext0" itemprop="jobTitle">
          Senior Software Engineer
        </h2>
      </div>
      
      <div class="space-y-3 text-base md:text-lg">
        <p class="leading-relaxed">
          Based in <strong>London</strong>, originally from <strong>Greece</strong>. 
          I'm passionate about building elegant solutions to complex problems and creating 
          software that makes a meaningful impact.
        </p>
        
        <p class="leading-relaxed">
          Currently <strong>Founder & Lead Engineer</strong> at <a href="https://www.dailygoal.fit/" target="_blank" rel="noopener noreferrer" class="text-latte-blue dark:text-mocha-blue hover:underline"><code>DailyGoal.fit</code></a>, 
          where I'm building a platform to help people achieve their health and fitness goals 
          through consistency and simplicity.
        </p>
        
        <div class="pt-2">
          <p class="text-sm md:text-base text-latte-subtext1 dark:text-mocha-subtext1 mb-2">
            Interests & passions:
          </p>
          <div class="flex flex-wrap gap-2" role="list" aria-label="Personal interests">
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Technology</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Engineering</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Fitness</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Personal Finance</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">3D Printing</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Travel</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm" role="listitem">Photography</span>
          </div>
        </div>
      </div>
    </div>
  `;
};
