"use client";
import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function RemoveItemShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts((products) => {
      return products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
    });
  }
  function handleDecreasesClick(productId: number) {
    const productsFiltered = products.filter((product) => product.count > 1);
    const productsMap = productsFiltered.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count - 1 };
      }
      return product;
    });
    setProducts(productsMap);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreasesClick(product.id);
            }}
          >
            {"-"}
          </button>
        </li>
      ))}
    </ul>
  );
}
