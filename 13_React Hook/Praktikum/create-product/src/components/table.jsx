import React from "react";

export default function Table(props) {
  const { headers = [], datas = [] } = props;

  return (
    <div className="shadow overflow-hidden rounded border-b border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-white-800 text-black">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header} </th>
              ))}
            </tr>
            {datas.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productImage}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productDescription}</td>
                <td>{data.productPrice}</td>
                <td>
                  <div className="flex">
                    <button
                      className="p-2 rounded-md bg-[#008D52] text-white"
                      onClick={() => props.handleEdit(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-2 rounded-md bg-red-500 text-white"
                      onClick={() => props.handleDelete(data)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}
