import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

/**
 * TypewriterEffect Component
 * Design: Cyberpunk Neon Minimalism
 * Features: Animated text typing effect with cursor
 */
export default function TypewriterEffect({ text, speed = 50, delay = 0 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const type = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, speed);
      } else {
        setIsComplete(true);
      }
    };

    const startTimeout = setTimeout(type, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return (
    <span className="inline-block">
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-1 h-12 ml-1 bg-primary animate-pulse" />
      )}
    </span>
  );
}
