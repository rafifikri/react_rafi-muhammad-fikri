import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout";
import { getDetailProducts } from "../../utils/api/products/api";
import { LoadingSpinner } from "../../components/loading";
import Swal from "../../utils/swal";
import { setProducts } from "../../utils/states/redux/reducers/reducer";

export default function Detail() {
  const { product } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailProducts(id);
      dispatch(setProducts(result));
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 className="text-2xl mb-4">DETAIL PRODUCT</h1>
          <p>Product name: {product.productName}</p>
          <p>Product category: {product.productCategory}</p>
          <p>Product freshness: {product.productFreshness}</p>
          <p>Product description: {product.additionalDescription}</p>
          <p>Product price: ${product.productPrice}</p>
        </div>
      )}
    </Layout>
  );
}
