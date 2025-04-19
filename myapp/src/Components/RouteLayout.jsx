import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import { ProductDetails } from "./ProductDetails";
import ProductForm from "./ProductForm";
import SearchFilter from "./SearchFilter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RouteLayout() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/products" element={<SearchFilter />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/product-view/:id" element={<ProductDetails />}></Route>
          <Route path="/addProduct" element={<ProductForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouteLayout;
