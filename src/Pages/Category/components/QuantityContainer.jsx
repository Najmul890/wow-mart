/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../Common/context/DataProvider";
import MinusIcon from "../../../Common/Icons/MinusIcon";
import DeleteIcon from "../../../Common/Icons/DeleteIcon";
import PlusIcon from "../../../Common/Icons/PlusIcon";


const QuantityContainer = ({ product, position }) => {
  const { cart, setCart,renderCart } = useContext(DataContext);
  const itm = cart?.length > 0 && cart.find((pd) => pd?.id == product?.id);
  
  
  const [selectedItem, setSelectedItem] = useState(itm);
  useEffect(()=>{
    const item = cart?.length > 0 && cart.find((pd) => pd?.id == product?.id);
     setSelectedItem(item)
  },[renderCart])
  const [quantity, setQuantity] = useState(selectedItem?.quantity);
  

  useEffect(()=>{
    setQuantity(selectedItem?.quantity)
  },[selectedItem.quantity])
  
  useEffect(() => {
    const result = [];
    cart.filter((item) => {
      if (item?.id == product?.id) {
        {
          item.quantity = quantity;
        }
      }
      result.push(item);
    });
    setCart(result);
    localStorage.setItem("cart", JSON.stringify(result));
  }, [quantity, product]);

  function handleRemoveFromCart(product) {
    const filteredCart = cart?.filter((item) => item?.id != product?.id);
    setCart(filteredCart);
  }

  return (
    <div className={`flex items-center ${position} gap-3 `}>
      {quantity > 1 ? (
        <span
          onClick={() => {
            quantity > 1 && setQuantity(Number(quantity) - 1);
          }}
          className="cursor-pointer btn btn-xs h-[30px] text-primary hover:bg-tertiary hover:border-primary border border-primary rounded  "
        >
          <MinusIcon />
        </span>
      ) : (
        <div
          className="cursor-pointer btn btn-xs w-[35px] h-[30px] text-primary hover:bg-tertiary hover:border-primary border border-primary rounded "
          onClick={() => handleRemoveFromCart(product)}
        >
          <DeleteIcon />
        </div>
      )}
      <span className="text-xl font-semibold ">
        <input
          className="w-[60px] border text-primary focus:outline-none rounded border-primary text-center "
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          value={ quantity?quantity:""}
        />
      </span>
      <a
        onClick={() => setQuantity(Number(quantity) + 1)}
        className="cursor-pointer btn btn-xs h-[30px] hover:bg-tertiary hover:border-primary text-primary border border-primary rounded full  "
      >
        <PlusIcon />
      </a>
    </div>
  );
};

export default QuantityContainer;
