/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import orange from "../../assets/Orange.png";
import apple from "../../assets/Red apple.png";
import strawberry from "../../assets/strawberry.png";
// import mixFruits from "../../../../assets/Bowl-of-fruit-5155e6f.jpg";
import potato from "../../assets/potato.png";
import onion from "../../assets/onion.png";
import lemon from "../../assets/lime.png";
import redChili from "../../assets/red-chili.jpg";
import pepper from "../../assets/MiniPeppers.png";
import cookingOil from "../../assets/cooking-oil.png";
import salt from "../../assets/salt.png";
import birianiMasala from "../../assets/biriani-mosola.png";
import coconutMilk from "../../assets/coconut-milk.png";

export const DataContext = createContext(null);

const productsData = [
  {
    title: "Orange fruit fruit fruit",
    id: 1,
    price: 10,
    quantity: 1,
    category: "fruit",
    img: [orange, lemon, orange],
    rating: 3,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Red Apple",
    id: 2,
    price: 20,
    quantity: 1,
    category: "fruit",
    img: [apple, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Strawberry",
    id: 3,
    price: 25,
    quantity: 1,
    category: "fruit",
    img: [strawberry, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Lemon",
    id: 7,
    price: 12,
    quantity: 1,
    category: "fruit",
    img: [lemon, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Lemon2",
    id: 18,
    price: 12,
    quantity: 1,
    category: "fruit",
    img: [lemon, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Lemon3",
    id: 19,
    price: 12,
    quantity: 1,
    category: "fruit",
    img: [lemon, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Potato",
    id: 5,
    price: 15,
    quantity: 1,
    category: "vegetable",
    img: [potato, lemon, orange],
    rating: 2,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Onion",
    id: 6,
    price: 18,
    quantity: 1,
    category: "vegetable",
    img: [onion, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },

  {
    title: "Red Chili",
    id: 8,
    price: 10,
    quantity: 1,
    category: "vegetable",
    img: [redChili, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Pepper",
    id: 9,
    price: 15,
    quantity: 1,
    category: "vegetable",
    img: [pepper, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Pepper2",
    id: 16,
    price: 15,
    quantity: 1,
    category: "vegetable",
    img: [pepper, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Pepper3",
    id: 17,
    price: 15,
    quantity: 1,
    category: "vegetable",
    img: [pepper, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Cooking Oil",
    id: 10,
    price: 20,
    quantity: 1,
    category: "grocery",
    img: [cookingOil, lemon, orange],
    rating: 3,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Salt",
    id: 11,
    price: 5,
    quantity: 1,
    category: "grocery",
    img: [salt, lemon, orange],
    rating: 4,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Biriani Masala",
    id: 12,
    price: 8,
    quantity: 1,
    category: "grocery",
    img: [birianiMasala, lemon, orange],
    rating: 3,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Coconut Milk",
    id: 13,
    price: 12,
    quantity: 1,
    category: "grocery",
    img: [coconutMilk, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Coconut Milk2",
    id: 14,
    price: 12,
    quantity: 1,
    category: "grocery",
    img: [coconutMilk, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
  {
    title: "Coconut Milk3",
    id: 15,
    price: 12,
    quantity: 1,
    category: "grocery",
    img: [coconutMilk, lemon, orange],
    rating: 5,
    reviews: [
      {
        user: "Joe Kenan",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
      },
    ],
  },
];

const categories = [
  "Fresh Fruit",
  "Fresh Vegetable",
  "Fresh Grocery",
  "Fresh Fish",
  "Fresh Meat",
  "Fresh Chicken",
  "Fresh Rice",
  "Fresh Sweet",
];


const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [renderCart, setRenderCart] = useState(1);
  const [user, setUser] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [active, setActive] = useState("dashboard");
  const [sellerProducts, setSellerProducts] = useState([
    {
      id: 1,
      seller_id: 14,
      name: "Fresh Apple",
      category:"Fresh Fruits",
      image: apple,
      price: 55,
      special_price: 45,
      status: "pending",
      quantity: 110,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laudantium at obcaecati!",
    },
    {
      id: 2,
      seller_id: 14,
      name: "Fresh Lemon",
      category:"Fresh Fruits",
      image: lemon,
      price: 50,
      special_price: 40,
      status: "pending",
      quantity: 120,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laudantium at obcaecati!",
    },
  ]);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      user_id: 4,
      location:"Home",
      address: "New York Street Road, USA",
      phone: "+777777777",
    },
    
  ]);

  console.log(user);

  
  useEffect(() => {
    if (cart.length === 0) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(cartItems);
    }
  }, []);

  

  const value = {
    user,
    setUser,
    cart,
    setCart,
    products,
    setProducts,
    wishList,
    setWishList,
    renderCart,
    setRenderCart,
    categories,
    category,
    setCategory,
    addresses,
    setAddresses,
    active,
    setActive,
    sellerProducts,
    setSellerProducts,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
