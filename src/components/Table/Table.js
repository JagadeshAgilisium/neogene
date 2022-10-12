import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function Table() {
  const [batchSelector, setBatchSelector] = useState([]);
  const data = useSelector((state) => state.scan.batchRecord);
  const shouldRefresh = useSelector((state) => state.scan.refresh);
  console.log("Data @ Table : ",data)
  const zebraStripe = (i) => {
    return (i+1)%2===0 ? "bg-blue-300":"bg-white"
  };
  
  useEffect(() => {
    setBatchSelector(data);
  }, [data,shouldRefresh]);
  return (
    <div className="flex flex-col w-full px-10 pt-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="overflow-hidden">
            <table className="min-w-full text-center ">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 bg-blue-900 text-white "
                  >
                    Scan Type
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 bg-blue-900 text-white "
                  >
                    Operator Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 bg-blue-900 text-white "
                  >
                    Scan Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 bg-blue-900 text-white "
                  >
                    Scan Value
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-mediumpx-6 py-4 bg-blue-900 text-white "
                  >
                    Result
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium px-6 py-4 bg-blue-900 text-white "
                  >
                    Comments
                  </th>
                </tr>
              </thead>
              {batchSelector.map((details, i) => (
                <tbody key={i}>
                  <tr className={`${zebraStripe(i)}`}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.ScanType}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.OperatorName}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.ScanDate}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.ScanRecord}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.Result}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  ">
                      {details.Comments}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
