import useReconciliation from "../hooks/useReconciliation";

const TableReconciliation2: React.FC = () => {
  const { denominations, handleCashAmountChange, totalCash } = useReconciliation();

  return (
    <table className="w-full p-0 m-0">
      <tr className="bg-myFriend-600 text-white font-bold h-10 items-center rounded-t-lg">
        <th className="text-center font-semibold text-[1rem]">
          Denominación
        </th>
        <th className="text-center font-semibold text-[1rem]">
          Cantidad
        </th>
        <th className="text-center font-semibold text-[1rem]">
          Total
        </th>
      </tr>
      <div className="max-h-[240px] overflow-y-scroll rounded-b-lg">
        {denominations?.map((item:any, index:any) => (
          <tr key={index} className="bg-white h-10">
            <td className="text-center">{item.denominacion}</td>
            <td className="text-center max-h-10 overflow-hidden">
              <input
                className="h-full !shadow-none w-3/4 text-center"
                type="number"
                value={item.cantidad}
                onChange={(e) => handleCashAmountChange(index, e.target.value)}
              />
            </td>
            <td className="text-center">{item.total}</td>
          </tr>
        ))}
      </div>
    </table>
  );
};

export default TableReconciliation2;
