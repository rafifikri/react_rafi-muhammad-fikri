import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table(props) {
  const {
    headers = [],
    datas = [],
    isReady,
    onEditClick,
    onDeleteClick,
  } = props;
  const navigate = useNavigate();

  return (
    <div className="shadow overflow-hidden rounded border-b border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-white-800 text-black">
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header} </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isReady &&
              datas.map((data) => (
                <tr key={data.id} className="hover">
                  {Object.keys(data).map((key, index) => (
                    <td key={index}>{data[key]}</td>
                  ))}
                  <td>
                    <div className="flex gap-3">
                      <IoPencil
                        onClick={onEditClick ? () => onEditClick(data) : null}
                      />
                      <IoTrash
                        onClick={
                          onDeleteClick ? () => onDeleteClick(data) : null
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Table };
