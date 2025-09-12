import React from 'react';
import { makeLinksClickable } from '../utils';

interface ClickableResponseProps {
  content?: any;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A custom response component that makes URLs in the content clickable
 */
const ClickableResponse: React.FC<ClickableResponseProps> = ({
  content,
  className = '',
  style = {},
}) => {
  // Handle different types of content
  const renderContent = () => {
    if (!content) {
      return null;
    }

    // If content is a string, make links clickable
    if (typeof content === 'string') {
      return (
        <div className={`clickable-response ${className}`} style={style}>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {makeLinksClickable(content)}
          </pre>
        </div>
      );
    }

    // If content is an object, stringify it and make links clickable
    if (typeof content === 'object') {
      try {
        const stringContent = JSON.stringify(content, null, 2);
        return (
          <div className={`clickable-response ${className}`} style={style}>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {makeLinksClickable(stringContent)}
            </pre>
          </div>
        );
      } catch (error) {
        // Fallback to string representation
        return (
          <div className={`clickable-response ${className}`} style={style}>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {makeLinksClickable(String(content))}
            </pre>
          </div>
        );
      }
    }

    // For other types, convert to string and make links clickable
    return (
      <div className={`clickable-response ${className}`} style={style}>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {makeLinksClickable(String(content))}
        </pre>
      </div>
    );
  };

  return renderContent();
};

export default ClickableResponse;
