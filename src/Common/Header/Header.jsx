import React, { useContext, useState, useEffect, useCallback } from "react";
import "./Header.css";
import AccountIcon from "../MobileHeader/Icons/AccountIcon";
import CartIcon from "../MobileHeader/Icons/CartIcon";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { DataContext } from "../context/DataProvider";
import SearchIcon from "../Icons/SearchIcon";
import LoginIcon from "../Icons/LoginIcon";

const Header = () => {
  const { cart, products, user, setUser, setActive } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [items, setItems] = useState(null);
  const [productName, setProductName] = useState("");
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  // search functionality
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".product-list") &&
        !e.target.closest(".search-box")
      ) {
        setSearchDropdown(false);
      }
    });
  }, []);

  useEffect(() => {
    if (searchedText === "") {
      setItems(null);
    }
  }, [searchedText]);

  const handleSearch = useCallback(() => {
    if (searchedText !== "") {
      setLoading(true);
      const result = products?.filter((pd) =>
        pd?.title
          .toLowerCase()
          .includes(searchedText.trim().toLocaleLowerCase())
      );
      setItems(result);
      setLoading(false);
      setNotFound(false);
    } else {
      setLoading(false);
    }
  }, [searchedText]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(searchedText);
    }, 800);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchedText, handleSearch]);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchedText(value);
    setProductName("");
    setSearchDropdown(true);
  };

  const handleProductDetail = (item) => {
    setSearchedText(item?.title);
  };

  const handleNavigateCategory = () => {
    if (items?.length > 0) {
      navigate(`/search/${searchedText}`);
    }
    setSearchedText("");
  };

  let content;
  if (loading && items === null && searchedText?.length > 0) {
    content = <progress className="progress loading w-56"></progress>;
  }

  if (items?.length === 0 && searchedText?.length > 0) {
    content = (
      <p className=" text-secondary text-lg font-semibold absolute mt-[70px] ">
        No product found !
      </p>
    );
  }

  if (
    items?.length > 0 &&
    !loading &&
    items !== null &&
    searchedText?.length > 0 &&
    searchDropdown === true
  ) {
    content = (
      <ul className=" max-h-[300px] text-primary absolute mt-[70px] w-[85%] 2md:w-[65%] min-[1500px]:w-[61%] overflow-y-scroll z-50 shadow-lg bg-base-100 p-2 rounded-box">
        <h6 className="text-xs text-primary mt-2 mb-1 ml-3">Suggestions</h6>
        {items?.map((product, index) => (
          <Link key={index} to={`/product/details/${product?.id}`}>
            <li
              className="hover:bg-[#F6F9FC] rounded"
              onClick={() => handleProductDetail(product)}
            >
              <div className="p-3 pt-2">
                <div className="text-sm flex gap-3 items-center cursor-pointer">
                  <img width={30} src={product?.img[0]} alt={product?.img[0]} />
                  <div>
                    <h6 className="font-semibold">{product?.title}</h6>
                    <h6 className="font-semibold">${product?.price}</h6>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Cart />
      <div className="desktop-nav sticky top-0 z-10 section-container">
        <Link
          to="/"
          className="font-semibold text-center 2md:text-left text-3xl text-primary "
        >
          Site Logo
        </Link>
        <div className="form-control basis-full 2md:basis-[70%] ">
          <div className="input-group">
            <input
              value={searchedText}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search…"
              className="input w-full text-primary focus:outline-none border-primary "
            />
            <button
              onClick={handleNavigateCategory}
              className="btn border border-primary hover:bg-primary hover:border-primary bg-primary text-tertiary"
            >
              <SearchIcon />
            </button>
          </div>
          {content}
        </div>
        <div className=" hidden 2md:flex gap-4 items-center ">
          {user?.name ? (
            <div className="rounded-full dropdown text-primary bg-[#f3f5f9] p-[12px] ">
              <label
                className="hover:text-secondary cursor-pointer"
                tabIndex={0}
              >
                <AccountIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[150] menu py-2 px-1 mt-4 ml-[-40px] shadow bg-base-100 border w-[120px] rounded-box "
              >
                <li onClick={()=>setActive(user && user.role === "user" ? "orders" : "dashboard" )} >
                  <Link
                    to={
                      user && user.role === "user"
                        ? "/customer-dashboard/orders"
                        : "seller-dashboard/dashboard"
                    }
                    className="hove:text-primary"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <div
                    onClick={handleLogout}
                    className="hove:text- cursor-pointer"
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="rounded-full text-primary hover:text-secondary bg-[#f3f5f9] p-[12px] ">
              <Link to="/login" className="hover:text-secondary cursor-pointer">
                <LoginIcon />
              </Link>
            </div>
          )}

          <label
            htmlFor="cart-drawer"
            className="rounded-full hover:text-secondary cursor-pointer text-primary bg-[#f3f5f9] relative p-[10px] "
          >
            <CartIcon />
            <div className="flex justify-center items-center bg-primary text-base text-tertiary absolute top-[-10px] right-[-5px] px-1.5 rounded-full ">
              {cart?.length}
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
