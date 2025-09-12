import React from 'react';
import ClickableResponse from './components/ClickableResponse';
import { makeLinksClickable } from './utils';

// Plugin interface for Swagger UI
interface SwaggerUIPlugin {
  components?: {
    [key: string]: React.ComponentType<any>;
  };
  wrapComponents?: {
    [key: string]: (
      Original: React.ComponentType<any>,
      system: any
    ) => React.ComponentType<any>;
  };
}

// Main plugin definition
const ClickableLinksPlugin = (): SwaggerUIPlugin => {
  return {
    components: {
      ClickableResponse,
    },
    wrapComponents: {
      // Wrap the response component to make links clickable
      ResponseBody: (Original: React.ComponentType<any>, system: any) => {
        return (props: any) => {
          const { content } = props;

          // If content is a string, make links clickable
          if (typeof content === 'string') {
            const clickableContent = makeLinksClickable(content);
            return <Original {...props} content={clickableContent} />;
          }

          return <Original {...props} />;
        };
      },

      // Wrap the description component to make links clickable
      Description: (Original: React.ComponentType<any>, system: any) => {
        return (props: any) => {
          const { source } = props;

          if (typeof source === 'string') {
            const clickableSource = makeLinksClickable(source);
            return <Original {...props} source={clickableSource} />;
          }

          return <Original {...props} />;
        };
      },
    },
  };
};

export default ClickableLinksPlugin;
