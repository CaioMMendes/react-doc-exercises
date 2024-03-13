"use client";

import { useState } from "react";
import { initialLetters } from "./data";
import Letter from "./letters";

export type LetterType = {
  id: number;
  subject: string;
  isStarred: boolean;
};

export default function MailClient() {
  const [letters, setLetters] = useState<LetterType[]>(initialLetters);

  const [highlightedLetter, setHighlightedLetter] = useState<number | null>(
    null
  );

  function handleHover(letter: LetterType) {
    setHighlightedLetter(letter.id);
  }

  function handleStar(starred: LetterType) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedLetter}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
