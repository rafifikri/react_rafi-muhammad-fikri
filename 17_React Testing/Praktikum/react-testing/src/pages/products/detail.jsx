import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const productData = JSON.parse(localStorage.getItem("products"));
    const selectedProduct = productData.find((product) => product.id === id);

    setProduct(selectedProduct);

    setIsReady(true);
  }, [id]);

  return (
    <Layout>
      {isReady ? (
        <>
          {product ? (
            <>
              <h1 className="text-2xl mb-4">DETAIL PRODUCT</h1>
              <p>ID: {id}</p>
              <p>Product name: {product.productName}</p>
              <p>Product category: {product.productCategory}</p>
              <p>
                Product image:
                <img src={product.image} alt={product.image} />
              </p>
              <p>Product freshness: {product.productFreshness}</p>
              <p>Product description: {product.additionalDescription}</p>
              <p>Product price: ${product.productPrice}</p>
            </>
          ) : (
            <p>Product not found</p>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
}
