"use client";
import { useEffect } from "react";

export default function DisableCopyPaste() {
  useEffect(() => {
    // Disable context menu (right-click menu)
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable copy
    const handleCopy = (e) => {
      e.preventDefault();
    };

    // Disable cut
    const handleCut = (e) => {
      e.preventDefault();
    };

    // Disable paste
    const handlePaste = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return null; // this component doesn't render anything
}
