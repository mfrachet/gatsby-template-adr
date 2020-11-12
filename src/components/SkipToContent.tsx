import React, { useState } from "react";
import { visuallyHiddenStyle } from "./VisuallyHidden";

const DESTINATION_ID = `mfrachet-content`;

export const SkipToContent: React.FC<React.HTMLAttributes<HTMLAnchorElement>> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <a
      css={(theme) =>
        isVisible
          ? {
              padding: theme.spaces[2],
              background: theme.colors.background2,
              top: theme.spaces[2],
              left: theme.spaces[2],
              position: "absolute",
              zIndex: 9999,
            }
          : visuallyHiddenStyle
      }
      href={`#${DESTINATION_ID}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export const SkipToContentDestination: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div id={DESTINATION_ID} {...props} />;
};
