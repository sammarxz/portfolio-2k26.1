import { useState, useEffect } from "react";

const EMAIL = "sammarxz@proton.me";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "c" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")
      ) {
        copyEmail();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <header>
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-5 animate-in delay-100">
          <div className="relative inline-block group">
            <img
              src="/images/profile.png"
              alt="Sam Marxz profile photo"
              width="56"
              height="56"
              className="h-14 w-14 rounded-xl object-cover"
            />
            <div className="absolute -bottom-1.5 left-[calc(100%-12px)] z-10">
              <div className="flex items-center bg-canvas rounded-full p-[3px]">
                <div
                  className="h-3 w-3 bg-emerald-500 rounded-full"
                  aria-hidden="true"
                ></div>
                <div className="w-0 group-hover:w-[148px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="text-xs font-semibold text-ink whitespace-nowrap pl-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 uppercase tracking-wide block">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 animate-in delay-150">
          <h1 className="text-lg font-medium leading-tight text-ink flex items-center gap-1.5 mb-1">
            Sam Marxz
            <img
              src="/images/badge.svg"
              alt=""
              aria-hidden="true"
              width="18"
              height="18"
            />
          </h1>
          <p className="text-dim">Full-stack Engineer</p>
        </div>

        <p className="mb-6 leading-relaxed text-dim animate-in delay-200">
          I'm Sam, a Frontend Engineer expanding into full-stack. Years shipping
          pixel-perfect interfaces taught me that great products aren't built in
          layers — they're built whole. Now I'm closing the gap: from the component
          to the API, from the design system to the database.
        </p>

        <div className="flex items-center animate-in delay-300">
          <button
            onClick={copyEmail}
            className="hidden sm:flex items-center gap-2 text-dim hover:text-ink transition-colors group cursor-pointer"
            aria-label="Copy email to clipboard"
            aria-live="polite"
            aria-atomic="true"
          >
            {copied ? (
              <span className="text-accent">Copied!</span>
            ) : (
              <>
                Press
                <span className="flex h-5 w-5 items-center justify-center rounded bg-surface border border-rim text-xs font-mono text-ink shadow-(--shadow-card-inset) group-hover:bg-lift transition-colors">
                  C
                </span>
                to copy my email
              </>
            )}
          </button>

          <a
            href="mailto:sammarxz@proton.me"
            className="w-full sm:hidden items-center justify-center inline-flex rounded-full px-5 py-2.5 font-medium cursor-pointer text-base transition-colors bg-lift border border-wire text-ink shadow-(--shadow-btn-inset) hover:bg-rim active:shadow-(--shadow-btn-active)"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
