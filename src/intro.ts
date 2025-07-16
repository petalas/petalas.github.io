export function setupAbout(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    <img src="images/nick3.jpeg" alt="Nick Petalas" class="w-full aspect-square rounded-lg shadow-lg" />
    <section class="col-span-1 lg:col-span-2 xl:col-span-3">${introText()}</section>
  `;
}

const introText = () => {
  return `
    <div class="p-4 md:p-6 flex flex-col gap-4">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold mb-2">Hi, I'm Nick</h2>
        <h3 class="text-xl md:text-2xl text-latte-subtext0 dark:text-mocha-subtext0">
          Senior Software Engineer
        </h3>
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
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Technology</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Engineering</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Fitness</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Personal Finance</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Travel</span>
            <span class="px-3 py-1 bg-latte-surface0 dark:bg-mocha-surface0 rounded-full text-sm">Photography</span>
          </div>
        </div>
      </div>
    </div>
  `;
};
