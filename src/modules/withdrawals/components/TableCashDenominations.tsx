import { IonCol } from "@ionic/react";
import useWithdrawals from "../hooks/useWithdrawals";

const TableCashDenominations: React.FC = () => {
  const { denominations, handleCashAmountChange } = useWithdrawals();

  return (
    <table className="w-full bg-white rounded-lg shadow-lg border-collapse table-fixed">
      <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
        <tr className="font-bold h-10 items-center rounded-t-lg">
          <th className="text-center font-semibold text-[1rem] px-2 w-4/12 text-ellipsis whitespace-nowrap overflow-hidden">
            Denominación
          </th>
          <th className="text-center font-semibold text-[1rem] px-1 w-3/12 text-ellipsis whitespace-nowrap overflow-hidden">
            Cantidad
          </th>
          <th className="text-center font-semibold text-[1rem] px-1 w-5/12 text-ellipsis whitespace-nowrap overflow-hidden">
            Total
          </th>
        </tr>
      </thead>

      <tbody className="max-h-24 overflow-y-auto">
        {denominations?.map((item: any, index: any) => (
          <tr
            key={index}
            className={`text-center ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <td className="text-gray-700 text-[14px] px-1 h-10 w-4/12">
              {item.denominacion}
            </td>
            <td className="overflow-hidden text-ellipsis whitespace-nowrap w-3/12">
              <input
                className="h-full !shadow-none w-full outline-none text-[14px] text-center !bg-transparent"
                type="number"
                value={item.cantidad}
                onChange={(e) => handleCashAmountChange(index, e.target.value)}
              />
            </td>
            <td className="text-gray-700 text-[14px] h-10 w-5/12">
              {item.total.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCashDenominations;
