function sanitizeHTML<T extends HTMLElement>(type: string, textContent = ''): T {
  const element = <T>document.createElement(type);
  element.textContent = textContent;
  return element;
}

export { sanitizeHTML };
