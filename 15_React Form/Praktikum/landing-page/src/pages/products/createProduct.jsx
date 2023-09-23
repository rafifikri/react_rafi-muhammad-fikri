import React, { Component, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import "../../styles/createProduct.css";

import Layout from "../../components/layout";
import { Input, Select, TextArea, Radio } from "../../components/input";
import Button from "../../components/button";
import Table from "../../components/table";
import article from "../../components/article";

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

  //state edit
  const [editingProduct, setEditingProduct] = useState(null);

  //cek UUID
  const randomUUID = uuidv4();
  console.log("Random UUID:", randomUUID);

  //function handle input product
  function handleProductNameChange(event) {
    const newName = event.target.value;
    setProductName(newName);

    if (newName.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else {
      const namePattern = /^[A-Za-z\s]{1,25}$/;
      if (!namePattern.test(newName)) {
        setProductNameError("Please enter a valid product name.");
      } else {
        setProductNameError("");
      }
    }
  }

  function handleProductCategoryChange(event) {
    const newCategory = event.target.value;
    setProductCategory(newCategory);

    const categoryPattern = /.+/;
    if (!categoryPattern.test(newCategory)) {
      setProductCategoryError("Form must be filled in.");
    } else {
      setProductCategoryError("");
    }
  }

  function handleProductImageChange(event) {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setProductImage(imageUrl);
      setProductImageError("");
    } else {
      setProductImage(null);
      setProductImageError("Please select a file.");
    }
  }

  function handleProductFreshnessChange(event) {
    const newFreshness = event.target.value;
    setProductFreshness(newFreshness);

    if (!newFreshness) {
      setProductFreshnessError("Please select a product freshness option.");
    } else {
      setProductFreshnessError("");
    }
  }

  function handleProductDescriptionChange(event) {
    const newDescription = event.target.value;
    setProductDescription(newDescription);

    // Validasi panjang karakter
    if (newDescription.length == 0) {
      setProductDescriptionError("Form must be filled in.");
    } else {
      setProductDescriptionError("");
    }
  }

  function handleProductPriceChange(event) {
    const newPrice = event.target.value;
    setProductPrice(newPrice);

    const pricePattern = /^\d+(\.\d{1,2})?$/;
    if (!pricePattern.test(newPrice)) {
      setProductPriceError("Form must be filled in.");
    } else {
      setProductPriceError("");
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
    if (searchResults.length > 0 || products.length > 0) {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin menghapus data ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
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
      });
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
    if (language === "en") {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
  }

  function handleEdit(product) {
    setProductName(product.productName);
    setProductCategory(product.productCategory);
    setProductDescription(product.productDescription);
    setProductImage(product.productImage);
    setProductFreshness(product.productFreshness);
    setProductPrice(product.productPrice);
    setEditingProduct(product);
  }

  // TODO: Fungsi ini beri validasi ketika semua input belum terisi maka data tidak di push ke tabel
  function handleSubmit(event) {
    event.preventDefault();

    if (
      productName.length > 0 &&
      productCategory.length > 0 &&
      productImage.length > 0 &&
      productFreshness.length > 0 &&
      productDescription.length > 0 &&
      productPrice !== ""
    ) {
      const product = {
        id: uuidv4(),
        productName: productName,
        productCategory: productCategory,
        productImage: productImage,
        productFreshness: productFreshness,
        productPrice: productPrice,
        productDescription: productDescription,
      };

      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      if (editingProduct) {
        const updatedProducts = existingProducts.map((productEdit) =>
          productEdit.id === editingProduct.id ? product : productEdit
        );

        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setProducts(updatedProducts);
        setEditingProduct(null);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product has been successfully edited!",
        });
      } else {
        const updatedProducts = [...existingProducts, product];

        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setProducts(updatedProducts);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product has been successfully added!",
        });
      }

      resetForm();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields.",
      });
    }
  }

  useEffect(() => {
    Swal.fire({
      title: "Welcome",
      icon: "info",
      confirmButtonText: "OK",
    });
  }, []);

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
            {language === "en"
              ? article.titleProduct.en
              : article.titleProduct.id}
          </h1>
        </div>
        <div className="text-center">
          <p>
            {language === "en"
              ? article.descriptionProduct.en
              : article.descriptionProduct.id}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto">
        <h5 className="font-bold ml-[25px]">
          {editingProduct ? "Edit Product" : "Detail Product"}
        </h5>
        <Input
          label="Product Name"
          type="text"
          defaultValue={productName}
          onChange={handleProductNameChange}
        />
        {productNameError && (
          <p className="text-red-500 pl-5">{productNameError}</p>
        )}
        <Select
          label="Product Category"
          placeholder="Choose..."
          options={["Keyboard", "Mouse", "Monitor"]}
          onChange={handleProductCategoryChange}
        />
        {productCategoryError && (
          <p className="text-red-500 pl-5">{productCategoryError}</p>
        )}
        <Input
          type="file"
          defaultValue={productImage}
          onChange={handleProductImageChange}
        />
        {productImage && (
          <img
            src={productImage}
            alt="Product"
            className="w-32 h-32 mt-2 pl-5"
          />
        )}
        {productImageError && (
          <p className="text-red-500 pl-5">{productImageError}</p>
        )}
        <div className="sm:ml-6 mt-2">
          <label>Product Freshness</label>
          <Radio
            name="productFreshness"
            type="radio"
            label="Brand New"
            value="Brand New"
            onChange={handleProductFreshnessChange}
          />
          <Radio
            name="productFreshness"
            label="Second Hand"
            type="radio"
            value="Second Hand"
            onChange={handleProductFreshnessChange}
          />
          <Radio
            name="productFreshness"
            type="radio"
            label="Refurbished"
            value="Refurbished"
            onChange={handleProductFreshnessChange}
          />
        </div>
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
          label="Product Price"
          type="number"
          defaultValue={productPrice}
          onChange={handleProductPriceChange}
        />
        {productPriceError && (
          <p className="text-red-500 pl-5">{productPriceError}</p>
        )}
        <Button label={editingProduct ? "Update" : "Submit"} type="submit" />
      </form>

      <div className="container mx-auto mt-5">
        <h1 className="font-bold text-center pt-5">List Product</h1>
        <Table
          headers={[
            "No",
            "Product Name",
            "Product Category",
            "Image Of Product",
            "Product Freshness",
            "Additional Description",
            "Product Price",
            "Actions",
          ]}
          datas={searchResults.length > 0 ? searchResults : products}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

        <div className="mt-[15px] w-full">
          <input
            className="border-2 rounded-md w-full sm:w-[300px] h-[35px] mb-3"
            type="text"
            placeholder="Search By Product Name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            className="bg-[#0d6efd] text-white font-semibold px-3 py-[6px] rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-[#0d6efd] text-white font-semibold px-3 py-2 rounded-md"
            onClick={handleRandomNumber}
          >
            Generate Random Number
          </button>
        </div>
      </div>
    </Layout>
  );
}

export { CreateProduct1 };

export default CreateProduct1;
