"use client";

import React, { useState, useEffect, useRef } from "react";

export interface TypewriterTextProps {
  /** The full text string to be typed out */
  text: string;
  /** Base speed per character in ms (default: 72) */
  speed?: number;
  /** Initial delay before typing starts in ms (default: 350) */
  delay?: number;
  /** Custom class name */
  className?: string;
  /** Custom cursor styling */
  cursorClassName?: string;
  /** Whether to show cursor (default: true) */
  showCursor?: boolean;
  /** Re-trigger the typing animation whenever the element scrolls back into view (default: true) */
  replayOnScroll?: boolean;
}

export function TypewriterText({
  text,
  speed = 72,
  delay = 350,
  className = "",
  cursorClassName = "",
  showCursor = true,
  replayOnScroll = true,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [inView, setInView] = useState(false);

  // 1. Viewport Visibility Tracking via IntersectionObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect reduced motion accessibility
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsFinished(true);
      return;
    }

    if (!replayOnScroll) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          // When scrolled completely out of view, reset so it re-types upon return
          setInView(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [replayOnScroll, text]);

  // 2. Typing Animation Loop based on inView & text
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsFinished(true);
      setIsTyping(false);
      return;
    }

    if (!inView) {
      setDisplayedText("");
      setIsTyping(false);
      setIsFinished(false);
      return;
    }

    // In view: start typing sequence from start
    setDisplayedText("");
    setIsFinished(false);
    setIsTyping(false);

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(() => {
      setIsTyping(true);

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));

          const char = text[currentIndex - 1];
          // Organic human typing cadence: base speed ± variance
          let nextDelay = speed + (Math.random() * 36 - 18);

          // Natural word transition pause (pressing spacebar between words)
          if (char === " ") {
            nextDelay += 85;
          }
          // Punctuation pauses (end of clause or sentence)
          else if (char === "." || char === "?" || char === "!") {
            nextDelay += 420;
          } else if (char === "," || char === ";" || char === "—") {
            nextDelay += 240;
          }
          // Occasional subtle micro-hesitation (natural thinking rhythm)
          else if (Math.random() < 0.07) {
            nextDelay += 140;
          }

          timeoutId = setTimeout(typeNextChar, Math.max(30, nextDelay));
        } else {
          setIsTyping(false);
          setIsFinished(true);
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [inView, text, speed, delay]);

  return (
    <span
      ref={containerRef}
      className={`inline relative ${className}`}
      aria-label={text}
      suppressHydrationWarning
    >
      {/* Screen-reader accessible full text */}
      <span className="sr-only">{text}</span>

      {/* Visible typing text with no-orphan cursor */}
      {(() => {
        const lastSpace = displayedText.lastIndexOf(" ");
        if (lastSpace === -1) {
          return (
            <span aria-hidden="true" className="inline-block whitespace-nowrap">
              {displayedText}
              {showCursor && (
                <span
                  aria-hidden="true"
                  className={`inline-block w-[3.5px] sm:w-[4.5px] lg:w-[5.5px] h-[0.85em] ml-1.5 -mb-[0.05em] rounded-full bg-[#0284C7] shadow-[0_0_10px_#38BDF8] align-baseline transition-opacity duration-150 ${
                    isTyping ? "opacity-100" : "animate-cursor-blink"
                  } ${cursorClassName}`}
                />
              )}
            </span>
          );
        }

        const prefix = displayedText.slice(0, lastSpace + 1);
        const currentWord = displayedText.slice(lastSpace + 1);

        return (
          <span aria-hidden="true">
            <span>{prefix}</span>
            <span className="inline-block whitespace-nowrap">
              {currentWord}
              {showCursor && (
                <span
                  aria-hidden="true"
                  className={`inline-block w-[3.5px] sm:w-[4.5px] lg:w-[5.5px] h-[0.85em] ml-1.5 -mb-[0.05em] rounded-full bg-[#0284C7] shadow-[0_0_10px_#38BDF8] align-baseline transition-opacity duration-150 ${
                    isTyping ? "opacity-100" : "animate-cursor-blink"
                  } ${cursorClassName}`}
                />
              )}
            </span>
          </span>
        );
      })()}
    </span>
  );
}

export default TypewriterText;
