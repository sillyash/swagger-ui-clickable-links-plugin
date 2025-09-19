import { OriginalComponent, SwaggerUISystem, SwaggerUIPlugin } from './interfaces';
import { linkifyTextInElement } from './linkify';

// Reusable wrapper class for linkification
function createLinkifiedWrapper(system: SwaggerUISystem, regex: RegExp) {
  return class LinkifiedWrapper extends system.React.Component<any> {
    containerRef: any = null;
    setContainerRef = (node: any) => { this.containerRef = node; };

    componentDidMount() {
      if (this.containerRef) {
        setTimeout(() => linkifyTextInElement(this.containerRef, regex), 0);
      }
    }
    componentDidUpdate() {
      if (this.containerRef) {
        setTimeout(() => linkifyTextInElement(this.containerRef, regex), 0);
      }
    }
    render() {
      const { Original, ...rest } = this.props;
      return system.React.createElement(
        'div',
        { ref: this.setContainerRef },
        system.React.createElement(Original, rest)
      );
    }
  };
}


const ClickableLinksPlugin = (): SwaggerUIPlugin => {
  return {
    wrapComponents: {
      highlightCode: (Original: OriginalComponent, system: SwaggerUISystem) => {
        const regex = RegExp(/https?:\/\/[^\s"'`<>()\[\]{}]+/g);
        const LinkifiedWrapper = createLinkifiedWrapper(system, regex);
        return (props: any) => system.React.createElement(LinkifiedWrapper, { Original, ...props });
      },
    }
  }
};

export default ClickableLinksPlugin;