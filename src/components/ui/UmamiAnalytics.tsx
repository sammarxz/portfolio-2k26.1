import { useEffect } from "react";

interface UmamiProps {
  websiteId: string;
}

export default function UmamiAnalytics({ websiteId }: UmamiProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadAnalytics = () => {
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://cloud.umami.is/script.js";
      script.setAttribute("data-website-id", websiteId);
      script.async = true;
      
      document.head.appendChild(script);
    };

    if (document.readyState === "complete") {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadAnalytics, { timeout: 2000 });
      } else {
        setTimeout(loadAnalytics, 2000);
      }
    } else {
      window.addEventListener("load", () => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(loadAnalytics, { timeout: 2000 });
        } else {
          setTimeout(loadAnalytics, 2000);
        }
      });
    }
  }, [websiteId]);

  return null;
}
