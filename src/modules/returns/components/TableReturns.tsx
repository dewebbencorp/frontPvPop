import useReturns from "../hooks/useReturns";

const TableReturns: React.FC = () => {
  const { dataItems } = useReturns();

  return (
    <table className="w-full p-0 m-0">
      <tr className="bg-myFriend-600 text-white font-bold h-10 items-center">
        <th className="text-center min-w-32 font-semibold text-[1rem]">
          CLAVE
        </th>
        <th className="text-center w-[15%] font-semibold text-[1rem]">
          ARTÍCULO
        </th>
        <th className="text-center font-semibold text-[1rem] px-1">
          C. ANT
        </th>
        <th className="text-center font-semibold text-[1rem] px-1">
          C. DEV
        </th>
        <th className="text-center font-semibold text-[1rem] px-1">
          C. NVO
        </th>
        <th className="text-center font-semibold text-[1rem] px-1">
          PRECIO U
        </th>
        <th className="text-center font-semibold text-[1rem] px-1">TOTAL</th>
        <th className="text-center font-semibold text-[1rem] px-1">
          N TOTAL
        </th>
      </tr>

      {dataItems.map((item:any, index:any) => (
        <tr key={index} className="bg-white h-10">
          <td className="px-2 min-w-32">{item.clave}</td>
          <td className="px-2 overflow-hidden text-ellipsis whitespace-nowrap w-[15%]">
            {item.articulo}
          </td>
          <td className="px-2 text-center">{item.cantAnt}</td>
          <td className="px-2 text-center">{item.cantDev}</td>
          <td className="px-2 text-center">{item.cantNvo}</td>
          <td className="px-2 text-center">{item.precioU}</td>
          <td className="px-2 text-center">{item.total}</td>
          <td className="px-2 text-center">{item.nTotal}</td>
        </tr>
      ))}
    </table>
  );
};

export default TableReturns;
