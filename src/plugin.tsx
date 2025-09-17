import { OriginalComponent, SwaggerUISystem, SwaggerUIPlugin } from './interfaces';

const ClickableLinksPlugin = (): SwaggerUIPlugin => {
  return {
    wrapComponents: {
      highlightCode: (Original: OriginalComponent, system: SwaggerUISystem) => {
        class LinkifiedHighlightCode extends system.React.Component<any> {
          containerRef: any;
          constructor(props: any) {
            super(props);
            this.containerRef = null;
            this.setContainerRef = this.setContainerRef.bind(this);
          }

          setContainerRef(node: any) {
            this.containerRef = node;
          }

          componentDidMount() {
            if (this.containerRef) {
              setTimeout(() => {
                if (this.containerRef) {
                  this.linkifyTextInElement(this.containerRef);
                }
              }, 0);
            }
          }

          componentDidUpdate() {
            if (this.containerRef) {
              setTimeout(() => {
                if (this.containerRef) {
                  this.linkifyTextInElement(this.containerRef);
                }
              }, 0);
            }
          }

          linkifyTextInElement(element: HTMLElement) {
            const urlRegex = /(https?:\/\/[\S<>\"]+)/g;
            function processNode(node: Node): void {
              if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                if (text && urlRegex.test(text)) {
                  const temp = document.createElement('div');
                  temp.innerHTML = text.replace(
                    urlRegex,
                    '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">$1</a>'
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

          render() {
            return system.React.createElement(
              'div',
              { ref: this.setContainerRef },
              system.React.createElement(Original, { ...this.props })
            );
          }
        }
        return LinkifiedHighlightCode;
      }
    }
  };
};

export default ClickableLinksPlugin;