"use client";

import { useState } from "react";
import AddItem from "./addItem";
import PackingList from "./packingList";
import "./styles.css";

export type ItemType = {
  id: number;
  title: string;
  packed: boolean;
};

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  // const [total, setTotal] = useState(3);
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  // const [packed, setPacked] = useState<number[]>(() => {
  //   const elements = [];
  //   for (let index = 0; index < items.length; index++) {
  //     const element = items[index];
  //     if (element.packed === true) {
  //       elements.push(element.id);
  //     }
  //   }
  //   return elements;
  // });

  function handleAddItem(title: string) {
    // setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem: ItemType) {
    // if (packed.includes(nextItem.id)) {
    //   setPacked((packed) =>
    //     packed.filter((currentPacked) => nextItem.id !== currentPacked)
    //   );
    // } else {
    //   setPacked((packed) => [...packed, nextItem.id]);
    // }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId: number) {
    // setTotal(total - 1);
    // setPacked((packed) => packed.filter((curr) => curr !== itemId));
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
