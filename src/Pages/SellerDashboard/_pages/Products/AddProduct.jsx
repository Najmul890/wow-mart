/* eslint-disable react/no-unknown-property */
import React, { useContext, useState, useEffect } from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileIcon from "../../../../Common/Icons/ProfileIcon";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../Common/context/DataProvider";
import Swal from "sweetalert2";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const AddProduct = () => {
  const { user, sellerProducts, setSellerProducts, categories } =
    useContext(DataContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("working");
    const product = {};

    (product.id = sellerProducts?.length + 1),
      (product.seller_id = user?.id),
      (product.name = name);
    product.category = category;
    product.price = price;
    product.special_price = specialPrice;
    product.quantity = quantity;
    product.status = "pending";
    product.description = description;

    setSellerProducts([...sellerProducts, product]);

    Swal.fire("Product added successfully!", "", "success");

    setName("");
    setPrice("");
    setCategory("");
    setQuantity("");
    setSpecialPrice("");
    setDescription("");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <MobileSidebar />
      <div className="section-container flex py-10">
        <Sidebar />
        <div className=" w-full pl-0 2md:pl-7 2md:w-[calc(100%-280px)] ">
          <div className="flex justify-between items-center">
            <div className="text-2xl mt-[-4px] 2md:mt-0 xs:text-3xl leading-none text-primary font-semibold ">
              Add Product
            </div>

            <div>
              <Link
                to="/seller-dashboard/products"
                className=" btn rounded-[30px] btn-sm btn-primary bg-primary text-tertiary font-semibold capitalize border-primary hover:bg-primary "
              >
                Back
              </Link>
            </div>
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 gap-4 2md:gap-6 ">
              <div className="mt-3">
                <label className="text-primary">Name</label> <br />
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full  "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Category</label> <br />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select text-primary mt-3 select-bordered w-full "
                >
                  <option value="">Select category</option>
                  {categories?.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="mt-3">
                <label className="text-primary">Quantity</label> <br />
                <input
                  required
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Price</label> <br />
                <input
                  required
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>
              <div className="mt-3 pb-2">
                <label className="text-primary">Image</label> <br />
                <input
                  type="file"
                  className="file-input mt-3 file-input-bordered w-full"
                />
              </div>
              <div className="mt-3">
                <label className="text-primary">Special Price</label> <br />
                <input
                  type="number"
                  value={specialPrice}
                  onChange={(e) => setSpecialPrice(e.target.value)}
                  placeholder="Special Price"
                  className="input input-bordered focus:outline-none text-primary mt-3 w-full "
                />
              </div>

              <div className="mt-1">
                <label className="text-primary">Description</label> <br />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea w-full h-[150px] mt-3 textarea-bordered"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Add Product"
              className=" mt-3 cursor-pointer capitalize main-btn"
            />
          </form>
        </div>
      </div>
      <div className="section-container">
        <PageBottom />
      </div>
    </>
  );
};

export default AddProduct;
