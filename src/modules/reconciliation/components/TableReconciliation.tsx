import { useState } from "react";

const TableReconciliation: React.FC = () => {
  const [dataCollection, setDataCollection] = useState<any>([
    {
      fecha: "10//10/2024",
      turno: 1,
      efectivo: 500,
      doctos: 2000,
      diferencia: 500,
    },
    {
      fecha: "08//10/2024",
      turno: 1,
      efectivo: 200,
      doctos: 320,
      diferencia: 0,
    },
    {
      fecha: "01//10/2024",
      turno: 1,
      efectivo: 2000,
      doctos: 5000,
      diferencia: 1500,
    },
  ]);

  return (
    <table className="w-full p-0 m-0">
      <tr className="bg-myFriend-600 text-white font-bold h-10 items-center">
        <th className="text-center min-w-32 font-semibold text-[1rem]">
          Fecha
        </th>
        <th className="text-center min-w-[20%] font-semibold text-[1rem]">
          Turno
        </th>
        <th className="text-center font-semibold text-[1rem]">
          Efectivo
        </th>
        <th className="text-center font-semibold text-[1rem]">
          Doctos
        </th>
        <th className="text-center font-semibold text-[1rem]">
          Diferencia
        </th>
      </tr>

      {dataCollection.map((item: any, index: any) => (
        <tr key={index} className="bg-white h-10">
          <td className="text-center">{item.fecha}</td>
          <td className="text-center">{item.turno}</td>
          <td className="text-center">{item.efectivo}</td>
          <td className="text-center">{item.doctos}</td>
          <td className="text-center">{item.doctos}</td>
        </tr>
      ))}
    </table>
  );
};

export default TableReconciliation;
