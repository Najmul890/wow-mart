import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import { DataContext } from "../../../../Common/context/DataProvider";
import Swal from "sweetalert2";
import PageBottom from "../../../../Common/PageBottom/PageBottom";

const EditProduct = () => {
  const { sellerProducts, setSellerProducts } = useContext(DataContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProduct = sellerProducts?.find((pd) => pd?.id == id);

  const [name, setName] = useState(selectedProduct?.name);
  const [category, setCategory] = useState(selectedProduct?.category);
  const [price, setPrice] = useState(selectedProduct?.price);
  const [specialPrice, setSpecialPrice] = useState(
    selectedProduct?.special_price
  );
  const [quantity, setQuantity] = useState(selectedProduct?.quantity);
  const [description, setDescription] = useState(selectedProduct?.description);

  const handleEditProduct = (e) => {
    e.preventDefault();

    const updatedProducts = [...sellerProducts];

    const productIndex = updatedProducts?.findIndex(
      (product) => product.id == id
    );

    if (productIndex !== -1) {
      const updatedProduct = {
        ...updatedProducts[productIndex],
        name: name,
        category: category,
        price: price,
        special_price: specialPrice,
        quantity: quantity,
        description: description,
      };

      updatedProducts[productIndex] = updatedProduct;

      setSellerProducts(updatedProducts);

      Swal.fire("Product updated successfully!", "", "success");

      navigate("/seller-dashboard/products");
    }
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
          <div className="flex justify-between">
            <div className="flex items-center gap-2 xs:gap-4">
              <div className="text-2xl xs:text-3xl text-primary font-semibold ">
                Edit Product
              </div>
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
          <form onSubmit={handleEditProduct}>
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
                  <option disabled selected>
                    Select category
                  </option>
                  <option>Fresh fruits</option>
                  <option>Fresh Vegetables</option>
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
              value="Update Product"
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

export default EditProduct;
