import React, { Component, useState, useEffect } from "react";
import "../styles/createProduct.css";

import Layout from "../components/layout";
import { Input, Select, TextArea } from "../components/input";
import Button from "../components/button";
import Table from "../components/table";

function CreateProduct1() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);

  //fungsi search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // handle search
  function handleSearch() {
    const filteredResults = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }

  // fungsi hapus

  function handleDelete() {
    if (searchResults.length > 0) {
      const updatedSearchResults = [...searchResults];
      updatedSearchResults.pop();
      setSearchResults(updatedSearchResults);
    } else if (products.length > 0) {
      const updatedProducts = [...products];
      updatedProducts.pop();
      setProducts(updatedProducts);
    }
  }

  //fungsi reset form
  function resetForm() {
    setProductName("");
    setProductCategory("");
    setProductDescription("");
    setProductImage("");
    setProductFreshness("");
    setProductPrice(0);
  }

  // TODO: Fungsi ini beri validasi ketika semua input belum terisi maka data tidak di push ke tabel
  function handleSubmit(event) {
    event.preventDefault();
    if (productName.length > 0) {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productImage: productImage,
        productFreshness: productFreshness,
        productPrice: productPrice,
        productDescription: productDescription,
      };
      const dupeProducts = [...products, product];
      setProducts(dupeProducts);
      // TODO: Data yang telah di input, silahkan di reset seperti semula
      resetForm();
    } else {
      alert("Input belum terisi semua");
    }
  }

  return (
    <Layout>
      <div className="container py-8 mx-auto">
        <div className="flex items-center justify-center sm:flex-col">
          <img
            className="w-10 h-15"
            src="src/assets/bootstrap-logo.svg"
            alt="Bootstrap"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-bold">CREATE PRODUCT</h1>
        </div>
        <div className="text-center">
          <p>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto">
        <h5 className="font-bold ml-[25px]">Detail Product</h5>
        <Input
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Name"
          type="text"
          defaultValue={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <Select
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Category"
          placeholder="Choose..."
          options={["Keyboard", "Mouse", "Monitor"]}
          onChange={(event) => setProductCategory(event.target.value)}
        />
        <Input
          className="border-2 rounded-md w-full"
          label="Image Of Product"
          type="file"
          defaultValue={productImage}
          onChange={(event) => setProductImage(event.target.value)}
        />
        <Select
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Freshness"
          placeholder="Choose..."
          options={["Brand New", "Second Hand", "Refubished"]}
          onChange={(event) => setProductFreshness(event.target.value)}
        />
        <TextArea
          label="Additional Description"
          type="text"
          defaultValue={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
        />
        <Input
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Price"
          type="number"
          defaultValue={productPrice}
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
        />
        <Button label="Submit" type="submit" />
      </form>

      <div className="container lg:ml-[150px] sm:ml-[50px]">
        <div className="overflow-x-auto">
          <h1 className="font-bold text-center pt-5">List Product</h1>
          {searchResults.length > 0 ? (
            <Table
              headers={[
                "No",
                "Product Name",
                "Product Category",
                "Image Of Product",
                "Product Freshness",
                "Additional Description",
                "Product Price",
              ]}
              datas={searchResults}
              handleDelete={handleDelete}
            />
          ) : (
            <Table
              headers={[
                "No",
                "Product Name",
                "Product Category",
                "Image Of Product",
                "Product Freshness",
                "Additional Description",
                "Product Price",
              ]}
              datas={products}
              handleDelete={handleDelete}
            />
          )}
        </div>

        <div className="mt-[15px]">
          <input
            className="border-2 rounded-md w-full sm:w-[300px] h-[35px] mb-3"
            type="text"
            placeholder="Search By Product Name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div>
          <button
            className="p-1 bg-[#0d6efd] rounded px-3 py-2 text-white"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="p-1 bg-[#db1514] rounded px-3 py-2 text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
}

export { CreateProduct1 };
