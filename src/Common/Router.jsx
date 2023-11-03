import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Category from "../Pages/Category/Category";
import Checkout from "../Pages/Checkout/Checkout";
import Dashboard from "../Pages/CustomerDashboard/Dashboard";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Signup/SignUp";
import CategoryMobile from "../Pages/CategoryMobile/CategoryMobile";
import Wishlist from "../Pages/CustomerDashboard/_pages/Wishlist/Wishlist";
import CartPage from "../Pages/CustomerDashboard/_pages/CartPage/CartPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import Profile from "../Pages/CustomerDashboard/_pages/Profile/Profile";
import EditProfile from "../Pages/CustomerDashboard/_pages/Profile/EditProfile";
import Addresses from "../Pages/CustomerDashboard/_pages/Addresses/Addresses";
import Categories from "../Pages/Categories/Categories";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FAQ from "../Pages/FAQ/FAQ";
import SellerPrivateRoute from "./SellerPrivateRoute";
import EditSellerProfile from "../Pages/SellerDashboard/_pages/Profile/EditSellerProfile";
import SellerProfile from "../Pages/SellerDashboard/_pages/Profile/Profile";
import Products from "../Pages/SellerDashboard/_pages/Products/Products";
import AddProduct from "../Pages/SellerDashboard/_pages/Products/AddProduct";
import EditProduct from "../Pages/SellerDashboard/_pages/Products/EditProduct";
import Orders from "../Pages/SellerDashboard/_pages/Orders/Orders";
import SellerDashboard from "../Pages/SellerDashboard/Sellerdashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/details/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/categories",
        element: <Categories/>
      },
      {
        path: "/search/:query",
        element: <Category/>
      },
      {
        path: "/category-mobile",
        element: <CategoryMobile/>
      },
      
      // customer dashboard
      {
        path: "/customer-dashboard/orders",
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path: "/customer-dashboard/wishlist",
        element: <PrivateRoute><Wishlist/></PrivateRoute>
      },
      {
        path: "/customer-dashboard/cart",
        element: <CartPage/>
      },
      {
        path: "/customer-dashboard/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: "/customer-dashboard/profile/edit",
        element: <PrivateRoute><EditProfile/></PrivateRoute>
      },
      {
        path: "/customer-dashboard/addresses",
        element: <PrivateRoute><Addresses/></PrivateRoute>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout/></PrivateRoute>
      },

      // seller dashboard
      {
        path: "/seller-dashboard/dashboard",
        element: <SellerPrivateRoute>
          <SellerDashboard/>
        </SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/orders",
        element: <SellerPrivateRoute>
          <Orders/>
        </SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/products",
        element: <SellerPrivateRoute>
          <Products/>
        </SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/add-product",
        element: <SellerPrivateRoute>
          <AddProduct/>
        </SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/product/edit/:id",
        element: <SellerPrivateRoute>
          <EditProduct/>
        </SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/profile",
        element: <SellerPrivateRoute><SellerProfile/></SellerPrivateRoute>
      },
      {
        path: "/seller-dashboard/profile/edit",
        element: <SellerPrivateRoute><EditSellerProfile/></SellerPrivateRoute>
      },


      // common
      {
        path: "/sign-up",
        element: <SignUp/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/contact-us",
        element: <ContactUsPage/>
      },
      
    ],
  },
]);
