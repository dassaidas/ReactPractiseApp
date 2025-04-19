import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList.jsx"; // Adjust the path as necessary
import { categoriesData } from "../Data/SampleData.jsx";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const sampleData = categoriesData; // Assuming categoriesData is imported from SampleData.jsx;
  const [filteredCategories, setFilteredCategories] = useState(sampleData);
  const [totalFilteredProducts, setTotalFilteredProducts] = useState([]);

  //setSearchTerm is used to set the search term
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter categories based on the search term
  const handleSearchClear = () => {
    setSearchTerm("");
    setFilteredCategories(sampleData); // Reset the dropdown options
  };

  //event to notify when products are filtered from child component
  const onProductsFiltered = (message) => {
    //alert(message);
    setTotalFilteredProducts(message);
  };

  return (
    <>
      <div className="col-sm-12 mt-5">
        <h2>Products List</h2>
        <div className="row">
          <div className="col-sm-6">
            <select
              onChange={handleSearch}
              className="form-select"
              value={searchTerm} // Bind the value to reset the dropdown
            >
              <option value="">Select Category</option>
              {filteredCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <input
              type="button"
              value="Clear"
              className="btn btn-primary align-right"
              onClick={handleSearchClear}
            />
          </div>
        </div>
      </div>
      <hr />

      <ProductsList selectedTerm={searchTerm} notifyMessage={(e)=>onProductsFiltered(e)}/>
        <h6 className="text-right text-success">{totalFilteredProducts}</h6>
    </>
  );
}

export default SearchFilter;
