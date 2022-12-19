import React from "react";

import { GiCompass } from "react-icons/gi"
import { GiDiamondHard } from "react-icons/gi"
import { GiStabbedNote } from "react-icons/gi"

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam sunt voluptates debitis nihil? Doloribus ullam saepe eos nemo minima!"
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam sunt voluptates debitis nihil? Doloribus ullam saepe eos nemo minima!"
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam sunt voluptates debitis nihil? Doloribus ullam saepe eos nemo minima!"
  },
]

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = "https://course-api.com/react-store-single-product?id="