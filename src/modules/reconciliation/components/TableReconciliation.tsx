import { useState } from "react";

const TableReconciliation: React.FC = () => {
  const [dataCollection, setDataCollection] = useState<any>([
    {
      fecha: "10/10/2024",
      turno: 1,
      efectivo: 500,
      doctos: 2000,
      diferencia: 500,
    },
    {
      fecha: "08/10/2024",
      turno: 1,
      efectivo: 200,
      doctos: 320,
      diferencia: 0,
    },
    {
      fecha: "01/10/2024",
      turno: 1,
      efectivo: 2000,
      doctos: 5000,
      diferencia: 1500,
    },
  ]);

  return (
    <table className="w-full bg-white rounded-lg shadow-lg border-collapse">
      <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
        <tr className="font-bold h-10 items-center">
          <th className="text-center min-w-32 font-semibold text-[1rem] px-2 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap truncate">
            Fecha
          </th>
          <th className="text-center min-w-[20%] font-semibold text-[1rem] px-2 whitespace-nowrap">
            Turno
          </th>
          <th className="text-center font-semibold text-[1rem] px-2">
            Efectivo
          </th>
          <th className="text-center font-semibold text-[1rem] px-2">
            Doctos
          </th>
          <th className="text-center font-semibold text-[1rem] px-2">
            Diferencia
          </th>
        </tr>
      </thead>
      <tbody>
        {dataCollection.map((item: any, index: any) => (
          <tr
            key={index}
            className={`text-center ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <td className="text-gray-700 text-[14px] px-3 h-10 min-w-32">
              {item.fecha}
            </td>
            <td className="text-gray-700 text-[14px] px-3 h-10">
              {item.turno}
            </td>
            <td className="text-gray-700 text-[14px] px-3 h-10">
              {item.efectivo}
            </td>
            <td className="text-gray-700 text-[14px] px-3 h-10">
              {item.doctos}
            </td>
            <td className="text-gray-700 text-[14px] px-3 h-10">
              {item.diferencia}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableReconciliation;
