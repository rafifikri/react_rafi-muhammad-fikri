import React, { Component, useState, useEffect } from "react";
import "../styles/createProduct.css";

import Layout from "../components/layout";
import { Input, Select, TextArea } from "../components/input";
import Button from "../components/button";
import Table from "../components/table";
import article from "../components/article";

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

  //state pesan kesalahan
  const [productNameError, setProductNameError] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productImageError, setProductImageError] = useState("");
  const [productFreshnessError, setProductFreshnessError] = useState("");
  const [productDescriptionError, setProductDescriptionError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  //state merubah bahasa
  const [language, setLanguage] = useState("en");

  //function handle input product
  function handleProductNameChange(event) {
    const newName = event.target.value;
    setProductName(newName);

    // Validasi panjang karakter
    if (newName.length == 0) {
      setProductNameError("Please enter a valid product name.");
    } else if (newName.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else {
      setProductNameError(""); // Hapus pesan kesalahan jika valid
    }
  }

  function handleProductCategoryChange(event) {
    const newCategory = event.target.value;
    setProductCategory(newCategory);

    // Validasi panjang karakter
    if (newCategory.length === "") {
      setProductCategoryError("Form must be filled in.");
    } else {
      setProductCategoryError(""); // Hapus pesan kesalahan jika valid
    }
  }

  function handleProductImageChange(event) {
    const newImage = event.target.value;
    setProductImage(newImage);

    // Validasi panjang karakter
    if (newImage.length === "") {
      setProductImageError("Form must be filled in.");
    } else {
      setProductImageError(""); // Hapus pesan kesalahan jika valid
    }
  }

  function handleProductFreshnessChange(event) {
    const newFreshness = event.target.value;
    setProductFreshness(newFreshness);

    // Validasi panjang karakter
    if (newFreshness.length === "") {
      setProductFreshnessError("Form must be filled in.");
    } else {
      setProductFreshnessError(""); // Hapus pesan kesalahan jika valid
    }
  }

  function handleProductDescriptionChange(event) {
    const newDescription = event.target.value;
    setProductDescription(newDescription);

    // Validasi panjang karakter
    if (newDescription.length == 0) {
      setProductDescriptionError("Form must be filled in.");
    } else {
      setProductDescriptionError(""); // Hapus pesan kesalahan jika valid
    }
  }

  function handleProductPriceChange(event) {
    const newPrice = event.target.value;
    setProductPrice(newPrice);

    // Validasi panjang karakter
    if (newPrice.length == 0) {
      setProductPriceError("Form must be filled in.");
    } else {
      setProductPriceError(""); // Hapus pesan kesalahan jika valid
    }
  }

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

  // Fungsi untuk menghasilkan nomor acak dan menampilkannya di konsol
  function handleRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  }

  // Fungsi untuk mengganti bahasa
  function toggleLanguage() {
    // Ganti bahasa berdasarkan bahasa saat ini
    if (language === "en") {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
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
      <div className="container py-8 mx-auto ">
        <button
          className="bg-[#0d6efd] text-white font-semibold px-3 py-2 rounded-full"
          onClick={toggleLanguage}
        >
          {language === "en" ? "Switch to Bahasa" : "Switch to English"}
        </button>
        <div className="flex items-center justify-center sm:flex-col">
          <img
            className="w-10 h-15"
            src="src/assets/bootstrap-logo.svg"
            alt="Bootstrap"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-bold">
            {language === "en" ? article.title.en : article.title.id}
          </h1>
        </div>
        <div className="text-center">
          <p>
            {language === "en"
              ? article.description.en
              : article.description.id}
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
          onChange={handleProductNameChange}
        />
        {productNameError && (
          <p className="text-red-500 pl-5">{productNameError}</p>
        )}
        <Select
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Category"
          placeholder="Choose..."
          options={["Keyboard", "Mouse", "Monitor"]}
          onChange={handleProductCategoryChange}
        />
        {productCategoryError && (
          <p className="text-red-500 pl-5">{productCategoryError}</p>
        )}
        <Input
          className="file:border-[#0d6efd] border-2 rounded-md w-full file:hover:cursor-pointer hover:cursor-pointer"
          label="Image Of Product"
          type="file"
          defaultValue={productImage}
          onChange={handleProductImageChange}
        />
        {productImageError && (
          <p className="text-red-500 pl-5">{productImageError}</p>
        )}
        <Select
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Freshness"
          placeholder="Choose..."
          options={["Brand New", "Second Hand", "Refubished"]}
          onChange={handleProductFreshnessChange}
        />
        {productFreshnessError && (
          <p className="text-red-500 pl-5">{productFreshnessError}</p>
        )}
        <TextArea
          label="Additional Description"
          type="text"
          defaultValue={productDescription}
          onChange={handleProductDescriptionChange}
        />
        {productDescriptionError && (
          <p className="text-red-500 pl-5">{productDescriptionError}</p>
        )}
        <Input
          className="border-2 rounded-md w-full sm:w-[300px] h-[35px]"
          label="Product Price"
          type="number"
          defaultValue={productPrice}
          onChange={handleProductPriceChange}
        />
        {productPriceError && (
          <p className="text-red-500 pl-5">{productPriceError}</p>
        )}
        <Button label="Submit" type="submit" />
      </form>

      <div className="container mx-auto mt-5">
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

        <div className="mt-[15px] flex justify-between w-full">
          <input
            className="border-2 rounded-md w-full sm:w-[300px] h-[35px] mb-3"
            type="text"
            placeholder="Search By Product Name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            className="bg-[#0d6efd] text-white font-semibold px-3 py-2 rounded-md"
            onClick={handleRandomNumber}
          >
            Generate Random Number
          </button>
        </div>
        <div>
          <button
            className="p-1 bg-[#0d6efd] rounded-md px-3 py-2 border border-[#0d6efd] text-white font-semibold"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bg-transparent hover:bg-[#0d6efd] text-[#0d6efd] font-semibold hover:text-white px-3 py-2 border border-[#0d6efd] hover:border-transparent rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </Layout>
  );
}

export { CreateProduct1 };
