"use client";
import { LetterType } from "./page";

type LetterProps = {
  letter: LetterType;
  isHighlighted: boolean;
  onHover: (letter: LetterType) => void;
  onToggleStar: (letter: LetterType) => void;
};

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterProps) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onFocus={() => {
        onHover(letter);
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
