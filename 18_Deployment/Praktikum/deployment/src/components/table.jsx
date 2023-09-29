import React from "react";
import { useNavigate } from "react-router-dom";
import { IoPencil, IoTrash } from "react-icons/io5";

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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isReady &&
            datas.map((data) => (
              <tr key={data.id}>
                {Object.keys(data).map((key, index) => (
                  <td
                    key={index}
                    onClick={() => navigate(`/createProduct/${data.id}`)}
                  >
                    {key === "image" ? (
                      <img
                        src={data.image}
                        alt={data.productName}
                        style={{ width: "100px", height: "auto" }}
                      />
                    ) : (
                      data[key]
                    )}
                  </td>
                ))}
                <td>
                  <div className="flex gap-3">
                    <IoPencil
                      onClick={onEditClick ? () => onEditClick(data) : null}
                      data-testid="edit-icon"
                    />
                    <IoTrash
                      onClick={onDeleteClick ? () => onDeleteClick(data) : null}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
