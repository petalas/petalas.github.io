export function setupAbout(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    <img src="images/nick3.jpeg" alt="Nick Petalas" class="w-full aspect-square" />
    <section class="col-span-1 lg:col-span-2 xl:col-span-3">${introText()}</section>
  `;
}

const introText = () => {
  return `
    <div class="p-2">
      <h2 class="text-2xl">Hi, I'm Nick</h2>
      <h3 class="text-xl">Senior Software Engineer based in London, originally from Greece.</h3>
      <h4 class="text-lg">
        I strive for constant self-improvement, enjoy lifelong learning and knowledge sharing.
      </h4>
      <h4 class="text-lg">
        I'm mainly interested in technology, engineering, computers, fitness, personal finance, travel, photography.
      </h4>
    </div>
  `;
};
