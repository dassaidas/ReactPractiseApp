import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <NavLink to="/home" className="navbar-brand">React Sample App</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addProduct" className="nav-link">Add Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/SampleLayout" className="nav-link">SampleLayout</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addProductFormik" className="nav-link">Add Product Formik</NavLink>
            </li>
          </ul>
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
