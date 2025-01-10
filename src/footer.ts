export function setupFooter(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `© ${new Date().getFullYear()}, Nick Petalas`;
}
