import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 
                 text-sm font-medium text-white bg-primary rounded-lg 
                 hover:bg-primary/90 active:scale-[0.98] transform transition-all 
                 duration-200 ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied to Clipboard!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Service Number
        </>
      )}
    </button>
  );
}
