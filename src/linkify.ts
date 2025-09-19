// Utility to linkify URLs in a DOM element
export function linkifyTextInElement(element: HTMLElement, regex: RegExp) {
  function processNode(node: Node): void{
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;

      if (text && regex.test(text)) {
        const temp = document.createElement('div');
        temp.innerHTML = text.replace(
          regex,
          (match) =>
            `<a href="${match}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">${match}</a>`
        );

        const fragment = document.createDocumentFragment();
        while (temp.firstChild) {
          fragment.appendChild(temp.firstChild);
        }
        node.parentNode?.replaceChild(fragment, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName !== 'A') {
      Array.from(node.childNodes).forEach(child => processNode(child));
    }
  }
  processNode(element);
}
