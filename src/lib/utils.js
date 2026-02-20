import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

// Utility function to merge class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Custom hook for syntax highlighting
export const useSyntaxHighlighting = (line, apiORres) => {
  // Use useMemo inside a custom hook
  const processedLine = React.useMemo(() => {
    const regex = /'[^']*'|"[^"]*"|\b(import|from|const|require|new|var|using|public|string|def|class|end|main|func|cURL)\b/g;

    return line.replace(regex, (match) => {
      if (apiORres === 'res') {
        return `<span class="${(match === `"ErrorCode"` || match === `"Message"` || match === `"Description"`) ? "text-purple-400" : "text-yellow-300"}">${match}</span>`;
      } else {
        if (match.startsWith('"') || match.startsWith("'")) {
          return `<span class="text-green-400">${match}</span>`;
        } else {
          return `<span class="text-purple-400">${match}</span>`;
        }
      }
    });
  }, [line, apiORres]);

  return <span dangerouslySetInnerHTML={{ __html: processedLine }} />;
};

// Example component using the custom hook
const MyComponent = ({ line, apiORres }) => {
  const highlightedLine = useSyntaxHighlighting(line, apiORres);
  
  return (
    <div>
      {highlightedLine}
    </div>
  );
};

export default MyComponent;
