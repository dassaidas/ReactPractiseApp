import { lazy, Suspense } from "react";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import { ProductDetails } from "./ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SampleLayout from "./SampleLayout";
import LoginForm from "./Forms/LoginForm";
import UserProvider, { UserContext } from "../Context/UserProvider";

function RouteLayout() {
  const SearchFilter = lazy(() => import("./SearchFilter"));
  const ProductForm = lazy(() => import("./ProductForm"));
  const AddProductFormik = lazy(() =>
    import("./ProductsArea/AddProductFormik")
  );
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <NavigationBar />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="container">
              {/* <h1 className="text-center">
              Welcome to the Product Management App
            </h1> */}
            </div>
            <Routes>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/products" element={<SearchFilter />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
              <Route
                path="/product-view/:id"
                element={<ProductDetails />}
              ></Route>
              <Route path="/addProduct" element={<ProductForm />}></Route>
              <Route path="/SampleLayout" element={<SampleLayout />}></Route>
              <Route
                path="/addProductFormik"
                element={<AddProductFormik />}
              ></Route>
              <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
          </Suspense>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
export default RouteLayout;
