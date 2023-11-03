/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from "react";
import lemon from "../../../../../../assets/lime.png";
import orange from "../../../../../../assets/Orange.png";
import MinusIcon from "../../../../../../Common/Icons/MinusIcon";
import PlusIcon from "../../../../../../Common/Icons/PlusIcon";
import { DataContext } from "../../../../../../Common/context/DataProvider";
import { checkAddedToCart } from "../../../../../../Common/customFunctions/checkAddToCart";

const ProductModal = ({ selectedProduct, setSelectedProduct }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(selectedProduct?.quantity);
  const { renderCart , setRenderCart } = useContext(DataContext);

  useEffect(()=>{
    if(selectedProduct){
      setSelectedImage(selectedProduct?.img);
    }
  },[selectedProduct])

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart,setCart] = useState(cartItems);

  const handleAddToCart = (product) => {
    product.quantity = quantity;
   setRenderCart(renderCart+1);
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };


  useEffect(() => {
    const result = [];
    cart.filter((item) => {
      if (item?.id == selectedProduct?.id) {
        {
          item.quantity = quantity;
        }
      }
      result.push(item);
    });
    localStorage.setItem('cart', JSON.stringify(result)) ;
  }, [quantity, selectedProduct]);

  useEffect(() => {
    setQuantity(selectedProduct?.quantity);
  }, [selectedProduct]);

  useEffect(()=>{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems)
  },[renderCart])

  
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box w-10/12 ">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="flex gap-0 flex-col 2md:flex-row 2md:gap-5 mx-auto ">
          <div className="basis-1/2">
            <img src={selectedImage} alt="" />
          </div>
          <div className="flex 2md:hidden mx-auto  my-6 gap-5">
          <div
            onClick={() => setSelectedImage(selectedProduct?.img)}
            className={`border ${
              selectedImage === selectedProduct?.img && "border-primary p-1"
            } rounded-xl`}
          >
            <img width={70} height={70} src={selectedProduct?.img} alt="" />
          </div>
          <div
            onClick={() => setSelectedImage(orange)}
            className={`border ${
              selectedImage === orange && "border-primary"
            } rounded-xl`}
          >
            <img width={70} height={70} src={orange} alt="" />
          </div>
          <div
            onClick={() => setSelectedImage(lemon)}
            className={`border ${
              selectedImage === lemon && "border-primary"
            } rounded-xl`}
          >
            <img width={70} height={70} src={lemon} alt="" />
          </div>
        </div>
          <div className="pt-0 basis-full 2md:basis-1/2  pb-10 2md:pb-[60px] 2md:mx-0 text-primary">
            <div className="">
              <h3 className="font-semibold text-2xl mb-1">
                {selectedProduct?.title}
              </h3>
              <h5 className="text-lg mb-4">Brand: Ziaomi</h5>
              <div className="flex items-center gap-3 ">
                <span
                  onClick={() => {
                    quantity > 1 && setQuantity(Number(quantity) - 1);
                  }}
                  className="cursor-pointer btn btn-xs h-[30px] text-primary hover:bg-tertiary hover:border-primary border border-primary rounded full "
                >
                  <MinusIcon />
                </span>
                <span className="text-xl font-semibold ">
                  <input
                    className="w-[60px] border text-primary focus:outline-none rounded border-primary text-center "
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    value={quantity}
                  />
                </span>
                <a
                  onClick={() => setQuantity(Number(quantity) + 1)}
                  className="cursor-pointer btn btn-xs h-[30px] hover:bg-tertiary hover:border-primary text-primary border border-primary rounded full  "
                >
                  <PlusIcon />
                </a>
              </div>
              <h4 className="text-3xl mt-5 mb-5 font-semibold ">
                ${selectedProduct?.price * Number(quantity)}
              </h4>

              {checkAddedToCart(cart,selectedProduct) ? (
                <div className="btn btn-disabled btn-md hover:bg-primary main-btn mt-5">
                  Added to Cart
                </div>
              ) : (
                <a
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="btn btn-md hover:bg-primary main-btn cursor-pointer mt-5"
                >
                  Add To Cart
                </a>
              )}
            </div>
          </div>
        </div>
        {/* image slider */}
        <div className="hidden 2md:flex gap-5">
          <div
            onClick={() => setSelectedImage(selectedProduct?.img)}
            className={`border ${
              selectedImage === selectedProduct?.img && "border-primary p-1"
            } rounded-xl`}
          >
            <img width={70} height={70} src={selectedProduct?.img} alt="" />
          </div>
          <div
            onClick={() => setSelectedImage(orange)}
            className={`border ${
              selectedImage === orange && "border-primary"
            } rounded-xl`}
          >
            <img width={70} height={70} src={orange} alt="" />
          </div>
          <div
            onClick={() => setSelectedImage(lemon)}
            className={`border ${
              selectedImage === lemon && "border-primary"
            } rounded-xl`}
          >
            <img width={70} height={70} src={lemon} alt="" />
          </div>
          
        </div>
      </form>
    </dialog>
  );
};

export default ProductModal;
