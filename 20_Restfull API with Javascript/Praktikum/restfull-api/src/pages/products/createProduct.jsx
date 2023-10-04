import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "../../utils/swal";
import { IoPencil, IoTrash } from "react-icons/io5";
import * as z from "zod";
import "../../styles/createProduct.css";

import { Input, Select, TextArea, RadioGroup } from "../../components/input";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Table from "../../components/table";
import article from "../../components/article";
import { setProducts } from "../../utils/states/redux/reducers/reducer";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../utils/api/products/api";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const schema = z.object({
  id: z.string().optional(),
  productName: z
    .string()
    .min(1, { message: "Please enter a valid product name" })
    .max(25, { message: "Product name must not exceed 25 characters" })
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: "Product Name cannot contain special characters",
    }),
  productCategory: z
    .string()
    .min(1, { message: "Please enter a valid product category" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  productFreshness: z
    .string()
    .min(1, { message: "Please enter a valid product freshness" }),
  additionalDescription: z
    .string()
    .min(1, { message: "Please enter a valid additional description" }),
  productPrice: z
    .number()
    .min(1, { message: "Please enter a valid product price" }),
});

export default function Index() {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState("");
  const [language, setLanguage] = useState("en");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      productFreshness: "",
      productPrice: 0,
    },
  });

  const columns = useMemo(
    () => [
      {
        header: "No",
        accessorKey: "id",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Name",
        accessorKey: "productName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Category",
        accessorKey: "productCategory",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Image of Product",
        accessorKey: "image",
        cell: (info) => (
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={info.row.original.image}
                  alt={info.row.original.productName}
                />
              </div>
            </div>
            <p>{info.row.original.image}</p>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Freshness",
        accessorKey: "productFreshness",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Additional Description",
        accessorKey: "additionalDescription",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Price",
        accessorKey: "productPrice",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionEdit",
        cell: (info) => (
          <IoPencil onClick={() => onClickEdit(info.row.original)} />
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionDelete",
        cell: (info) => (
          <IoTrash onClick={() => onClickDelete(info.row.original.id)} />
        ),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProducts();
      dispatch(setProducts(result));
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function onSubmit(data) {
    try {
      await createProduct(data);
      Swal.fire({
        title: "Success",
        text: "Successfully created a new product",
        showCancelButton: false,
      });
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  async function onSubmitEdit(data) {
    try {
      await updateProduct({ ...data, id: selectedId });
      Swal.fire({
        title: "Success",
        text: "Successfully updated the product",
        showCancelButton: false,
      });
      setSelectedId("");
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("productName", data.productName);
    setValue("productCategory", data.productCategory);
    setValue("image", data.image);
    setValue("productFreshness", data.productFreshness);
    setValue("additionalDescription", data.additionalDescription);
    setValue("productPrice", data.productPrice);
  }

  async function onClickDelete(id_product) {
    try {
      await deleteProduct(id_product);
      Swal.fire({
        title: "Success",
        text: "Successfully deleted the product",
        showCancelButton: false,
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  function toggleLanguage() {
    if (language === "en") {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
  }

  const handleSearch = () => {
    const filteredData = products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
    });
    setFilteredProducts(filteredData);
  };

  function handleRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  }

  return (
    <Layout>
      <div className="w-full grow py-4 px-8">
        <div className="container py-8 mx-auto ">
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
          <div className="flex items-center justify-center">
            <button
              className="bg-[#0d6efd] text-white font-semibold px-3 py-2 rounded-full"
              onClick={toggleLanguage}
            >
              {language === "en" ? "Switch to Bahasa" : "Switch to English"}
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(selectedId == "" ? onSubmit : onSubmitEdit)}
          aria-label="product-form"
        >
          <Input
            id="input-product-name"
            aria-label="input-product-name"
            label="Product Name"
            name="productName"
            register={register}
            error={errors.productName?.message}
          />
          <Select
            id="input-product-category"
            aria-label="input-product-category"
            label="Product Category"
            name="productCategory"
            options={["Electronics", "Furniture", "Appliance"]}
            placeholder="Choose..."
            register={register}
            error={errors.productCategory?.message}
          />
          <Input
            id="input-product-image"
            data-testid="upload-product-image"
            aria-label="input-product-image"
            label="Image of Product"
            name="image"
            type="file"
            register={register}
            error={errors.image?.message}
          />
          <RadioGroup
            id="input-product-freshness"
            aria-label="input-product-freshness"
            label="Product Freshness"
            name="productFreshness"
            options={["Brand New", "Second Hand", "Refurbished"]}
            register={register}
            error={errors.productFreshness?.message}
          />
          <TextArea
            id="input-product-description"
            aria-label="input-product-description"
            label="Additional Description"
            role="input"
            name="additionalDescription"
            register={register}
            error={errors.additionalDescription?.message}
          />
          <Input
            id="input-product-price"
            aria-label="input-product-price"
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            error={errors.productPrice?.message}
          />
          <Button
            id="btn-submit"
            aria-label="btn-submit"
            label="Submit"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
        <Table
          datas={searchKeyword !== "" ? filteredProducts : products}
          columns={columns}
        />

        <div className="mt-[15px] w-full">
          <input
            className="border rounded-lg bg-slate-200 dark:bg-neutral-600 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full file:border-[#0d6efd] file:hover:cursor-pointer sm:w-[300px] h-[35px] mb-3"
            type="text"
            placeholder="Search By Product Name"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <button
            className="bg-[#0d6efd] text-white font-semibold px-3 py-[6px] rounded-md mb-4"
            onClick={handleSearch}
          >
            Search
          </button>

          <div>
            <button
              className="bg-[#0d6efd] text-white font-semibold px-3 py-2 rounded-md"
              onClick={handleRandomNumber}
            >
              Generate Random Number
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
