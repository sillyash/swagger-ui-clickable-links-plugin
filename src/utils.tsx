import React from 'react';

// Function to make URLs clickable in text
export const makeLinksClickable = (text: string): React.ReactNode => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split text by URLs and create clickable links
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0969da',
            textDecoration: 'underline',
          }}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
