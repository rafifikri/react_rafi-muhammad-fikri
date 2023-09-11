import React from "react";

export default function Table(props) {
  const { headers = [], datas = [] } = props;

  return (
    <div className="shadow overflow-hidden rounded border-b border-gray-200">
      <table className="w-full table-auto">
        <thead className="bg-white-800 text-black">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          {datas.map((data) => (
            <tr key={data.id}>
              <th className="font-normal">{data.id}</th>
              <th className="font-normal">{data.productName}</th>
              <th className="font-normal">{data.productCategory}</th>
              <th className="font-normal">{data.productImage}</th>
              <th className="font-normal">{data.productFreshness}</th>
              <th className="font-normal">{data.productDescription}</th>
              <th className="font-normal">{data.productPrice}</th>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
