"use client";

import { ItemType } from "./page";
import "./styles.css";

type PackingListProps = {
  items: ItemType[];
  onDeleteItem: (itemId: number) => void;
  onChangeItem: (item: ItemType) => void;
};

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
}: PackingListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
