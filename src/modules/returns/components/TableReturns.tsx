import useReturns from "../hooks/useReturns";

const TableReturns: React.FC = () => {
  const { dataItems } = useReturns();

  return (
    <>
      <table className="w-full bg-white rounded-lg shadow-lg border-collapse">
        <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
          <tr className="font-bold h-10 items-center">
            <th className="text-center w-20 font-semibold text-[1rem] px-2 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap truncate">
              CLAVE
            </th>
            <th className="text-center w-[15%] font-semibold text-[1rem] px-2 whitespace-nowrap">
              ARTÍCULO
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              C. ANT
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              C. DEV
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              C. NVO
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              PRECIO U
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              TOTAL
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              N TOTAL
            </th>
          </tr>
        </thead>

        <tbody>
          {dataItems.map((item: any, index: any) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } ${item.cantDev === 0 ? "bg-red-100" : ""}`}
            >
              <td className="text-gray-700 text-[14px] px-3 h-10 min-w-32">
                {item.clave}
              </td>
              <td className="px-3 w-40">
                {/* {item.articulo}  */}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.cantAnt}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.cantDev}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.cantNvo}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.precioU}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.total}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.nTotal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableReturns;
